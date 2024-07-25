function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    // && representa "e" Ex: se o elemento não for nulo "e" localName. Vai tocar o áudio 
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Este elemento não condiz com nenhuma ação nesta plataforma');
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla');


// let contador = 0;

// ENQUANTO (condição)
// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];

//     const instrumento = tecla.classList[1];

//     const idDoAudio = `#som_${instrumento}`

//     tecla.onclick = function (){
//         tocaSom (idDoAudio)
//     }

//     contador = contador + 1;

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idDoAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idDoAudio)
    }

    // contador++ faz a mesma função de
    // contador = contador + 1;

    tecla.onkeydown = function (evento) {
        console.log(evento.code)

        if (evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }


}
