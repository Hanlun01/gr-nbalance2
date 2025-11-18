const bars = document.querySelector("#bars");

const openNav = () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    document.querySelector("#bars i").classList.toggle("fa-bars");
    document.querySelector("#bars i").classList.toggle("fa-xmark");
}

bars.addEventListener("click", openNav);