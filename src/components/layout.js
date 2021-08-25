import React, { useEffect, useState } from "react"
import { openMenu, closeMenu } from "../animations/menuAnimations"
import { Link } from "gatsby"
import UpArrow from "../assets/arrow"
import { gsap } from "gsap"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import Navigation from "./navigation"

//Components
import "../App.css"

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

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

  const [dimensions, setDimensions] = useState({})

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } })
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }, 1000)

    window.addEventListener("resize", debouncedHandleResize)
    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  })
  const [menuState, setMenuState] = useState({ menuOpened: false })
  useEffect(() => {
    //Listening for page changes.

    if (menuState.menuOpened === true) {
      openMenu(dimensions.width)
    } else if (menuState.menuOpened === false) {
      closeMenu()
    }
  })

  return (
    <div className="global-wrapper">
      <div className="header">
        <div className="container">
          <div className="row v-center space-between">
            <div className="logo">
              <Link to="/">gistrand atelier</Link>
            </div>
            <div className="nav-toggle">
              <div
                onClick={() => setMenuState({ menuOpened: true })}
                className="hamburger-menu"
              >
                <span></span>
                <span></span>
              </div>
              <div
                className="hamburger-menu-close"
                onClick={() => setMenuState({ menuOpened: false })}
              >
                <UpArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="App"></div>
      <Navigation />
      <main>{children}</main>
      <footer></footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
