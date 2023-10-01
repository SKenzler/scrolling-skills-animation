const scrollers = document.querySelectorAll(".scroller");

// if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
// runAnimation();
//}

const runAnimation = () => {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const innerScroller = scroller.querySelector(".inner__scroller");
    const scrollItems = Array.from(innerScroller.children);
    innerScroller.forEach((item) => {
      const duplicateItems = item.cloneNode(true);
      duplicateItems.setAttribute("aria-hidden", true);
      innerScroller.appendChild(duplicateItems);
    });
  });
};

runAnimation();
