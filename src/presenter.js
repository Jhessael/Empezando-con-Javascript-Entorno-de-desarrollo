import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
let botonPrecionado=false;
const multiplicarbutton=document.querySelector("#multiplicar-button").addEventListener("click", (event) => {
  botonPrecionado=true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  console.log(botonPrecionado);
  if(botonPrecionado){
    div.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>"; 
  }
  else{  
    div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
  }
  botonPrecionado=false;
});
