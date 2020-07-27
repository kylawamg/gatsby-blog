import { useStaticQuery, graphql } from "gatsby"

export default function useCategories() {
  const result = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        nodes {
          name
        }
      }
    }
  `)
  return result
}
