// Arreglo que guarda las imágenes de los futbolistas. Este será el orden que se mostrarán.
let futbolistas = [
    "ronaldo.jpg", "messi.jpg", "neymar.jpg", "aguirretxe.jpg", "duda.jpg",
    "samper.jpg", "douglas.jpg", "granero.jpg", "altintop.jpg", "mathieu.jpg",
    "arshavin.jpg", "fred.jpg", "guarín.avif", "el-arabi.jpg", "kanoute.jpg",
    "redondo.jpg", "eusebio.jpg", "verón.jpg", "güiza.jpg", "lescott.jpg"
  ];
  
  // Arreglo que guarda la opción correcta para cada futbolista.
  let correcta = [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 1, 1, 1, 1, 1];
  
  // Arreglo que guarda los nombres de los futbolistas a mostrar en cada jugada.
  let opciones = [
    ["Figo", "Cristiano Ronaldo", "Ronaldo Nazario"],
    ["Maradona", "Messi", "Riquelme"],
    ["Garrincha", "Romario", "Neymar"],
    ["Zurutuza", "Aguirretxe", "Xabi Prieto"],
    ["Duda", "Hélder Postiga", "Raúl Meireles"],
    ["Montoya", "Samper", "Aleñà"],
    ["Adriano", "Douglas", "Paulinho"],
    ["Canales", "Granero", "Negredo"],
    ["Sokratis", "Altintop", "Konoplyanka"],
    ["Lenglet", "Mathieu", "Umtiti"]
  ];
  
  // Arreglo que guarda los nombres correctos de los futbolistas del 11 al 20.
  let nombresCorrectos2 = ["Arshavin", "Fred", "Guarín", "El Arabi", "Kanouté", "Redondo", "Eusébio", "Verón", "Güiza", "Lescott"];
  
  // Variable que guarda la posición actual.
  let posActual = 0;
  
  // Variable que guarda la cantidad acertadas hasta el momento.
  let cantidadAcertadas = 0;
  
  // Función que inicia el juego.
  function comenzarJuego() {
    // Reseteamos las variables.
    posActual = 0;
    cantidadAcertadas = 0;
    
    // Ocultamos la pantalla inicial y mostramos la pantalla del juego.
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    
    // Cargamos el primer futbolista.
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
  
      // Mostramos la imagen y las opciones del futbolista actual.
      document.getElementById("imgFutbolista").src = "img/" + futbolistas[posActual];
      document.getElementById("n0").innerHTML = opciones[posActual][0];
      document.getElementById("n1").innerHTML = opciones[posActual][1];
      document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
  }
  
  // Función que limpia las clases de las opciones.
  function limpiarOpciones() {
    for (let i = 0; i < 3; i++) {
      document.getElementById("n" + i).className = "nombre";
      document.getElementById("l" + i).className = "letra";
      document.getElementById("op" + i).classList.remove("correcta", "incorrecta");
    }
  }
  
  // Función que comprueba la respuesta seleccionada.
  function comprobarRespuesta(opElegida) {
    // Limpiamos las clases que se asignaron anteriormente.
    limpiarOpciones();
  
    // Comparamos la opción elegida con la opción correcta.
    if (opElegida == correcta[posActual]) { // Acertó.
      // Agregamos las clases para resaltar la opción elegida.
      document.getElementById("n" + opElegida).classList.add("nombreAcertada");
      document.getElementById("l" + opElegida).classList.add("letraAcertada");
      document.getElementById("op" + opElegida).classList.add("correcta");
      cantidadAcertadas++;
    } else { // No acertó.
      // Agregamos las clases para resaltar la opción incorrecta y la correcta.
      document.getElementById("n" + opElegida).classList.add("nombreNoAcertada");
      document.getElementById("l" + opElegida).classList.add("letraNoAcertada");
      document.getElementById("op" + opElegida).classList.add("incorrecta");
  
      document.getElementById("n" + correcta[posActual]).classList.add("nombreAcertada");
      document.getElementById("l" + correcta[posActual]).classList.add("letraAcertada");
      document.getElementById("op" + correcta[posActual]).classList.add("correcta");
    }
  
    // Esperamos 1 segundo y limpiamos las clases.
    setTimeout(limpiarOpciones, 1000);
    
    // Pasamos al siguiente futbolista.
    posActual++;
    // Esperamos 1 segundo adicional y cargamos el siguiente futbolista.
    setTimeout(cargarFutbolista, 1000);
  }
  
  // Función que termina el juego y muestra los resultados.
  function terminarJuego() {
    // Ocultamos la pantalla del juego y mostramos la pantalla final.
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    
    // Mostramos los resultados.
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = futbolistas.length - cantidadAcertadas;
  }
  
  // Función que reinicia el juego.
  function volverAlInicio() {
    // Ocultamos la pantalla final y mostramos la pantalla inicial.
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
  }
  