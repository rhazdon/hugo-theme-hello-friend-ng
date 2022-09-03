document.querySelector(".theme-toggle").addEventListener("click", toggleTheme, false);
initTheme();

function initTheme() {
	const theme = getLocalStorageOrDeviceTheme();
	document.documentElement.setAttribute("data-theme", theme);
	setLocalStorageTheme(theme);
}

function getDeviceTheme() {
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getLocalStorageTheme() {
	return window.localStorage.getItem("theme"); 
}

function setLocalStorageTheme(theme) {
	window.localStorage.setItem("theme", theme);
}

function getLocalStorageOrDeviceTheme() {
	return getLocalStorageTheme() || getDeviceTheme();
}

function toggleTheme(e) {
	let newTheme = reverseTheme(getLocalStorageOrDeviceTheme());
	setLocalStorageTheme(newTheme);
	window.location.reload();
}

function reverseTheme(theme) {
	return theme == "dark" ? "light" : "dark";
}

