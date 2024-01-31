import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const BlogPost = ({data, children}) => {
    console.log("Data at Blog Post", data)
  return (
    <Layout>
        <article style={{ width: '600px', margin: '100px auto' }}>
             <h1>{data.mdx.frontmatter.title}</h1>
             <p style={{fontStyle:'italic'}}>{data.mdx.excerpt}</p>
             <StaticImage src={data.mdx.frontmatter.image} alt={data.mdx.frontmatter.imageAlt}/>
             {children}
        </article>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
    mdx(id: { eq: $id }) {  
        frontmatter {
            author
            category
            date(formatString: "MMMM, DD, YYYY")
            image
            imageAlt
            keywords
            slug
            title
        }
        id
        excerpt
    }
}`

  export const Head = ({data}) => (
    <>
        <Seo title={data.mdx.frontmatter.title} description={data.mdx.excerpt} author={data.mdx.frontmatter.author} keywords={data.mdx.frontmatter.keywords}/>
    </>
  );

export default BlogPost