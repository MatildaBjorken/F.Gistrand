import React from "react"
import RightArrow from "../assets/arrowRight"

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Filippa Gistrand.</span>
            </div>
            <div className="line">
              <span>Modedesigner och Kreatör</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
