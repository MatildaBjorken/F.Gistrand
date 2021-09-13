import React, { useState, useRef, useEffect } from "react"
import Image1 from "../images/imganimation1.jpg"
import Image2 from "../images/imganimation2.jpg"
import Image3 from "../images/imganimation3.jpg"

import gsap from "gsap"

const AboutAnimation = () => {
  const Centerbar = useRef()

  useEffect(() => {
    gsap.from(Centerbar.current, {
      x: "-40",
      ease: "power3.easeInOut",
      opacity: "0",
      delay: 1.2,
    })
  })

  const Bottombar = useRef()

  useEffect(() => {
    gsap.from(Bottombar.current, {
      y: "60",
      ease: "power3.easeInOut",
      opacity: "0",
      delay: 1,
    })
  })

  const Images1 = useRef()

  useEffect(() => {
    gsap.from(Images1.current, {
      x: "-200",
      ease: "power2.easeInOut",
      opacity: "0",
      delay: 1.2,
    })
  })

  const Images2 = useRef()

  useEffect(() => {
    gsap.from(Images2.current, {
      x: "-200",
      ease: "power2.easeInOut",
      opacity: "0",
      delay: 1.2,
    })
  })

  const Images3 = useRef()

  useEffect(() => {
    gsap.from(Images3.current, {
      x: "-200",
      ease: "power2.easeInOut",
      opacity: "0",
      delay: 1.2,
    })
  })

  const HeaderDiv = useRef()

  useEffect(() => {
    gsap.from(HeaderDiv.current, {
        y: "500",
        ease: "elastic.easeOut.config(2, 0.4)",
        delay: 2,
    })
  })

  const HeaderDiv2 = useRef()

  useEffect(() => {
    gsap.from(HeaderDiv2.current, {
        y: "500",
        ease: "Elastic.easeOut.config(2, 0.4)",
        delay: 2.3,
    })
  })

  return (
    <div class="container-images">
      <div class="centerbar" ref={Centerbar}>
        <div class="block-1 centerbar-item" ref={Centerbar}>
          <div class="block-1-container" ref={Centerbar}>
            <span>produced by cg/'21</span>
          </div>
        </div>
        <div class="block-2 centerbar-item">
          <div class="block-2-container">
            open air show now <br />
            goes digital.
          </div>
        </div>
      </div>

      <div class="header-letters">
        <div class="header-container">
          <div class="header-item" ref={HeaderDiv}>F</div>
          <div class="header-item" ref={HeaderDiv2}>G</div>
        </div>
      </div>
      <div class="images-animation">
        <div
          ref={Images1}
          class="image img-one"
          style={{ backgroundImage: `url(${Image1})` }}
        ></div>
        <div
          ref={Images2}
          class="image img-two"
          style={{ backgroundImage: `url(${Image3})` }}
        ></div>
        <div
          ref={Images3}
          class="image img-three"
          style={{ backgroundImage: `url(${Image2})` }}
        ></div>
      </div>
      <div class="bottombar" ref={Bottombar}>
        <div class="year bottombar-item" ref={Bottombar}>
          2021
        </div>
        <div class="mail bottombar-item" ref={Bottombar}>
          get in touch
        </div>
      </div>
    </div>
  )
}

export default AboutAnimation
