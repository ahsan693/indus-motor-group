import { useEffect, useState } from 'react'

export function useFinanceApplications() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const query = `*[_type == "financeApplication"] | order(submittedAt desc) {
      _id, _createdAt, _updatedAt,
      vehicleMake, model, year, monthlyBudget, salePrice,
      firstName, lastName, email, phoneNumber,
      consentShareWithProvider, consentMarketing, submittedAt
    }`

    fetch('/api/sanity-query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data?.error || data?.message || 'Failed to fetch finance applications')
        }
        return data
      })
      .then((data) => {
        setApplications(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
        console.error('Fetch error:', err)
      })
  }, [])

  return { applications, loading, error }
}
