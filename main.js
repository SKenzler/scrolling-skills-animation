const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  runAnimation();
}

const runAnimation = () => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  });
};
