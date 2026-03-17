const slides = Array.from(document.querySelectorAll(".slide"));
const indicator = document.getElementById("slideIndicator");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const slideStorageKey = "senior-safety-current-slide";

let current = 0;

function renderSlide(index) {
  current = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });

  indicator.textContent = `${current + 1} / ${slides.length}`;
  prevBtn.disabled = current === 0;
  nextBtn.disabled = current === slides.length - 1;
  window.location.hash = `slide-${current + 1}`;
  window.localStorage.setItem(slideStorageKey, String(current));
}

function nextSlide() {
  renderSlide(current + 1);
}

function prevSlide() {
  renderSlide(current - 1);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    nextSlide();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    prevSlide();
  }
});

function getInitialSlide() {
  const hashMatch = window.location.hash.match(/slide-(\d+)/i);

  if (hashMatch) {
    return Number(hashMatch[1]) - 1;
  }

  const storedIndex = Number(window.localStorage.getItem(slideStorageKey));

  if (!Number.isNaN(storedIndex)) {
    return storedIndex;
  }

  return 0;
}

window.addEventListener("hashchange", () => {
  const nextIndex = getInitialSlide();

  if (nextIndex !== current) {
    renderSlide(nextIndex);
  }
});

renderSlide(getInitialSlide());
