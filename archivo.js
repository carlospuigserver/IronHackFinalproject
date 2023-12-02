const futbolistas = [
    
    { nombre: "Arshavin", imagen: "img/arshavin.jpg" },
    { nombre: "Fred", imagen: "img/fred.jpg" },
    { nombre: "Guarín", imagen: "img/guarín.avif" },
    { nombre: "El Arabi", imagen: "img/el-arabi.jpg" },
    { nombre: "Kanouté", imagen: "img/kanoute.jpg" },
    { nombre: "Redondo", imagen: "img/redondo.jpg" },
    { nombre: "Eusebio", imagen: "img/eusebio.jpg" },
    { nombre: "Verón", imagen: "img/verón.jpg" },
    { nombre: "Güiza", imagen: "img/güiza.jpg" },
    { nombre: "Lescott", imagen: "img/lescott.jpg" },
    
    // Agrega los demás futbolistas con sus nombres e imágenes
];

let indiceFutbolista = 0;
let intentosCorrectos = 0;
let intentosIncorrectos = 0;

function comenzarJuego() {
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    mostrarFutbolista();
}

function mostrarFutbolista() {
    const imgElement = document.getElementById("imgFutbolista");
    imgElement.src = futbolistas[indiceFutbolista].imagen;
    document.getElementById("nombreFutbolista").value = "";
    document.getElementById("nombreFutbolista").focus();
}

function comprobarRespuesta() {
    const nombreIngresado = document.getElementById("nombreFutbolista").value.trim();
    const nombreCorrecto = futbolistas[indiceFutbolista].nombre;

    const nombreInput = document.getElementById("nombreFutbolista");
    if (nombreIngresado.toLowerCase() === nombreCorrecto.toLowerCase()) {
        intentosCorrectos++;
        nombreInput.parentElement.classList.add("correcto");
    } else {
        intentosIncorrectos++;
        nombreInput.parentElement.classList.add("incorrecto");
    }

    setTimeout(() => {
        nombreInput.parentElement.classList.remove("correcto", "incorrecto");
        siguienteFutbolista();
    }, 1000);
}


function siguienteFutbolista() {
    indiceFutbolista++;

    if (indiceFutbolista < futbolistas.length) {
        mostrarFutbolista();
    } else {
        mostrarPantallaFinal();
    }
}

function mostrarPantallaFinal() {
    document.getElementById("pantalla-juego").style.display = "none";
    const pantallaFinal = document.getElementById("pantalla-final");
    pantallaFinal.style.display = "block";

    document.getElementById("numCorrectas").innerText = intentosCorrectos;
    document.getElementById("numIncorrectas").innerText = intentosIncorrectos;
}

function volverAlInicio() {
    indiceFutbolista = 0;
    intentosCorrectos = 0;
    intentosIncorrectos = 0;

    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}

document.getElementById("btnComenzar").addEventListener("click", comenzarJuego);
document.getElementById("btnComprobar").addEventListener("click", comprobarRespuesta);
document.getElementById("btnVolverAlInicio").addEventListener("click", volverAlInicio);
