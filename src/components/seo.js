import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import useMetaData from "../hooks/useMetaData"
function SEO({ description, lang, meta, title }) {
  const { site } = useMetaData()

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={site.siteMetadata.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={[
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Inconsolata",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat",
        },
      ]}
      script={[]}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default SEO
