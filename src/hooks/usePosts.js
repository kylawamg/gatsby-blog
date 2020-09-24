import { useStaticQuery, graphql } from "gatsby"

export default function usePosts() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPost {
        nodes {
          id
          content
          strapiId
          title
          createdAt
          excerpt
          user {
            username
          }
          category {
            name
          }
          image {
            absolutePath
          }
        }
      }
    }
  `)
  return result
}
