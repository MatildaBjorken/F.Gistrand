import React, { useState, useRef, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/components/about.css"
import Images from "../components/images"

const Shop = () => {
  return (
    <Layout>
      <Seo title="Shop" />
      <div className="App">
        <div className="page">
          <Images />
        </div>
      </div>
    </Layout>
  )
}

export default Shop
