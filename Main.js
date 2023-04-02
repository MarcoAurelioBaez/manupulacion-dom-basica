const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid =document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);

console.log(
{
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML =("Ke peperron!! <br> El Papirosvko");
h1.innerHTML =("Ke peperroni!! <br> El Papirosvko");
p.innerHTML =("No memelucation");

console.log(h1.getAttribute("pantalla"));

h1.setAttribute("class", "rojo");

h1.classList.add("verde");

input.value= "456";

const img = document.createElement("img");
img.setAttribute("src", "https://img.freepik.com/vector-gratis/ilustracion-icono-dibujos-animados-lindo-oso-peluche-agitando-mano_138676-2714.jpg?w=2000")
console.log(img);

pid.append(img);
