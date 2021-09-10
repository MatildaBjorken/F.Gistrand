import React, { useState, useRef, useEffect } from "react"
import Image from "../images/filippa.jpg"
import gsap from "gsap"

const AboutAnimation = () => {

  const Left = useRef()

  useEffect(() => {
    gsap.from(Left.current, {
      left: "-50%",
      ease: "expo.easeInOut",
      delay: 1.5,
    })
  })

  const Header = useRef()

  useEffect(() => {
    gsap.from(Header.current, {
      left: "-120%",
      ease: "expo.easeInOut",
      delay: 1.5,
    })
  })

  const Images = useRef()

  useEffect(() => {
    gsap.from(Images.current, {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 3,
    })
  })

  return (
    <div className="container-landing">
      <div
       ref={Left}
        className="left-about column"
       
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="header-text">
          <p>boundary supply /</p>
          <p>
            better than brand new second hand clothing / focus by sick apparel
            everyday,
          </p>
          <p>home of (23-29)</p>
        </div>
        <div className="link">
          <a href="#">all products</a>
        </div>
      </div>
      <div className="right column">
        <div className="images"   ref={Images}>
          <div
            ref={Images}
            className="img-1 img"
            style={{ backgroundImage: `url(${Image})` }}
          ></div>
          <div
            ref={Images}
            className="img-2 img"
            style={{ backgroundImage: `url(${Image})` }}
          ></div>
          <div
            ref={Images}
            className="img-3 img"
            style={{ backgroundImage: `url(${Image})` }}
          ></div>
          <div
            ref={Images}
            className="img-4 img"
            style={{ backgroundImage: `url(${Image})` }}
          ></div>
        </div>
        <div className="header-text">
          <h1 className="ml12" ref={Header}>
            gorgeoushe
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AboutAnimation
