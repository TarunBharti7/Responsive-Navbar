console.log("hello world");

const header = document.querySelector(".header");

const btn = document.querySelector(".mobile-navbar-btn");

const toggleNavbar = () => {
    // alert("click work")
    header.classList.toggle("active");
}

btn.addEventListener("click" ,  () => toggleNavbar());

