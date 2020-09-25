import React from "react"
import PropTypes from "prop-types"
import Seo from "./seo"
import HeaderWrapper from "./header/header-wrapper"
import CookieConsent from "react-cookie-consent"
import FooterSimple from "./footer/footer-simple"

const Layout = ({ children, subheader }) => {
  return (
    <>
      <Seo />
      <HeaderWrapper>{subheader}</HeaderWrapper>
      <main className="relative">{children}</main>
      <FooterSimple />
      <CookieConsent
        overlay={true}
        location="bottom"
        buttonText="Aceptar"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-analytics"
      >
        <p>Le informamos que este sitio usa cookies.</p>
        <p>
          Si continua navegando en nuestro sitio, nuestros partners pueden
          instalar y acceder a cookies en su dispositivo para uso de información
          no sensible que ayuden a mostrarle anuncios específicos para usted.
          También nos ayuda a nosotros a conocer la forma en que se utiliza el
          sitio y a mejorar la experiencia de usuario.{" "}
        </p>
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
