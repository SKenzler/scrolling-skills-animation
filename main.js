const scrollers = document.querySelectorAll(".scroller");

const runAnimation = () => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const innerScroller = scroller.querySelector(".inner__scroller");
    const scrollItems = Array.from(innerScroller.children);
    scrollItems.forEach((item) => {
      const duplicateItems = item.cloneNode(true);
      duplicateItems.setAttribute("aria-hidden", true);
      innerScroller.appendChild(duplicateItems);
    });
  });
};

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  runAnimation();
}
