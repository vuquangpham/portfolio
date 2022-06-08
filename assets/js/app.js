const allSections = document.querySelectorAll("section");

const revealSection = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

const allLeftDiv = document.querySelectorAll(".left");

const revealLeftDiv = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("left");
  observer.unobserve(entry.target);
};

const leftDivObserver = new IntersectionObserver(revealLeftDiv, {
  root: null,
  threshold: 0.15,
});

allLeftDiv.forEach((div) => {
  div.classList.add("transition");
  leftDivObserver.observe(div);
});

const allRightDiv = document.querySelectorAll(".right");

const revealRightDiv = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("right");
  observer.unobserve(entry.target);
};

const rightDivObserver = new IntersectionObserver(revealRightDiv, {
  root: null,
  threshold: 0.15,
});

allRightDiv.forEach((div) => {
  div.classList.add("transition");
  rightDivObserver.observe(div);
});
