const path = require("path")

// NODE API's
//Each time gatsby builds website a Node for each page is created. This function allows to add custom fields to the nodes that can be accessed througgh graphql
//We create a slug and add it as a field called slug that we can acces when dynamically creating a blog page
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

//Create new blog page from template
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/PostTemplate.js`)

  const query = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Create blog post pages.
  query.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug } = edge.node.fields

    createPage({
      // Path for this page — required
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: {
        slug: slug,
      },
    })
  })
}
