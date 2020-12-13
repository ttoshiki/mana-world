const tm = new TimelineMax();

const transitionX = 0
const transitionY = 0

gsap.registerPlugin(ScrollTrigger);

const ua = navigator.userAgent;
if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
  // 道のアニメーション
  gsap.timeline({
    defaults: { ease: "Circ.easeOut", duration: 0.2 },
    scrollTrigger: {
      trigger: ".about__expandRoad.-first",
      start: "bottom 50%",
    },
  }).to(".about__expandRoad.-first", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-first", {
    scale: 1,
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    x: transitionX
  }).to(".about__expandWorldMainText.-second", {
    scale: 1,
  }).to(".about__expandOuterBlock.-first", {
    opacity: 1,
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    x: transitionX
  }).to(".about__expandRoad.-third", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-third", {
    scale: 1,
  }).to(".about__expandOuterBlock.-second", {
    opacity: 1,
  }).to(".about__expandRoad.-fourth", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-fourth", {
    scale: 1,
  }).to(".about__expandOuterBlock.-third", {
    opacity: 1,
  }).to(".about__expandRoad.-fifth", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-fifth", {
    scale: 1,
  }).to(".about__expandOuterBlock.-fourth", {
    opacity: 1,
  }).to(".about__expandRoad.-sixth", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-sixth", {
    scale: 1,
  }).to(".about__expandRoad.-seventh", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-seventh", {
    scale: 1,
  }).to(".about__expandOuterBlock.-fifth", {
    opacity: 1,
  })

  // 吹き出しアニメーション
  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.4 },
  scrollTrigger: {
    trigger: ".about__deliveryItem.-second",
    start: "top 50%",
  },
  }).to(".about__deliveryItem.-first", {
    scale: 1
  }).to(".about__deliveryItem.-second", {
    scale: 1
  }).to(".about__deliveryItem.-third", {
    scale: 1,
    rotation: 21
  }).to(".about__deliveryItem.-fifth", {
    scale: 1
  }).to(".about__deliveryItem.-sixth", {
    scale: 1
  })

  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.3 },
  scrollTrigger: {
    trigger: ".about__deliveryMana",
    start: "center 50%",
  },
  }).to(".about__deliveryItem.-eleventh", {
    scale: 1
  }).to(".about__deliveryItem.-twelfth", {
    scale: 1
  }).to(".about__deliveryItem.-thirteenth", {
    scale: 1
  }).to(".about__deliveryItem.-fourteenth", {
    scale: 1
  }).to(".about__deliveryItem.-fifteenth", {
    scale: 1
  }).to(".about__deliveryItem.-sixteenth", {
    opacity: 1,
    transition: 0.1,
  })

} else {
  // 道のアニメーション
  gsap.timeline({
    defaults: { ease: "Circ.easeOut", duration: 0.2 },
    scrollTrigger: {
      trigger: ".about__expandWorldHeading",
      start: "center 50%",
    },
  }).to(".about__expandRoad.-first", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-first", {
    scale: 1,
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    x: transitionX
  }).to(".about__expandWorldMainText.-second", {
    scale: 1,
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    x: transitionX
  }).to(".about__expandRoad.-third", {
    opacity: 1
  }).to(".about__expandWorldMainText.-third", {
    scale: 1,
  }).to(".about__expandRoad.-fourth", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-fourth", {
    scale: 1,
  }).to(".about__expandRoad.-fifth", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-fifth", {
    scale: 1,
  }).to(".about__expandRoad.-sixth", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-sixth", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  }).to(".about__expandRoad.-seventh", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-seventh", {
    scale: 1,
  })

  // 周りのアニメーション
  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.6 },
  scrollTrigger: {
    trigger: ".about__expandOuterBlock.-first",
    start: "top 50%",
  },
  }).to(".about__expandOuterBlock.-first", {
    opacity: 1,
  })

  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.6 },
  scrollTrigger: {
    trigger: ".about__expandOuterBlock.-second",
    start: "top 50%",
  },
  }).to(".about__expandOuterBlock.-second", {
    opacity: 1,
  })

  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.6 },
  scrollTrigger: {
    trigger: ".about__expandOuterBlock.-third",
    start: "top 50%",
  },
  }).to(".about__expandOuterBlock.-third", {
    opacity: 1,
  })

  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.6 },
  scrollTrigger: {
    trigger: "about__expandWorldMainText.-seventh",
    start: "top 50%",
  },
  }).to(".about__expandOuterBlock.-fourth", {
    opacity: 1,
  })

  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.4 },
  scrollTrigger: {
    trigger: "about__expandWorldMainText.-seventh",
    start: "top 50%",
  },
  }).to(".about__expandOuterBlock.-fifth", {
    opacity: 1,
  })

  // 吹き出しアニメーション
  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.4 },
  scrollTrigger: {
    trigger: ".about__deliveryItem.-second",
    start: "top 50%",
  },
  }).to(".about__deliveryItem.-first", {
    scale: 1
  }).to(".about__deliveryItem.-second", {
    scale: 1
  }).to(".about__deliveryItem.-third", {
    scale: 1
  }).to(".about__deliveryItem.-fourth", {
    scale: 1
  }).to(".about__deliveryItem.-fifth", {
    scale: 1
  }).to(".about__deliveryItem.-sixth", {
    scale: 1
  }).to(".about__deliveryItem.-seventh", {
    scale: 1
  }).to(".about__deliveryItem.-eighth", {
    scale: 1
  }).to(".about__deliveryItem.-nineth", {
    scale: 1
  }).to(".about__deliveryItem.-tenth", {
    scale: 1
  }).to(".about__deliveryItem.-eleventh", {
    scale: 1
  }).to(".about__deliveryItem.-sixteenth", {
    opacity: 1,
    transition: 0.1
  })
}