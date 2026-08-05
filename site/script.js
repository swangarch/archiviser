const comparisons = document.querySelectorAll("[data-compare]");

comparisons.forEach((comparison) => {
  const range = comparison.querySelector(".compare-range");
  const update = () => comparison.style.setProperty("--position", `${range.value}%`);
  range.addEventListener("input", update);
  update();
});

const filters = document.querySelectorAll("[data-filter]");
const skillCards = document.querySelectorAll(".skill-card[data-category]");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => item.classList.toggle("is-active", item === filter));
    skillCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

const toast = document.querySelector(".toast");
let toastTimer;

document.querySelectorAll(".copy-action").forEach((button) => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      toast.textContent = button.dataset.copyLabel || "Copied";
    } catch {
      toast.textContent = button.dataset.copy;
    }
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  });
});

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
