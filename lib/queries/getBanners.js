import { client } from '../sanityClient'

export async function getBanners() {
  const query = `*[_type == "banner"] | order(order asc){
    _id,
    title,
    image {
      asset->{
        url
      }
    },
    url,
    order
  }`
  return await client.fetch(query)
}
