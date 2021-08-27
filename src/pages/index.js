import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Home from "./test"

function Index() {
  return (
    <>
      <Layout>
        <Seo title="Home" />

        <div className="App">
          <Home />
        </div>
      </Layout>
    </>
  )
}

export default Index
