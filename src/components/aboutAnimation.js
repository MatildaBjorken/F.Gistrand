import React, { useState, useRef, useEffect } from "react"
import Image from "../images/about1.jpg"
import Image1 from "../images/about.jpg"
import Image2 from "../images/about2.jpg"
import Image3 from "../images/about3.jpg"
import Image4 from "../images/about4.jpg"
import gsap from "gsap"

const AboutAnimation = () => {
  const Left = useRef()

  useEffect(() => {
    gsap.from(Left.current, {
      left: "-50%",
      ease: "expo.easeInOut",
      delay: 1,
    })
  })

  const Header = useRef()

  useEffect(() => {
    gsap.from(Header.current, {
      left: "-120%",
      ease: "expo.easeInOut",
      delay: 1,
    })
  })

  const Images = useRef()

  useEffect(() => {
    gsap.from(Images.current, {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 2.2,
    })
  })

  const Images2 = useRef()

  useEffect(() => {
    gsap.from(Images2.current, {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 2.4,
    })
  })

  const Images3 = useRef()

  useEffect(() => {
    gsap.from(Images3.current, {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 2.6,
    })
  })

  const Images4 = useRef()

  useEffect(() => {
    gsap.from(Images4.current, {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 2.8,
    })
  })

  const Paragraph = useRef()

  useEffect(() => {
    gsap.from(Paragraph.current, {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 2.2,
    })
  })

  const Link = useRef()

  useEffect(() => {
    gsap.from(Link.current, {
      opacity: 0,
      ease: "steppedEase.config(1)",
      repeat: -1,
      repeatDelay: 0.2,
      delay: 2.2,
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
          <p ref={Paragraph}>boundary supply /</p>
          <p ref={Paragraph}>
            better than brand new second hand clothing / focus by sick apparel
            everyday,
          </p>
          <p>home of (23-29)</p>
        </div>
        <div className="link" ref={Link}>
          <a href="#">all products</a>
        </div>
      </div>
      <div className="right column">
        <div className="images">
          <div
            ref={Images}
            className="img-1 img"
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
          <div
            ref={Images2}
            className="img-2 img"
            style={{ backgroundImage: `url(${Image2})` }}
          ></div>
          <div
            ref={Images3}
            className="img-3 img"
            style={{ backgroundImage: `url(${Image3})` }}
          ></div>
          <div
            ref={Images4}
            className="img-4 img"
            style={{ backgroundImage: `url(${Image4})` }}
          ></div>
        </div>
        <div className="header-text">
          <h1 className="ml12" ref={Header}>
            Shop Now
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AboutAnimation
