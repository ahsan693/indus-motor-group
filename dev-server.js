import dotenv from 'dotenv'
import express from 'express'
import { createClient } from '@sanity/client'

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' })

// Debug: Log environment variables
console.log('🔍 Environment variables loaded:')
console.log('  VITE_SANITY_PROJECT_ID:', process.env.VITE_SANITY_PROJECT_ID ? '✓ Found' : '✗ Missing')
console.log('  VITE_SANITY_DATASET:', process.env.VITE_SANITY_DATASET || 'production')
console.log('  VITE_SANITY_READ_TOKEN:', process.env.VITE_SANITY_READ_TOKEN ? '✓ Found' : '✗ Missing')

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

// Initialize Sanity client
const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.VITE_SANITY_READ_TOKEN,
})

// API Routes
app.post('/api/sanity-query', async (req, res) => {
  try {
    const { query, params } = req.body

    if (!query) {
      return res.status(400).json({ message: 'Query is required' })
    }

    console.log('📍 Sanity query request - executing query...')
    const data = await client.fetch(query, params || {})
    console.log('✓ Query successful, returning data')
    res.status(200).json(data)
  } catch (error) {
    console.error('❌ Sanity query error:', error.message)
    console.error('Stack:', error.stack)
    
    // Ensure response is always valid JSON
    const errorResponse = {
      message: 'Failed to fetch data',
      error: error.message || 'Unknown error',
      details: error.message,
    }
    
    res.status(500).json(errorResponse)
  }
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    projectId: process.env.VITE_SANITY_PROJECT_ID ? '✓' : '✗',
    token: process.env.VITE_SANITY_READ_TOKEN ? '✓' : '✗',
    dataset: process.env.VITE_SANITY_DATASET || 'production',
  })
})

app.listen(PORT, () => {
  console.log(`✓ Dev API server running on http://localhost:${PORT}`)
})
