import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/components/about.css"
import AboutText from "../components/abouttext"
import Images from "../components/images"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />

      <div className="App">
        <div className="page">
          <Images />
          <AboutText/>
        </div>
      </div>
    </Layout>
  )
}

export default About
