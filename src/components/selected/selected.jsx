import React from "react"
import "./selected.css"

import Filippa from './filippa.jpg'

export default function Featured() {
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={Filippa} data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={Filippa} data-scroll />
      </div>
    </section>
  )
}
