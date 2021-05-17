// Theme Toggle
const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
} else {
  localStorage.removeItem("theme");
}

// Switch the theme
function switchTheme(e) {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme == "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light")
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark")
  }
}
