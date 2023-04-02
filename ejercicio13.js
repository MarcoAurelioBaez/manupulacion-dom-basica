const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const input3 = document.querySelector('#num3');
const resultado16 = document.querySelector("#result16");
const resultbin =document.querySelector("#binario")
const resultado=document.querySelector('#result')

function btnOnClick()
{
   // const sumaTotal = (parseInt(num1.value,16) + parseInt(num2.value,16) + parseInt(num3.value,16));
    const sumaTotal = (parseInt(num1.value) + parseInt(num2.value) + parseInt(num3.value));
    const sumaTotal2 = (parseInt(num1.value,2) + parseInt(num2.value,2) + parseInt(num3.value,2));

    resultado.innerHTML =("El resultado es: " + sumaTotal)
    resultbin.innerHTML = ("El resultado en binario es : " + sumaTotal2);
}
