import { useEffect, useState } from 'react'

export function useCar(id) {
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    fetch('/api/sanity-query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `*[_type == "car" && _id == $id][0]`,
        params: { id }
      })
    })
      .then(res => res.json())
      .then(data => { setCar(data); setLoading(false) })
      .catch(err => { setError(err); setLoading(false) })
  }, [id])

  return { car, loading, error }
}
