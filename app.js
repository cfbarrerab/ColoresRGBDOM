const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

//Actualizar el texto de los párrafos

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

//Actualizar Color

function actualizarColor (rojo, verde, azul){
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB;
};

//Actualizar Input Rojo con Listener

inputRojo.addEventListener('change', (e) => {
    let rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
});

//Actualizar Input Verde con Listener

inputVerde.addEventListener('change', (e) => {
    let verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
});

//Actualizar Input Azul con Listener

inputAzul.addEventListener('change', (e) => {
    let azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
});