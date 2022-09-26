const hamburg = document.querySelector(".hamburger2");
const sideBar = document.querySelector(".active");
const sideBarClose = document.querySelector(".sidebar_close");
const navLink = document.querySelector(".nav_link");
const navItem = document.querySelector(".nav_item");

navLink.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    hamburg.style.visibility = 'visible';
})

navItem.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    hamburg.style.visibility = 'visible';
})

hamburg.addEventListener("click", () =>{
    sideBar.classList.toggle("active");
    hamburg.style.visibility = 'hidden';
});

sideBarClose.addEventListener("click", () =>{
    sideBar.classList.toggle("active");
    hamburg.style.visibility = 'visible';

});

// previous syntax
// const hamburg = document.querySelector(".hamburger2");
// const sideBar = document.querySelector(".active");

// hamburg.addEventListener("click", () =>{
//     sideBar.classList.toggle("active");
// });