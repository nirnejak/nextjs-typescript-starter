import { type Metadata } from "next"

import config from "@/config"

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

export const generateMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${config.baseUrl}/cover.png`

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    applicationName: config.appName,
    creator: config.creator,
    authors: [{ name: config.authorName, url: config.authorUrl }],
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    keywords: config.keywords,

    icons: {
      icon: "/favicon.ico",
      shortcut: "/icons/icon-512x512.png",
      apple: "/icons/icon-512x512.png",
    },
    manifest: `${config.baseUrl}/manifest.json`,

    openGraph: {
      type: "website",
      url: `${config.baseUrl}${path}`,
      siteName: "<Site Name>",
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
      // videos: "",  // INFO: og video option
    },

    twitter: {
      card: "summary_large_image",
      site: config.twitterSite,
      creator: config.twitterCreator,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    appleWebApp: {
      capable: true,
      title: metaTitle,
      startupImage: metaImage,
      statusBarStyle: "black-translucent",
    },

    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },

    appLinks: {},
  }
  return metadata
}

// INFO: Learn more at https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
// INFO: Test at https://search.google.com/test/rich-results
export const renderSchemaTags = (): React.ReactNode => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "SoftwareApplication", // INFO: Find your type here (SoftwareApp, Book...): https://developers.google.com/search/docs/appearance/structured-data/search-gallery
          name: config.appName,
          description: config.appDescription,
          image: `${config.baseUrl}/icon.png`,
          url: `${config.baseUrl}/`,
          author: {
            "@type": "Person",
            name: config.authorName,
          },
          datePublished: "2023-08-01",
          applicationCategory: "EducationalApplication",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            ratingCount: "26",
          },
          offers: [
            {
              "@type": "Offer",
              price: "9.00",
              priceCurrency: "USD",
            },
          ],
        }),
      }}
    ></script>
  )
}
