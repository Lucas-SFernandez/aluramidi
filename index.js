function tocaSom(idAudio) {

    document.querySelector(idAudio).play();

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
    
        tecla.onclick = function (){
            tocaSom (idDoAudio)
        }
    
        // contador++ faz a mesma função de
        // contador = contador + 1;
}

