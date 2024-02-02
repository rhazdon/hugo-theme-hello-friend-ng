// Mobile menu

const menuTrigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".menu");
const mobileQuery = getComputedStyle(document.body).getPropertyValue(
  "--phoneWidth"
);
const isMobile = () => window.matchMedia(mobileQuery).matches;
const isMobileMenu = () => {
  menuTrigger && menuTrigger.classList.toggle("hidden", !isMobile());
  menu && menu.classList.toggle("hidden", isMobile());
};

isMobileMenu();

menuTrigger &&
  menuTrigger.addEventListener(
    "click",
    () => menu && menu.classList.toggle("hidden")
  );

window.addEventListener("resize", isMobileMenu);

const language = document.getElementsByTagName('html')[0].lang;
const logo = document.querySelector(".logo__pathname");
if(logo){
  window.onload = () => {
    let path = window.location.pathname.substring(1);
    path = path.replace(language+'/','')
    logo.textContent += path.substring(0,path.indexOf('/'));
  };
}