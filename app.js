const cronometro = document.getElementById('cronometro')
const buttonStart = document.getElementById('button-start')
const buttonPause = document.getElementById('button-pause')

let tempoInicial = 25 * 60
let tempoPausa = 5 * 60

let tempoFormatado = new Date(tempoInicial * 1000).toISOString().substr(11, 8)

cronometro.textContent = tempoFormatado

function iniciarContage() {}

buttonStart.addEventListener('click', iniciarContage)
