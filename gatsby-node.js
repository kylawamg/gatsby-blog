<<<<<<< Updated upstream
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
=======
const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Hace la solicitud a la API para leer la información
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        return result
      })
    )
  })

// Utiliza el método createPages para crear las páginas con la data que recibe
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  // Hace una solicitud de los strapiId de cada articulo para generar la URL y directorio
  const getPost = makeRequest(
    graphql,
    `
  {
  allStrapiPost{
    edges {
      node {
        strapiId
      }
    }
  }
}
`
  ).then(result => {
    result.data.allStrapiPost.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.strapiId}`,
        // Le indica que template utilizar en esta página
        component: path.resolve(`src/templates/PostPage.js`),
        context: {
          id: node.strapiId,
        },
      })
    })
  })
  return getPost
}
>>>>>>> Stashed changes
