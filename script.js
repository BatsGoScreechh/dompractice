// const headerElement = document.querySelector("#main-header");
// const pElement = document.querySelector(".body-text");
// const bothP = document.querySelectorAll(".body-text")

// console.log(headerElement)
// headerElement.innerHTML = "<h1>Hello, world</h1>";
// headerElement.classList.add("blue-text");

// for(let i = 0; i < bothP.length; i++){
//     bothP[i].innerHTML = "<h2>Hello, world</h2>"
//     console.log(bothP)

// }

const textContent = document.querySelector(".article__header")
const allContent = document.querySelectorAll(".article__header")
const dashedElement = document.querySelector(".dashed")
const footElement = document.querySelector(".article__footer")

textContent.innerHTML = "Welcome to David's Blog"


footElement.classList.add("goldenrod")
dashedElement.classList.remove("dashed")

