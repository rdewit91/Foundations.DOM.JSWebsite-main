let mathcards = document.body.querySelector("#math-cards");
let score = 0;


let mathcards = document.createElement("h1");
mathcards.innerHTML = "Math Study Cards";
mathcards.style.textAlign = "center";
mathcards.style.textDecorationLine = "underline";

let p1 = document.createElement("div");
// let p1 = document.createElement("p")

mathcards.innerHTML = "131 + 13";
mathcards.style.fontSize = "60px";
mathcards.style.border = "1px solid black";
mathcards.style.width = "15%";
mathcards.style.height = "100%";
mathcards.style.display = "flex";
mathcards.style.flexWrap = "wrap";
mathcards.style.flexDirection = "column";
mathcards.style.textAlign = "Right";
mathcards.style.margin = "20px";
mathcards.style.justifyContent = "space between";
mathcards.style.backgroundColor = "gray";


document.body.appendChild(mathcards);