const root = document.documentElement;
const themeButton = document.querySelector(".theme-toggle");
const navButton = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
const storedTheme = localStorage.getItem("theme");
if (storedTheme === "dark" || (!storedTheme && matchMedia("(prefers-color-scheme: dark)").matches)) root.dataset.theme = "dark";
themeButton?.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  root.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("theme", dark ? "dark" : "light");
});
navButton?.addEventListener("click", () => {
  const open = navButton.getAttribute("aria-expanded") === "true";
  navButton.setAttribute("aria-expanded", String(!open));
  nav?.classList.toggle("is-open", !open);
});
nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navButton?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});
const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
