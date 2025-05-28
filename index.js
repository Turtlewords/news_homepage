const openMenuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#menu-close");
const sideNav = document.querySelector("#sidenav");



openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

function openMenu() {
    
    if (screen.width < 768) {
    sideNav.style.width = "60%"
    } else {
        sideNav.style.width = "40%";
        sideNav.style.paddingRight = "4rem";
    }
    
}

function closeMenu() {
    sideNav.style.width = "0";
    sideNav.style.paddingRight = "0";
}