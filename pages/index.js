import Head from 'next/head'
import Image from 'next/image'
import { getBanners } from '../lib/queries/getBanners'

export async function getStaticProps() {
  const banners = await getBanners()
  return {
    props: {
      banners,
    },
    revalidate: 60,
  }
}

export default function Home({ banners }) {
  return (
    <div>
      <Head>
        <title>南科祈福 | 首頁</title>
      </Head>
      <main>
        <h1>首頁 Banner</h1>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem' }}>
          {banners.map((banner) => (
            <div key={banner._id} style={{ minWidth: 300 }}>
              {banner.image?.asset?.url && (
                <Image
                  src={banner.image.asset.url}
                  alt={banner.title}
                  width={600}
                  height={300}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              )}
              <h3>{banner.title}</h3>
              {banner.url && (
                <a href={banner.url} target="_blank" rel="noopener noreferrer">
                  🔗 查看連結
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}