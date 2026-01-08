function slider({
  lineSelector,
  wrapperSelector,
  itemSelector,
  visibleCount = 5,
  gap = 10,
  interval = 2000
}) {
  const sliderLine = document.querySelector(lineSelector);
  const wrapper = document.querySelector(wrapperSelector);
  const slides = document.querySelectorAll(itemSelector);

  let index = 0;
  let slideWidth;

  function init() {
    const wrapperWidth = wrapper.offsetWidth;

    slideWidth = (wrapperWidth - gap * (visibleCount - 1)) / visibleCount;

    slides.forEach(slide => {
      slide.style.width = slideWidth + "px";
    });

    sliderLine.style.width =
      slides.length * (slideWidth + gap) - gap + "px";

    move();
  }

  function move() {
    const offset = index * (slideWidth + gap);
    sliderLine.style.transform = `translateX(-${offset}px)`;
  }

  function next() {
    index++;

    if (index > slides.length - visibleCount) {
      index = 0;
    }

    move();
  }

  window.addEventListener("resize", init);

  init();
  setInterval(next, interval);
}

export { slider };
