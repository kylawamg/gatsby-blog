import { useStaticQuery, graphql } from "gatsby"

export default function usePosts() {
  const result = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return result
}
