import React, { useState, useRef, useEffect } from "react"
import { gsap, TweenLite, Power3, TimelineLite, TweenMax } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/components/about.css"
import ImageText from "../components/imagetext"
import AboutAnimation from "../components/aboutAnimation"
import Images from "../components/images"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />

      <div className="App">
        <div className="page">
          <AboutAnimation />
        </div>
      </div>
    </Layout>
  )
}

export default About
