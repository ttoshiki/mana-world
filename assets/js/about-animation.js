const tm = new TimelineMax();

const transitionX = 0
const transitionY = 0

gsap.registerPlugin(ScrollTrigger);

const ua = navigator.userAgent;
if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
  // 道のアニメーション
  gsap.timeline({
    defaults: { ease: "Circ.easeOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".about__expandRoad.-first",
      start: "bottom 50%",
    },
  }).to(".about__expandRoad.-first", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-first", {
    scale: 1,
    duration: 0.3
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    delay: 0.4,
    x: transitionX
  }).to(".about__expandWorldMainText.-second", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    delay: 1,
    x: transitionX
  }).to(".about__expandRoad.-third", {
    opacity: 1,
    delay: 0.1,
  }).to(".about__expandWorldMainText.-third", {
    scale: 1,
    duration: 0.3,
    delay: 0.2
  }).to(".about__expandRoad.-fourth", {
    opacity: 1,
    delay: 2.0,
  }).to(".about__expandWorldMana.-first", {
    opacity: 1,
    x: transitionX,
    duration: 0.4
  }).to(".about__expandWorldMainText.-fourth", {
    scale: 1,
    duration: 0.3,
    delay: 0.3
  }).to(".about__expandRoad.-fifth", {
    opacity: 1,
    delay: 1.8,
  }).to(".about__expandWorldMainText.-fifth", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  }).to(".about__expandRoad.-sixth", {
    opacity: 1,
    delay: 1.8,
  }).to(".about__expandWorldMainText.-sixth", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  }).to(".about__expandWorldMana.-second", {
    opacity: 1,
    y: transitionY,
    duration: 0.4,
    delay: 0.3
  }).to(".about__expandRoad.-seventh", {
    opacity: 1,
    delay: 0.6,
  }).to(".about__expandWorldMainText.-seventh", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  })

  // 周りの項目のアニメーション
  gsap.timeline({
    defaults: { ease: "Circ.easeOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".about__expandRoad.-first",
      start: "top 50%",
    },
  }).to(".about__expandOuterBlock.-first", {
    delay: 3.6,
    opacity: 1,
  }).to(".about__expandOuterBlock.-second", {
    delay: 2.4,
    opacity: 1,
  }).to(".about__expandOuterBlock.-third", {
    delay: 2.8,
    opacity: 1,
  }).to(".about__expandOuterBlock.-fourth", {
    delay: 2.3,
    opacity: 1,
  }).to(".about__expandOuterBlock.-fifth", {
    delay: 4.7,
    opacity: 1,
  })

  // 吹き出しアニメーション
  gsap.timeline({
  defaults: { ease: "back.out", duration: 0.3 },
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
    delay: 0.2
  })

} else {
  // 道のアニメーション
  gsap.timeline({
    defaults: { ease: "Circ.easeOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".about__expandRoad.-first",
      start: "top 50%",
    },
  }).to(".about__expandRoad.-first", {
    opacity: 1,
  }).to(".about__expandWorldMainText.-first", {
    scale: 1,
    duration: 0.3
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    delay: 0.8,
    x: transitionX
  }).to(".about__expandWorldMana.-first", {
    opacity: 1,
    x: transitionX,
    duration: 0.4
  }).to(".about__expandWorldMainText.-second", {
    scale: 1,
    duration: 0.3,
    delay: 0.3
  }).to(".about__expandRoad.-second", {
    opacity: 1,
    delay: 1,
    x: transitionX
  }).to(".about__expandRoad.-third", {
    opacity: 1,
    delay: 0.1,
  }).to(".about__expandWorldMainText.-third", {
    scale: 1,
    duration: 0.3,
    delay: 0.2
  }).to(".about__expandRoad.-fourth", {
    opacity: 1,
    delay: 2.0,
  }).to(".about__expandWorldMana.-second", {
    opacity: 1,
    y: transitionY,
    duration: 0.4
  }).to(".about__expandWorldMainText.-fourth", {
    scale: 1,
    duration: 0.3,
    delay: 0.3
  }).to(".about__expandRoad.-fifth", {
    opacity: 1,
    delay: 1.8,
  }).to(".about__expandWorldMainText.-fifth", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  }).to(".about__expandRoad.-sixth", {
    opacity: 1,
    delay: 1.8,
  }).to(".about__expandWorldMainText.-sixth", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  }).to(".about__expandRoad.-seventh", {
    opacity: 1,
    delay: 0.4,
  }).to(".about__expandWorldMainText.-seventh", {
    scale: 1,
    duration: 0.3,
    delay: 0.1
  })

  // 周りの項目のアニメーション
  gsap.timeline({
    defaults: { ease: "Circ.easeOut", duration: 0.8 },
    scrollTrigger: {
      trigger: ".about__expandRoad.-first",
      start: "top 50%",
    },
  }).to(".about__expandOuterBlock.-first", {
    delay: 4.3,
    opacity: 1,
  }).to(".about__expandOuterBlock.-second", {
    delay: 2.5,
    opacity: 1,
  }).to(".about__expandOuterBlock.-third", {
    delay: 2.8,
    opacity: 1,
  }).to(".about__expandOuterBlock.-fourth", {
    delay: 2.4,
    opacity: 1,
  }).to(".about__expandOuterBlock.-fifth", {
    delay: 3.5,
    opacity: 1,
  })


  gsap.timeline({
    defaults: { ease: "power2.out", duration: 0.5 },
    scrollTrigger: {
      trigger: ".data__gypsyItem.-fifth",
      start: "top 50%",
    },
  }).from(".data__questionGypsy6.arrow", {
    y: "-50%" - transitionY,
  }).to(".data__gypsyPicture", {
    opacity: 1,
    y: transitionY,
  }).to(".data__questionGypsy6.arrow", {
    opacity: 1,
    y: "-50%",
  }).to(".data__gypsyItem.-eighth", {
    opacity: 1,
    y: transitionY,
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