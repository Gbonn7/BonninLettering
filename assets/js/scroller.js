document.querySelectorAll(".slider-wrapper").forEach((sliderWrapper) => {

  const scroller = sliderWrapper.querySelector(".scroller");
  const before = sliderWrapper.querySelector(".before");
  const after = sliderWrapper.querySelector(".after");
  
  let active = false;

  scroller.addEventListener("mousedown", function () {
    active = true;
    scroller.classList.add("scrolling");
  });
  
  document.body.addEventListener("mouseup", function () {
    active = false;
    scroller.classList.remove("scrolling");
  });
  
  document.body.addEventListener("mouseleave", function () {
    active = false;
    scroller.classList.remove("scrolling");
  });
  
  document.body.addEventListener("mousemove", function (e) {
    if (!active) return;
    let x = e.pageX;
    x -= sliderWrapper.getBoundingClientRect().left;
    scrollIt(x);
  });

  function scrollIt(x) {
    let transform = Math.max(0, Math.min(x, sliderWrapper.offsetWidth));
    after.style.width = transform + "px";
    scroller.style.left = transform - 25 + "px";
  }

  scrollIt(150);

  scroller.addEventListener("touchstart", function () {
    active = true;
    scroller.classList.add("scrolling");
  });

  document.body.addEventListener("touchend", function () {
    active = false;
    scroller.classList.remove("scrolling");
  });

  document.body.addEventListener("touchcancel", function () {
    active = false;
    scroller.classList.remove("scrolling");
  });
});
