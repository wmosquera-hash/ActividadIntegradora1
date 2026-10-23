document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll(".tarjeta button");

  const detalles = [
    "Los inversores convierten la corriente continua de las baterías en corriente alterna para alimentar equipos eléctricos.",
    "Los Power Banks permiten cargar celulares y otros dispositivos cuando no tenemos acceso a un tomacorriente.",
    "Los focos solares aprovechan la energía del sol para proporcionar iluminación y ayudar a ahorrar electricidad."
  ];

  botones.forEach(function (boton, indice) {
    boton.addEventListener("click", function () {
      alert(detalles[indice]);
    });
  });
});