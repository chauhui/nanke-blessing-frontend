import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanityClient'

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source)
