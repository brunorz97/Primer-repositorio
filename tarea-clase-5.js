

//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const botonCalcular = document.querySelector("#calcular");

botonCalcular.onclick = function() {
  let horasVideos = Number(document.querySelector("#horas1").value);
  let minutosVideos = Number(document.querySelector("#minutos1").value);
  let segundosVideos = Number(document.querySelector("#segundos1").value);

  horasVideos = horasVideos + Number(document.querySelector("#horas2").value);
  minutosVideos = minutosVideos + Number(document.querySelector("#minutos3").value);
  segundosVideos = segundosVideos + Number(document.querySelector("#segundos2").value);

  horasVideos = horasVideos + Number(document.querySelector("#horas3").value);
  minutosVideos = minutosVideos + Number(document.querySelector("#minutos3").value);
  segundosVideos = segundosVideos + Number(document.querySelector("#segundos3").value);

  horasVideos = horasVideos + Number(document.querySelector("#horas4").value);
  minutosVideos = minutosVideos + Number(document.querySelector("#minutos4").value);
  segundosVideos = minutosVideos + Number (document.querySelector("#segundos4").value);

  horasVideos = horasVideos + Number(document.querySelector("#horas5").value);
  minutosVideos = minutosVideos + Number(document.querySelector("#minutos5").value);
  segundosVideos = segundosVideos + Number(document.querySelector("#segundos5").value);


document.querySelector("#tiempototal").innerText = `Los videos suman un total de ${horasVideos} horas 
 ${minutosVideos} minutos ${segundosVideos} segundos`;
return false;
}









