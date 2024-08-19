function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Este elemento não condiz com nenhuma ação nesta plataforma');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idDoAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idDoAudio)
    }

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
