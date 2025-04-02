import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'p4osbiim',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
