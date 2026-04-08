import { createClient } from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const writeToken = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_WRITE_TOKEN || process.env.VITE_SANITY_WRITE_TOKEN

const client = projectId && writeToken
  ? createClient({
      projectId,
      dataset,
      useCdn: false,
      apiVersion: '2024-01-01',
      token: writeToken,
    })
  : null

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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  if (!client) {
    return res.status(500).json({
      message: 'Finance submission API is not configured',
      error: 'Missing SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN environment variables',
    })
  }

  try {
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

    const created = await client.create(doc)

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
}
