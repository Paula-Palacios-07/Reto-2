'use strict';

/*reto3*/
const btnIngresar = document.getElementById('pass');

btnIngresar.onclick = function (){
    const num1 = document.getElementById('pass_1').value;
    const num2 = document.getElementById('pass_2').value;
    const num3 = document.getElementById('pass_3').value;
    console.log(num1, num2, num3);

    if (num1 === '9' && num2 === '1' && num3 === '1'){
        document.getElementById('text2').innerText="Password 1 Correcto";
    } else if (num1 === '7' && num2 === '1' && num3 === '4'){
        document.getElementById('text2').innerText="Password 2 Correcto";
    } else {
        document.getElementById('text2').innerText="Password Incorrecto";
    }
}