// Run in the document head to avoid a light-mode flash.

const updateTheme = (theme, persist = true) => {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  document.querySelectorAll("table").forEach((table) => {
    table.classList.toggle("table-dark", theme === "dark");
  });

  if (persist) {
    localStorage.setItem("theme", theme);
  }
};

const storedTheme = localStorage.getItem("theme");
const colorScheme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
const initialTheme =
  storedTheme === "dark" || storedTheme === "light" ? storedTheme : colorScheme && colorScheme.matches ? "dark" : "light";

if (initialTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

document.addEventListener("DOMContentLoaded", () => {
  updateTheme(initialTheme, false);

  const toggle = document.getElementById("light-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      updateTheme(document.documentElement.hasAttribute("data-theme") ? "light" : "dark");
    });
  }
});
