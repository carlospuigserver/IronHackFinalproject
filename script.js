// Nivel 1
let futbolistasNivel1 = [
    "ronaldo.jpg", "messi.jpg", "neymar.jpg", "saviola.jpg", "duda.jpg",
    "el-arabi.jpg", "douglas.jpg", "granero.jpg", "altintop.jpg", "malouda.jpg", "güiza.jpg",
];

let correctaNivel1 = [1, 1, 2, 1, 0, 1, 2, 1, 1, 0,2];

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
    document.getElementById("pantalla-nivel-2").style.display = "block";
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

function volverAlInicioNivel2() {
    indiceFutbolistaNivel2 = 0;
    intentosCorrectosNivel2 = 0;
    intentosIncorrectosNivel2 = 0;

    document.getElementById("pantalla-final-nivel-2").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
}

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