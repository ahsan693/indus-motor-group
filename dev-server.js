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
const sanityWriteToken =
  process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN || process.env.VITE_SANITY_WRITE_TOKEN

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
const readClient = sanityProjectId
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: true,
      apiVersion: '2024-01-01',
      token: sanityReadToken,
    })
  : null

const writeClient = sanityProjectId && sanityWriteToken
  ? createClient({
      projectId: sanityProjectId,
      dataset: sanityDataset,
      useCdn: false,
      apiVersion: '2024-01-01',
      token: sanityWriteToken,
    })
  : null

if (!readClient) {
  console.warn(
    '[dev-server] Sanity projectId is missing. Set SANITY_PROJECT_ID or VITE_SANITY_PROJECT_ID in .env.local.',
  )
}

if (!writeClient) {
  console.warn(
    '[dev-server] Finance form submissions are disabled. Set SANITY_API_WRITE_TOKEN (or SANITY_WRITE_TOKEN) in .env.local.',
  )
}

const toStringOrEmpty = (value) => (typeof value === 'string' ? value.trim() : '')

const toOptionalNumber = (value) => {
  if (value === null || value === undefined || value === '') return undefined
  const numeric = Number(String(value).replace(/[^\d.]/g, ''))
  return Number.isFinite(numeric) ? numeric : undefined
}

const toOptionalInteger = (value) => {
  if (value === null || value === undefined || value === '') return undefined
  const parsed = Number.parseInt(String(value).replace(/[^\d]/g, ''), 10)
  return Number.isFinite(parsed) ? parsed : undefined
}

// API Routes
app.post('/api/sanity-query', async (req, res) => {
  try {
    if (!readClient) {
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

    const data = await readClient.fetch(query, params || {})
    res.status(200).json(data)
  } catch (error) {
    console.error('Sanity query error:', error)
    res.status(500).json({ message: 'Failed to fetch data', error: error.message })
  }
})

app.post('/api/finance-application', async (req, res) => {
  try {
    if (!writeClient) {
      return res.status(500).json({
        message: 'Finance submission API is not configured',
        error: 'Missing SANITY_API_WRITE_TOKEN (or SANITY_WRITE_TOKEN) in .env.local.',
      })
    }

    const payload = req.body || {}

    const doc = {
      _type: 'financeApplication',
      vehicleMake: toStringOrEmpty(payload.vehicleMake),
      model: toStringOrEmpty(payload.model),
      year: toOptionalInteger(payload.year),
      monthlyBudget: toStringOrEmpty(payload.monthlyBudget),
      salePrice: toOptionalNumber(payload.salePrice),
      firstName: toStringOrEmpty(payload.firstName),
      lastName: toStringOrEmpty(payload.lastName),
      email: toStringOrEmpty(payload.email),
      phoneNumber: toStringOrEmpty(payload.phoneNumber),
      consentShareWithProvider: Boolean(payload.consentShareWithProvider),
      consentMarketing: Boolean(payload.consentMarketing),
      submittedAt: new Date().toISOString(),
    }

    if (!doc.salePrice || !doc.firstName || !doc.lastName || !doc.email) {
      return res.status(400).json({
        message: 'Missing required fields',
        error: 'salePrice, firstName, lastName, and email are required',
      })
    }

    if (!doc.consentShareWithProvider) {
      return res.status(400).json({
        message: 'Consent is required',
        error: 'You must agree to share details with a finance provider',
      })
    }

    const created = await writeClient.create(doc)

    return res.status(201).json({
      success: true,
      id: created._id,
      submittedAt: doc.submittedAt,
    })
  } catch (error) {
    console.error('Finance application submission error:', error)
    return res.status(500).json({
      message: 'Failed to submit finance application',
      error: error.message,
    })
  }
})

app.listen(PORT, () => {
  console.log(`✓ Dev API server running on http://localhost:${PORT}`)
})
