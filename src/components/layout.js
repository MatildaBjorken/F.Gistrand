import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
//Components
import Header from "./headerTwo"
import "../App.css"

const Layout = ({ children }) => {
  const siteData = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="global-wrapper">
      <Header />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
