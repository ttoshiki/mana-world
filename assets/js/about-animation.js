const tm = new TimelineMax();

const transitionX = 0
const transitionY = 0

gsap.registerPlugin(ScrollTrigger);

const ua = navigator.userAgent;
if ((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)) {
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
  })

} else {
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