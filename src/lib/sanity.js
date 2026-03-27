import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: import.meta.env.VITE_SANITY_READ_TOKEN,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
