import React from "react"
import RightArrow from "../assets/arrowRight"

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Kreativ Modedesigner.</span>
            </div>
            <div className="line">
              <span>Filippa Gistrand</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              Läs mer <RightArrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
