import React from "react"
import Layout from "../components/Layout"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            fields {
              slug
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
          const { slug } = post.node.fields
          return (
            <li>
              <Link to={`/blog/${slug}`}>
                <h2>{title}</h2>
              </Link>
              <p>{date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default Blog
