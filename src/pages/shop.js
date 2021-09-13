import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/components/shop.css"

import AboutAnimation from "../components/aboutAnimation"

const Shop = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <div className="App">
        <div className="page">
          <AboutAnimation />
        </div>
      </div>
    </Layout>
  )
}

export default Shop
