import { useStaticQuery, graphql } from "gatsby"

export default function usePosts() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiPost {
        nodes {
          id
          content
          title
          published_at
          category {
            name
          }
          image {
            publicURL
          }
        }
      }
    }
  `)
  return result
}
