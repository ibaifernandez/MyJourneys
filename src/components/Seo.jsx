import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Seo = ({ title, description, author, keywords, lang, image  }) => {
  const data = useStaticQuery(graphql`
      query {
        site {
            siteMetadata {
                title
                description
                siteUrl
                author
                icon
                keywords
                lang
                image
                twitter {
                  creator
                }
            }
        }
    }
    `)

  console.log(data)

  return (
    <>
        <title>{title} - {data.site.siteMetadata.title}</title>
        <meta name="description" content={description || data.site.siteMetadata.description} />
        <meta name="author" content={author || data.site.siteMetadata.author} />
        <meta name="keywords" content={keywords || data.site.siteMetadata.keywords} />
        <meta name="lang" content={lang || data.site.siteMetadata.lang} />
        <meta name="image" content={image || data.site.siteMetadata.image} />

        {/* Datos de Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.site.siteMetadata.title} />
        <meta name="twitter:description" content={data.site.siteMetadata.description} />
        <meta name="twitter:image" content={data.site.siteMetadata.image} />
        <meta name="twitter:creator" content={data.site.siteMetadata.twitter.creator} /> 
    
        {/* Datos de Facebook */}
        <meta property="og:title" content="MyJourneys" />
        <meta property="og:description" content={data.site.siteMetadata.description} />
        <meta property="og:image" content={data.site.siteMetadata.image} />
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:type" content="website" />

    </>
  )
}

export default Seo