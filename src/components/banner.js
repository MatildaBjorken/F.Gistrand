import React from "react"
import RightArrow from "../assets/arrowRight"

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Creative Fashiondesigner.</span>
            </div>
            <div className="line">
              <span>Filippa Gistrand</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              Read More <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
