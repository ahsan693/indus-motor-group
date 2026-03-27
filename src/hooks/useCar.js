import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'

export function useCar(id) {
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!id) return
    client.fetch(`*[_type == "car" && _id == $id][0]`, { id })
      .then(data => { setCar(data); setLoading(false) })
      .catch(err => { setError(err); setLoading(false) })
  }, [id])

  return { car, loading, error }
}
