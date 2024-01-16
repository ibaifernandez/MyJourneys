import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
    console.log("data @ blog", data)
    return (
      <Layout pageTitle="My Blog Posts">
        {
          data.allMdx.nodes.map((node) => (
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          ))
        }
      </Layout>
    )
  }
  
  export const query = graphql`
  query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
      }
    }
  }
  `
  
  export const Head = () => <Seo title="My Blog Posts" />
  
  export default BlogPage