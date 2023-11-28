// Cargo en un arreglo las imágenes de los futbolistas. Este será el orden que se mostrarán.
let futbolistas = [ "ronaldo.jpg","messi.jpg", "neymar.jpg", "aguirretxe.jpg", "duda.jpg", "samper.jpg", "douglas.jpg", "granero.jpg", "altintop.jpg", "mathieu.jpg"];

// Arreglo que guardará la opción correcta para cada futbolista.
let correcta = [1, 1, 2, 1, 0, 1, 1, 1, 1, 1];

// Arreglo que guardará los nombres de los futbolistas a mostrar en cada jugada.
let opciones = [];
// Cargo en el arreglo opciones los nombres a mostrar en cada jugada.
opciones.push(["Figo", "Cristiano Ronaldo", "Ronaldo Nazario"]);
opciones.push(["Maradona", "Messi", "Riquelme"]);
opciones.push(["Garrincha", "Romario", "Neymar"]);
opciones.push(["Zurutuza", "Aguirretxe", "Xabi Prieto"]);
opciones.push(["Duda", "Hélder Postiga", "Raúl Meireles"]);
opciones.push(["Montoya", "Samper", "Aleñà"]);
opciones.push(["Adriano", "Douglas", "Paulinho"]);
opciones.push(["Canales", "Granero", "Negredo"]);
opciones.push(["Sokratis", "Altintop", "Konoplyanka"]);
opciones.push(["Lenglet", "Mathieu", "Umtiti"]);

// Variable que guarda la posición actual.
let posActual = 0;
// Variable que guarda la cantidad acertadas hasta el momento.
let cantidadAcertadas = 0;

function comenzarJuego() {
    // Reseteamos las variables.
    posActual = 0;
    cantidadAcertadas = 0;
    // Activamos las pantallas necesarias.
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarFutbolista();
}

// Función que carga el siguiente futbolista y sus opciones.
function cargarFutbolista() {
    // Controlamos si se han acabado los futbolistas.
    if (futbolistas.length <= posActual) {
        terminarJuego();
    } else {
        // Limpiamos las clases que se asignaron.
        limpiarOpciones();

        document.getElementById("imgFutbolista").src = "img/" + futbolistas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones() {
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida) {
    if (opElegida == correcta[posActual]) { // Acertó.
        // Agregamos las clases para colocar el color verde a la opción elegida.
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    } else { // No acertó.
        // Agregamos las clases para colocar en rojo la opción elegida.
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        // Opción que era correcta.
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    // Esperamos 1 segundo y pasamos a mostrar la siguiente futbolista y sus opciones.
    setTimeout(cargarFutbolista, 1000);
}

function terminarJuego() {
    // Ocultamos las pantallas y mostramos la pantalla final.
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    // Agregamos los resultados.
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = futbolistas.length - cantidadAcertadas;
}

function volverAlInicio() {
    // Ocultamos las pantallas y activamos la inicial.
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}
