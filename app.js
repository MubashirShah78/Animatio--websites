const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


const pointer = document.querySelector(".pointer");








const cricleMouseFollow = (xsacle, yscale) => {
  window.addEventListener("mousemove", (val) => {
    pointer.style.opacity = "1";
    pointer.style.transform = `translate(${val.clientX}px,${val.clientY}px) scale(${xsacle}, ${yscale}) `;

    //  setTimeout(() => {
    //     pointer.style.opacity = 0; // Hide pointer after 1 second of no mouse movement
    // }, 250);
  });
};
document.documentElement.addEventListener("mouseleave", () => {
  pointer.style.opacity = 0;
});


cricleMouseFollow();



function elSkew() {
  let yscale = 1;
  let xsacle = 1;
  let xprev = 0;
  let  yprev = 0;
  let timer;
  
  window.addEventListener("mousemove", (val) => {
    clearTimeout(timer);
   
    xprev = val.clientX;
    yprev = val.clientY;
    xsacle = gsap.utils.clamp(0.8, 1.2, val.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, val.clientY - yprev);

    cricleMouseFollow(xsacle, yscale);

    timer = setTimeout(() => {
      pointer.style.transform = `translate(${val.clientX}px, ${val.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

// elSkew(); // Ensure to call the function to initialize the event listener




elSkew();







function anim() {
  let tl = gsap.timeline();
  tl.from("header",{
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    
  })
  tl.to(".anima",{
    y: "0",
    // opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: .2,
    delay: -1
  })
  tl.from(".right-heading",{
    y: "-10",
    opacity: 0,
    duration: 2,
    ease: Expo.easeInOut,
    stagger: -2,
    delay: -1.5
  })
  
  tl.from(".hero-footer",{
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    stagger: -2,
    delay: -1.5
    
    
  })
  
  
  
};
anim();
