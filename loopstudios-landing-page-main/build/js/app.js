const menu = document.querySelector(".header__menu");
const nav = document.querySelector(".header__navegacion");
const mostrarNav = document.querySelector(".hide-nav");
const mostrar = document.querySelector(".mostrar");
const close = document.querySelector(".header__menu-close");
const body = document.querySelector("body");

menu.addEventListener("click", () =>{
    mostrar.classList.remove("hide");
    close.classList.remove("hide");
    mostrarNav.classList.remove("hide-nav");
    body.classList.add("over");
    menu.classList.add("hide");
})

close.addEventListener("click", () => {
    mostrar.classList.add("hide");
    close.classList.add("hide");
    mostrarNav.classList.add("hide-nav");
    body.classList.remove("over");
    menu.classList.remove("hide");
})

window.addEventListener("resize", () =>{
    mostrar.classList.add("hide");
    close.classList.add("hide");
    mostrarNav.classList.add("hide-nav");
    body.classList.remove("over");
    menu.classList.remove("hide");
})