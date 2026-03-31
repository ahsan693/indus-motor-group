import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'

export function useCar(id) {
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    
    const query = `*[_type == "car" && _id == $id][0]`
    
    client.fetch(query, { id })
      .then(data => { setCar(data); setLoading(false) })
      .catch(err => { setError(err); setLoading(false); console.error('Sanity fetch error:', err) })
  }, [id])

  return { car, loading, error }
}
