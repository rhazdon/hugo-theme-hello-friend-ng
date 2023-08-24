// Update the local theme before rendering to avoid flickering

if (localStorage.theme) {
    document.documentElement.setAttribute("data-theme", localStorage.theme);
}
