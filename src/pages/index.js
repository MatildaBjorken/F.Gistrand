import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { gsap } from "gsap"
import Header from "../components/headerTwo"
import Navigation from "../components/navigation"
import Home from "./test"
import Blog from "./blog"
import About from './about';
import { Link } from "gatsby"

const routes = [
  { path: "/", name: "Home", Component: Home },
 
]

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

function Index() {
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
  return (
    <>
      <Layout>
        <Seo title="Home" />
        <Header dimensions={dimensions} />
        <div className="App">
          {routes.map(({ path, Component }) => (
            <Link key={path} exact path={path}>
              <Component  />
            </Link>
          ))}
        </div>
        <Navigation />
      </Layout>
    </>
  )
}

export default Index
