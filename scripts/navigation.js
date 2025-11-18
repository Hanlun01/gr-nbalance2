document.addEventListener("DOMContentLoaded", () => {
    const bars = document.querySelector("#bars");
    const navMenu = document.querySelector(".nav-menu");
    const icon = bars ? bars.querySelector("i") : null;

    if (!bars || !navMenu || !icon) return; // sikkerheds-tjek

    const openNav = () => {
        const isOpen = navMenu.classList.toggle("show");

        // skift ikon
        icon.classList.toggle("fa-bars", !isOpen);
        icon.classList.toggle("fa-xmark", isOpen);

        // opdater aria-expanded for WCAG
        bars.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    bars.addEventListener("click", openNav);
});