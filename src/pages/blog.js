import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h1>My Blog Posts</h1>
      <ol>
        {posts.map(post => {
          const { title, date } = post.node.frontmatter
          return (
            <li>
              <h2>{title}</h2>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
