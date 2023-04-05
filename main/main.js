/*
NazrulNizam Bin Mohd Ikram
main.js
18/12/2022
*/

let search = document.querySelector(".search-box");

document.querySelector("#search-icon").onclick = () =>{
  search.classList.toggle("active");
  cart.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
}

let cart = document.querySelector(".cart");

document.querySelector("#cart-icon").onclick = () =>{
  cart.classList.toggle("active");
  search.classList.remove("active");
  user.classList.remove("active");
  navbar.classList.remove("active");
}

let user = document.querySelector(".user");

document.querySelector("#user-icon").onclick = () =>{
  user.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  navbar.classList.remove("active");
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-icon").onclick = () =>{
  navbar.classList.toggle("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
}

window.onscroll = () => {
  navbar.classList.remove("active");
  search.classList.remove("active");
  cart.classList.remove("active");
  user.classList.remove("active");
}

//Navbar Scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});


//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

//Function to display the first answer
function ans1() {
  heading.style.display = "block";
  answer.textContent = "yes.";
}

//Function to display the second answer
function ans2() {
  heading.style.display = "block";
  answer.textContent = "no.";
}

//Function to display the third answer
function ans3() {
  heading.style.display = "block";
  answer.textContent = "yes or no.";
} 


