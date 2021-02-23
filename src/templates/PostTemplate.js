//This template is used by createPage API function of Gatsby defined in gatsby-node.js

import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

//for templates we use dynamic query like below and export it. Gatsby grabs it and executes it
// with the query variable coming from context (we defined that in createPage function in gatsby-node.js)

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
      timeToRead
    }
  }
`

function PostTemplate({ data }) {
  const { title, date } = data.markdownRemark.frontmatter
  const { html, timeToRead } = data.markdownRemark

  return (
    <Layout>
      <h1>{title}</h1>
      <p>
        {date}
        <span> Time to read: {timeToRead} min</span>
      </p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  )
}

export default PostTemplate
