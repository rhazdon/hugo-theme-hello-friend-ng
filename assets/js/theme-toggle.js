/**
 * Theming.
 *
 * Supports the preferred color scheme of the operating system as well as
 * the theme choice of the user.
 *
 */

setTheme();

function setTheme() {
  const themeStorage = "techblog-theme";
  const chosenTheme = window.localStorage && window.localStorage.getItem(themeStorage);
  const chosenThemeIsLight = chosenTheme == "light";
  const chosenThemeIsDark = !chosenThemeIsLight;

  const systemDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (chosenThemeIsLight) {
    document.querySelector("#theme-toggle-light").style.setProperty("display", "block");
    document.querySelector("#theme-toggle-dark").style.setProperty("display", "none");
    localStorage.setItem(themeStorage, "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else if (chosenThemeIsDark || systemDarkMode) {
    document.querySelector("#theme-toggle-light").style.setProperty("display", "none");
    document.querySelector("#theme-toggle-dark").style.setProperty("display", "block");
    localStorage.setItem(themeStorage, "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", switchTheme, false);
}

function switchTheme(e) {
  const themeStorage = "techblog-theme";
  const currentTheme = window.localStorage && window.localStorage.getItem(themeStorage);
  const currentThemeIsLight = currentTheme == "light";
  const currentThemeIsDark = !currentThemeIsLight;

  if (currentThemeIsDark) {
    document.querySelector("#theme-toggle-light").style.setProperty("display", "block");
    document.querySelector("#theme-toggle-dark").style.setProperty("display", "none");
    localStorage.setItem(themeStorage, "light");
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.querySelector("#theme-toggle-light").style.setProperty("display", "none");
    document.querySelector("#theme-toggle-dark").style.setProperty("display", "block");
    localStorage.setItem(themeStorage, "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}