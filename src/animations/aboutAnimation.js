import gsap from "gsap"

let tl = gsap.timeline()

export const AboutAnimation = width => {
  tl.from(".left", 3, {
    left: "-50%",
    ease: "expo.easeInOut",
    delay: 3.4,
  })

  tl.from(".header h1", 3, {
    left: "-140%",
    ease: "expo.easeInOut",
    delay: 3.4,
  })
  tl.staggerFrom(
    ".images > div",
    1,
    {
      y: "50",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 3.4,
    },
    0.2
  )

  tl.staggerFrom(
    ".header > p",
    1,
    {
      y: "60",
      opacity: 0,
      ease: "power2.easeOut",
      delay: 5.6,
    },
    0.2
  )

  tl.from(".link", 1, {
    opacity: 0,
    ease: "steppedEase.config(1)",
    repeat: -1,
    repeatDelay: 0.2,
    delay: 7.8,
  })
}
