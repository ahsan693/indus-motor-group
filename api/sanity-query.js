import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: process.env.VITE_SANITY_READ_TOKEN,
})

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
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
}
