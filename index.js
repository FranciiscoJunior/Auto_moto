let search = document.querySelector('.search-box');

//Funcionalidade que da interação comm a barra de pesquisa
document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.getElementById("search-icon");
    const searchBox = document.querySelector(".search-box");

    searchIcon.addEventListener("click", () => {
        searchBox.classList.toggle("active");
    });
});

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclik = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});