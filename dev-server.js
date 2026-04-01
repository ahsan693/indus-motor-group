import express from 'express'
import { createClient } from '@sanity/client'

const tryLoadEnvFile = (filePath) => {
  if (typeof process.loadEnvFile !== 'function') return

  try {
    process.loadEnvFile(filePath)
  } catch (error) {
    if (error?.code !== 'ENOENT') {
      console.warn(`[dev-server] Failed to load ${filePath}:`, error.message)
    }
  }
}

// Ensure Node process can read local env files used by Vite.
tryLoadEnvFile('.env')
tryLoadEnvFile('.env.local')

const sanityProjectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const sanityDataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const sanityReadToken = process.env.SANITY_READ_TOKEN || process.env.VITE_SANITY_READ_TOKEN

const app = express()
const PORT = process.env.API_PORT || 3001

// Parse JSON
app.use(express.json())

// Enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  next()
})

// Initialize Sanity client only when required config exists.
const client = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: true,
      apiVersion: '2024-01-01',
      token: sanityReadToken,
    })
  : null

if (!client) {
  console.warn(
    '[dev-server] Sanity projectId is missing. Set SANITY_PROJECT_ID or VITE_SANITY_PROJECT_ID in .env.local.',
  )
}

// API Routes
app.post('/api/sanity-query', async (req, res) => {
  try {
    if (!client) {
      return res.status(500).json({
        message: 'Sanity is not configured for local API server',
        error:
          'Missing SANITY_PROJECT_ID or VITE_SANITY_PROJECT_ID. Add it to .env.local and restart npm run dev.',
      })
    }

    const { query, params } = req.body

    if (!query) {
      return res.status(400).json({ message: 'Query is required' })
    }

    const data = await client.fetch(query, params || {})
    res.status(200).json(data)
  } catch (error) {
    console.error('Sanity query error:', error)
    res.status(500).json({ message: 'Failed to fetch data', error: error.message })
  }
})

app.listen(PORT, () => {
  console.log(`✓ Dev API server running on http://localhost:${PORT}`)
})
