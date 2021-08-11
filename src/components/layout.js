import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query bioQueryAndBioQuery {
      site {
        siteMetadata {
          social {
            instagram
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <div className="global-wrapper">
      <nav></nav>

      <main>{children}</main>

      <footer></footer>
    </div>
  )
}

export default Layout
