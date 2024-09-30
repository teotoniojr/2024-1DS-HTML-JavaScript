
function sorteia() {
    return Math.round(Math.random() * 100)
}

function sorteiNumeros(quantidade) {

    let segredos = []
    let numero = 1

    while (numero <= quantidade) {
        numeroAleatorio = sorteia()
        let achou = false;

        for (let i = 0; i <= segredos.length; i++) {
            if (segredos[i] == numeroAleatorio) {
                achou = true;
                break
            }

        }

        if (achou == false) {
            segredos.push(numeroAleatorio)
            numero++
        }

    }

    return segredos
}

let segredos = sorteiNumeros(4)
console.log(segredos)
let campoNumero = document.querySelector('input');
campoNumero.focus()

function verifica() {
    let acertou = false;

    for (i = 0; i < 3; i++) {
        if (campoNumero.value == segredos[i]) {
            alert('você acertou!')
            acertou = true
            break
        }
    }
    if (!acertou) {
        alert('Você errou')
    }
    campoNumero.value = ''
    campoNumero.focus()
}


var botao = document.querySelector('button')
botao.onclick = verifica;