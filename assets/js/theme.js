/**
 * Theming.
 *
 * Supports a tier of user choice, site choice, operating system.
 *
 */

// Detect the color scheme the operating system prefers
function detectOSColorTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  } else {
    return "light";
  }
}

// Set the initial theme based on the order of preference
(() => {
  const chosenTheme = window.localStorage && window.localStorage.getItem("theme");
  const defaultTheme = document.documentElement.getAttribute("data-theme");
  const osTheme = detectOSColorTheme();
  const currentTheme = chosenTheme || defaultTheme || osTheme
  document.documentElement.setAttribute("data-theme", currentTheme)
})();
