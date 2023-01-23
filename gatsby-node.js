const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

module.exports.createPages = async ({ actions, graphql, reporter }) => {
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            parent {
              ... on File {
                name
                relativeDirectory
              }
            }
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  data?.allMarkdownRemark.edges.forEach(({ node }) =>
    actions.createPage({
      path: `${node.parent.relativeDirectory}/${node.parent.name}`,
      component: path.resolve(`src/templates/${node.parent.relativeDirectory}.jsx`),
      context: { id: node.id },
    })
  )
}

module.exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    console.log(node.parent.relativeDirectory)
    const slug = createFilePath({ node, getNode, basePath: 'pages' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
