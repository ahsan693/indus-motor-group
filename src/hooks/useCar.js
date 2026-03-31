import { useEffect, useState } from 'react'

export function useCar(id) {
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    
    const query = `*[_type == "car" && _id == $id][0]`
    
    fetch('/api/sanity-query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, params: { id } })
    })
      .then(res => res.json())
      .then(data => { setCar(data); setLoading(false) })
      .catch(err => { setError(err); setLoading(false); console.error('Fetch error:', err) })
  }, [id])

  return { car, loading, error }
}
