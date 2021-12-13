/**
 * LOCOMOTIVE SCROLL
 */
const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  inertia: 0.6,
  initClass: "fadeIn",
});

/**
 * DISABLED LOCOMOTIVE ON VERSION MOBILE
 */
if ($(window).width() <= 1024) {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: false,
  });
}

gsap.registerPlugin(ScrollTrigger);

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".data-scrolling", {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

ScrollTrigger.addEventListener("refresh", () => scroller.update());

ScrollTrigger.refresh();

/**
 * Slider Services
 */
$("#services").owlCarousel({
  stagePadding: 14,
  margin: 20,
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2500,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 3,
    },
  },
});

/**
 * SLIDER TESTIMONIALS
 */
$("#testimonial-slider").owlCarousel({
  items: 1,
  margin: 20,
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 2500,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: false,
  responsive: {
    768: {
      items: 2,
    },
  },
});
