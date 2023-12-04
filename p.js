// Nivel 1
let futbolistasNivel1 = [
    "ronaldo.jpg", "messi.jpg", "neymar.jpg", "saviola.jpg", "duda.jpg",
    "el-arabi.jpg", "douglas.jpg", "granero.jpg", "altintop.jpg", "malouda.jpg", "güiza.jpg",
];

let correctaNivel1 = [1, 1, 2, 1, 0, 1, 2, 1, 1, 0, 2];

let opcionesNivel1 = [
    ["Figo", "Cristiano Ronaldo", "Ronaldo Nazario"],
    ["Maradona", "Messi", "Riquelme"],
    ["Garrincha", "Romario", "Neymar"],
    ["Saviello", "Saviola", "Savela"],
    ["Duda", "Hélder Postiga", "Raúl Meireles"],
    ["Elyounoussi", "El-Arabi", "Ounahi"],
    ["Adriano", "Paulinho", "Douglas"],
    ["Canales", "Granero", "Negredo"],
    ["Sokratis", "Altintop", "Konoplyanka"],
    ["Malouda", "Obi Mikel", "Ramires"],
    ["Trigueros", "Morientes", "Güiza"],
];
let posActualNivel1 = 0;
let cantidadAcertadasNivel1 = 0;

// Nivel 2
let futbolistasNivel2 = [
    { nombre: "Arshavin", imagen: "img/arshavin.jpg" },
    { nombre: "Fred", imagen: "img/fred.jpg" },
    { nombre: "Guarín", imagen: "img/guarín.avif" },
    { nombre: "Samper", imagen: "img/samper.jpg" },
    { nombre: "Kanouté", imagen: "img/kanoute.jpg" },
    { nombre: "Verón", imagen: "img/verón.jpg" },
    { nombre: "Lescott", imagen: "img/lescott.jpg" },
    { nombre: "Aguirretxe", imagen: "img/aguirretxe.jpg" },
    { nombre: "Borja Valero", imagen: "img/borja-valero.jpg" },
    { nombre: "Mathieu", imagen: "img/mathieu.jpg" },
    { nombre: "Eliseu", imagen: "img/eliseu.jpg" },
];

let indiceFutbolistaNivel2 = 0;
let intentosCorrectosNivel2 = 0;
let intentosIncorrectosNivel2 = 0;

// Nivel 3
let futbolistasNivel3 = [
    { nombre: "Zidane", imagen: "img/zidane.jpg" },
    { nombre: "Baresi", imagen: "img/baresi.jpg" }, // Agrega la ruta de la imagen correspondiente
    { nombre: "Laudrup", imagen: "img/laudrup.jpg" },
    { nombre: "Beckham", imagen: "img/beckham.jpg" },
    { nombre: "Bergkamp", imagen: "img/bergkamp.jpg" },
    { nombre: "Redondo", imagen: "img/redondo.jpg" },
    { nombre: "Puskás", imagen: "img/puskas.jpg" },
    { nombre: "Henry", imagen: "img/henry.jpg" },
    { nombre: "Garrincha", imagen: "img/garrincha.jpg" },
    { nombre: "Platini", imagen: "img/platini.jpg" },
    { nombre: "Weah", imagen: "img/weah.jpg" },
    { nombre: "Cantona", imagen: "img/cantona.jpg" },

];


let indiceFutbolistaNivel3 = 0;
let intentosCorrectosNivel3 = 0;
let intentosIncorrectosNivel3 = 0;

// Funciones generales
function comenzarJuegoNivel1() {
    posActualNivel1 = 0;
    cantidadAcertadasNivel1 = 0;

    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";

    cargarFutbolistaNivel1();
}

function cargarFutbolistaNivel1() {
    if (futbolistasNivel1.length <= posActualNivel1) {
        terminarJuegoNivel1();
    } else {
        limpiarOpcionesNivel1();

        document.getElementById("imgFutbolista").src = "img/" + futbolistasNivel1[posActualNivel1];
        document.getElementById("n0").innerHTML = opcionesNivel1[posActualNivel1][0];
        document.getElementById("n1").innerHTML = opcionesNivel1[posActualNivel1][1];
        document.getElementById("n2").innerHTML = opcionesNivel1[posActualNivel1][2];
    }
}

function limpiarOpcionesNivel1() {
    for (let i = 0; i < 3; i++) {
        document.getElementById("n" + i).className = "nombre";
        document.getElementById("l" + i).className = "letra";
        document.getElementById("op" + i).classList.remove("correcta", "incorrecta");
    }
}

function comprobarRespuestaNivel1(opElegida) {
    limpiarOpcionesNivel1();

    if (opElegida == correctaNivel1[posActualNivel1]) {
        document.getElementById("n" + opElegida).classList.add("nombreAcertada");
        document.getElementById("l" + opElegida).classList.add("letraAcertada");
        document.getElementById("op" + opElegida).classList.add("correcta");
        cantidadAcertadasNivel1++;
    } else {
        document.getElementById("n" + opElegida).classList.add("nombreNoAcertada");
        document.getElementById("l" + opElegida).classList.add("letraNoAcertada");
        document.getElementById("op" + opElegida).classList.add("incorrecta");

        document.getElementById("n" + correctaNivel1[posActualNivel1]).classList.add("nombreAcertada");
        document.getElementById("l" + correctaNivel1[posActualNivel1]).classList.add("letraAcertada");
        document.getElementById("op" + correctaNivel1[posActualNivel1]).classList.add("correcta");
    }

    setTimeout(limpiarOpcionesNivel1, 1000);
    posActualNivel1++;

    if (futbolistasNivel1.length <= posActualNivel1) {
        setTimeout(mostrarPantallaFinalNivel1, 1000);
    } else {
        setTimeout(cargarFutbolistaNivel1, 1000);
    }
}

function mostrarPantallaFinalNivel1() {
    document.getElementById("pantalla-juego").style.display = "none";
    const pantallaFinalNivel1 = document.getElementById("pantalla-final");
    pantallaFinalNivel1.style.display = "block";
    
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadasNivel1;
    document.getElementById("numIncorrectas").innerHTML = futbolistasNivel1.length - cantidadAcertadasNivel1;

    const numCorrectas = cantidadAcertadasNivel1;
    const numIncorrectas = futbolistasNivel1.length - cantidadAcertadasNivel1;

    const mensajeFinal = document.createElement("p");

    if (numCorrectas >= 9) {
        mensajeFinal.textContent += " ¡Increíble! Eres un experto en fútbol.";
    } else if (numCorrectas >= 5) {
        mensajeFinal.textContent += " ¡Bien hecho! Tienes buen conocimiento de fútbol.";
    } else {
        mensajeFinal.textContent += " ¡Sigue practicando! Puedes mejorar.";
    }

    pantallaFinalNivel1.appendChild(mensajeFinal);
}

function terminarJuegoNivel1() {
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-inicial-nivel-2").style.display = "block";
}

function irAlSiguienteNivel() {
    // Oculta la pantalla final del primer nivel
    document.getElementById("pantalla-final").style.display = "none";

    // Muestra la pantalla inicial del segundo nivel
    document.getElementById("pantalla-inicial-nivel-2").style.display = "block";
}

// Función que se ejecuta al hacer clic en el botón "COMENZAR A JUGAR (Nivel 2)"
function comenzarJuegoNivel2() {
    // Inicializa las variables para el segundo nivel
    indiceFutbolistaNivel2 = 0;
    intentosCorrectosNivel2 = 0;
    intentosIncorrectosNivel2 = 0;

    // Oculta la pantalla inicial del segundo nivel
    document.getElementById("pantalla-inicial-nivel-2").style.display = "none";

    // Muestra la pantalla de juego del segundo nivel
    document.getElementById("pantalla-juego-nivel-2").style.display = "block";

    // Muestra el primer futbolista del segundo nivel
    mostrarFutbolistaNivel2();
}


function mostrarFutbolistaNivel2() {
    const imgElementNivel2 = document.getElementById("imgFutbolistaNivel2");
    imgElementNivel2.src = futbolistasNivel2[indiceFutbolistaNivel2].imagen;
    document.getElementById("nombreFutbolistaNivel2").value = "";
    document.getElementById("nombreFutbolistaNivel2").focus();
}

function comprobarRespuestaNivel2() {
    const nombreIngresadoNivel2 = document.getElementById("nombreFutbolistaNivel2").value.trim();
    const nombreCorrectoNivel2 = futbolistasNivel2[indiceFutbolistaNivel2].nombre;

    const nombreInputNivel2 = document.getElementById("nombreFutbolistaNivel2");
    if (nombreIngresadoNivel2.toLowerCase() === nombreCorrectoNivel2.toLowerCase()) {
        intentosCorrectosNivel2++;
        nombreInputNivel2.parentElement.classList.add("correcto");
    } else {
        intentosIncorrectosNivel2++;
        nombreInputNivel2.parentElement.classList.add("incorrecto");
    }

    setTimeout(() => {
        nombreInputNivel2.parentElement.classList.remove("correcto", "incorrecto");
        siguienteFutbolistaNivel2();
    }, 1000);
}
document.getElementById("btnComprobarNivel2").addEventListener("click", comprobarRespuestaNivel2);
function siguienteFutbolistaNivel2() {
    indiceFutbolistaNivel2++;

    if (indiceFutbolistaNivel2 < futbolistasNivel2.length) {
        mostrarFutbolistaNivel2();
    } else {
        mostrarPantallaFinalNivel2();
    }
}

function mostrarPantallaFinalNivel2() {
    document.getElementById("pantalla-juego-nivel-2").style.display = "none";
    const pantallaFinalNivel2 = document.getElementById("pantalla-final-nivel-2");
    pantallaFinalNivel2.style.display = "block";

    document.getElementById("numCorrectasNivel2").innerText = intentosCorrectosNivel2;
    document.getElementById("numIncorrectasNivel2").innerText = intentosIncorrectosNivel2;

    const numCorrectasNivel2 = intentosCorrectosNivel2;
    const numIncorrectasNivel2 = intentosIncorrectosNivel2;

    const mensajeFinalNivel2 = document.createElement("p");
    

    if (numCorrectasNivel2 >= 9) {
        mensajeFinalNivel2.textContent += " Eres un pedazo de friki";
    } else if (numCorrectasNivel2 >= 5) {
        mensajeFinalNivel2.textContent += "Tienes buen conocimiento de fútbol.";
    } else {
        mensajeFinalNivel2.textContent += "No sabes tanto del tema como te imaginabas...";
    }

    pantallaFinalNivel2.appendChild(mensajeFinalNivel2);
}



function terminarJuegoNivel2() {
    // Oculta la pantalla de juego del Nivel 2
    document.getElementById("pantalla-juego-nivel-2").style.display = "none";
    
    // Muestra la pantalla final del Nivel 2
    document.getElementById("pantalla-final-nivel-2").style.display = "block";

    // Llama a la función para ir al siguiente nivel (Nivel 3)
    irAlSiguienteNivel3();
}

// Otra opción sería llamar a irAlSiguienteNivel3 desde el botón de la pantalla final del Nivel 2.

// Función para ir al tercer nivel
function irAlSiguienteNivel3() {
    // Oculta la pantalla final del segundo nivel
    document.getElementById("pantalla-final-nivel-2").style.display = "none";

    // Muestra la pantalla inicial del tercer nivel
    document.getElementById("pantalla-inicial-nivel-3").style.display = "block";
}


function ocultarMostrarPantallas(pantallaOculta, pantallaVisible) {
    document.getElementById(pantallaOculta).style.display = "none";
    document.getElementById(pantallaVisible).style.display = "block";
}




// Funciones para el Nivel 3

function comenzarJuegoNivel3() {
    indiceFutbolistaNivel3 = 0;
    intentosCorrectosNivel3 = 0;
    intentosIncorrectosNivel3 = 0;

    ocultarMostrarPantallas("pantalla-inicial-nivel-3", "pantalla-juego-nivel-3");

    mostrarFutbolistaNivel3();
}

function mostrarFutbolistaNivel3() {
    
    const imgElementNivel3 = document.getElementById("imgFutbolistaNivel3");
    imgElementNivel3.src = futbolistasNivel3[indiceFutbolistaNivel3].imagen;
    document.getElementById("nombreFutbolistaNivel3").value = "";
    document.getElementById("nombreFutbolistaNivel3").focus();
}

function comprobarRespuestaNivel3() {
    const nombreIngresadoNivel3 = document.getElementById("nombreFutbolistaNivel3").value.trim();
    const nombreCorrectoNivel3 = futbolistasNivel3[indiceFutbolistaNivel3].nombre;

    const nombreInputNivel3 = document.getElementById("nombreFutbolistaNivel3");
    if (nombreIngresadoNivel3.toLowerCase() === nombreCorrectoNivel3.toLowerCase()) {
        intentosCorrectosNivel3++;
        nombreInputNivel3.parentElement.classList.add("correcto");
    } else {
        intentosIncorrectosNivel3++;
        nombreInputNivel3.parentElement.classList.add("incorrecto");
    }

    setTimeout(() => {
        nombreInputNivel3.parentElement.classList.remove("correcto", "incorrecto");
        siguienteFutbolistaNivel3();
    }, 1000);
}

function siguienteFutbolistaNivel3() {
    indiceFutbolistaNivel3++;

    if (indiceFutbolistaNivel3 < futbolistasNivel3.length) {
        mostrarFutbolistaNivel3();
    } else {
        mostrarPantallaFinalNivel3();
    }
}

function mostrarPantallaFinalNivel3() {
    ocultarMostrarPantallas("pantalla-juego-nivel-3", "pantalla-final-nivel-3");

    document.getElementById("numCorrectasNivel3").innerText = intentosCorrectosNivel3;
    document.getElementById("numIncorrectasNivel3").innerText = intentosIncorrectosNivel3;

    const mensajeFinalNivel3 = document.createElement("p");

    if (intentosCorrectosNivel3 >= 9) {
        mensajeFinalNivel3.textContent += " ¡Eres un maestro en fútbol! ¡Felicidades!";
    } else if (intentosCorrectosNivel3 >= 5) {
        mensajeFinalNivel3.textContent += " ¡Excelente desempeño! Tu conocimiento de fútbol es notable.";
    } else {
        mensajeFinalNivel3.textContent += " ¡Sigue practicando! Siempre hay más por aprender.";
    }

    document.getElementById("pantalla-final-nivel-3").appendChild(mensajeFinalNivel3);
}

function volverAlInicioNivel3() {
    indiceFutbolistaNivel3 = 0;
    intentosCorrectosNivel3 = 0;
    intentosIncorrectosNivel3 = 0;

    ocultarMostrarPantallas("pantalla-final-nivel-3", "pantalla-inicial");
}

// Event Listeners



// Event Listeners

document.getElementById("btnComenzarNivel1").addEventListener("click", comenzarJuegoNivel1);
document.getElementById("btnComprobarNivel1").addEventListener("click", (event) => {
    const opElegida = event.target.dataset.opcion;
    comprobarRespuestaNivel1(opElegida);
});
document.getElementById("btnIrAlNivel2").addEventListener("click", irAlSiguienteNivel);

document.getElementById("btnComenzarNivel2").addEventListener("click", comenzarJuegoNivel2);
document.getElementById("btnComprobarNivel2").addEventListener("click", comprobarRespuestaNivel2);
document.getElementById("btnVolverAlInicioNivel2").addEventListener("click", volverAlInicioNivel2);

document.getElementById("btnIrAlNivel3").addEventListener("click", irAlSiguienteNivel3);

document.getElementById("btnComenzarNivel3").addEventListener("click", comenzarJuegoNivel3);
document.getElementById("btnComprobarNivel3").addEventListener("click", comprobarRespuestaNivel3);
document.getElementById("btnVolverAlInicioNivel3").addEventListener("click", volverAlInicioNivel3);

