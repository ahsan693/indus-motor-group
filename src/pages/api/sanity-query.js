import { client } from '../../lib/sanity'

export default async function handler(req, res) {
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
