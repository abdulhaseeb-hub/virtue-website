
// smooth scroll animation
// window.addEventListener("DOMContentLoaded", (event) => {

//     gsap.registerPlugin(ScrollSmoother);

//     const smoother = ScrollSmoother.create({
//         smooth: 2,
//         effects: true,
        
//         smoothTouch: 0.1,
//     });

//     window.onload = () => {
//         init();
//     };
// });



(function() {

  
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // https://www.desmos.com/calculator/brs54l4xou
    direction: 'vertical',
    // vertical, horizontal
    gestureDirection: 'vertical',
    // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 1,
    infinite: false,
})

//get scroll value
lenis.on('scroll', ({scroll, limit, velocity, direction, progress})=>{
    console.log({
        scroll,
        limit,
        velocity,
        direction,
        progress
    })
}
)

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

window.addEventListener("DOMContentLoaded", (event)=>{

  // Split text into spans
  let typeSplit = new SplitType("[text-split]",{
      types: "words, chars",
      tagName: "span"
  });

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
      // Reset tl when scroll out of view past bottom of screen
      ScrollTrigger.create({
          trigger: triggerElement,
          start: "top bottom",
          onLeaveBack: ()=>{
              timeline.progress(0);
              timeline.pause();
          }
      });
      // Play tl when scrolled into view (60% from top of screen)
      ScrollTrigger.create({
          trigger: triggerElement,
          start: "top 80%",
          onEnter: ()=>timeline.play()
      });
      }

      $("[words-slide-from-right]").each(function(index) {
          let tl = gsap.timeline({
              paused: true
          });
          tl.from($(this).find(".word"), {
              opacity: 0,
              x: "1em",
              duration: 0.8,
              ease: "power2.out",
              stagger: {
                  amount: 0.2
              }
          });
          createScrollTrigger($(this), tl);
      });

      $("[letters-slide-down]").each(function(index) {
          let tl = gsap.timeline({
              paused: true
          });
          tl.from($(this).find(".char"), {
              yPercent: -120,
              duration: 0.4,
              ease: "power1.out",
              stagger: {
                  amount: 0.8
              }
          });
          createScrollTrigger($(this), tl);
      });

      $("[scrub-each-word]").each(function(index) {
          let tl = gsap.timeline({
              scrollTrigger: {
                  trigger: $(this),
                  start: "top 70%",
                  end: "top center",
                  scrub: true
              }
          });
          tl.from($(this).find(".char"), {
              opacity: 0.2,
              duration: 1,
              ease: "power1.out",
              stagger: {
                  each: 0.7
              }
          });
      });

      // Avoid flash of unstyled content
      gsap.set("[text-split]", {
          opacity: 1
      });
  });
  

  // document.addEventListener("DOMContentLoaded", function() {
  //   var Scrollbar = window.Scrollbar;
  //   Scrollbar.init(document.querySelector('#smoothScrollbar'));
  // });

  //$(document).smoothWheel();
  // document.addEventListener("DOMContentLoaded", function() {
  //   var Scrollbar = window.Scrollbar;
  //   Scrollbar.init(document.querySelector('body'));
  // });

  // document.addEventListener("DOMContentLoaded", function() {
  //   const body = document.querySelector('body');
  //   const options = {
  //     damping: 0.1,  // Adjust the smoothness of scrolling (0.1 is the default value)
  //   };
  //   const smoothScrollbar = new SmoothScrollbar(body, options);
  // });
  

// const scrollbar = document.querySelector('#myScrollbar');
// const options = {
// damping: 0.1, 
// };
// const smoothScrollbar = new SmoothScrollbar(scrollbar, options);

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
    this.classList.toggle('fa-times')
    this.classList.toggle('fs-30')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

})();


$(document).ready(function() {
  
  $('.nav-tabs-selector').on('change', function (e) {
  console.log('Select');

    $(this).closest(".tab-area").find('.nav-tabs li button').eq($(this).val()).tab('show'); 
});


});
