'use strict';

/*reto2*/
const verificarBtn = document.getElementById('contar');

verificarBtn.onclick = function (){
    let sticker1 = document.getElementById('sticker1').value;
    let sticker2 = document.getElementById('sticker2').value;
    let sticker3 = document.getElementById('sticker3').value;

    let total = (Number(sticker1)+Number(sticker2)+Number(sticker3))

    if (total > 10){
        document.getElementById('text1').innerText="Llevas demasiados stickers";
    } else {
        document.getElementById('text1').innerText=`Llevas ${total} stickers seleccionados`;
    }
}
