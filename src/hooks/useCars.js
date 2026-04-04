import { useEffect, useState } from 'react'

export function useCars(filter = {}) {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let query = `*[_type == "car"`
    if (filter.status) query += ` && status == "${filter.status}"`
    if (filter.featured) query += ` && featured == true && defined(featuredOrder) && featuredOrder in [1,2,3,4]`
    if (filter.featured) {
      query += `] | order(featuredOrder asc, _updatedAt desc)[0...4]`
    } else {
      query += `] | order(_updatedAt desc)`
    }
    query += ` {
      _id, _createdAt, _updatedAt,
      make, model, year, price, mileage,
      fuelType, transmission, color, bodyType,
      seats,
      description, status, featured, featuredOrder, nctExpiry, owners,
      images
    }`

    fetch('/api/sanity-query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) {
          throw new Error(data?.error || data?.message || 'Failed to fetch cars')
        }
        return data
      })
      .then((data) => {
        setCars(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
        console.error('Fetch error:', err)
      })
  }, [filter.status, filter.featured])

  return { cars, loading, error }
}
