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
 * COUNTER SECTION
 */
let nums = document.querySelectorAll(".counter .counter-number");
let sectionCounter = document.querySelector(".counter");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= sectionCounter.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let number = el.dataset.number;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == number) {
      clearInterval(count);
    }
  }, 2000 / number);
}

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
