import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
//Components
import Header from "./header"
import "../style.css"

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
      <Header siteTitle={siteData.site.siteMetadata.title} />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
