import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'

export function useCars(filter = {}) {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let query = `*[_type == "car"`
    if (filter.status) query += ` && status == "${filter.status}"`
    if (filter.featured) query += ` && featured == true`
    query += `] | order(_createdAt desc) {
      _id, make, model, year, price, mileage,
      fuelType, transmission, color, bodyType,
      description, status, featured, nctExpiry, owners,
      "images": images[]{
        "url": asset->url,
        "alt": alt
      }
    }`

    client.fetch(query)
      .then(data => { setCars(data); setLoading(false) })
      .catch(err => { setError(err); setLoading(false) })
  }, [filter.status, filter.featured])

  return { cars, loading, error }
}
