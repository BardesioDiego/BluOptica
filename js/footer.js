const instagramBtn = document.getElementById("instagramBtn");
const mailBtn = document.getElementById("mailBtn");
const phoneBtn = document.getElementById("phoneBtn");
const locationBtn = document.getElementById("locationBtn");
  
  
  instagramBtn.addEventListener("click", function() {
    // Redireccionamos a la URL de Instagram
    window.location.href = "https://www.instagram.com/opticablu.uy";
  });
 // Redireccionamos a la URL de Mail
  mailBtn.addEventListener("click", function() {
    const direccionCorreo = "opticablu@gmail.com"; 
  window.location.href = "mailto:" + direccionCorreo;
});
 // Redireccionamos al número de telefono
phoneBtn.addEventListener("click", function() {
  const phoneOptica = "+59892996956"; 
window.location.href = "tel:" + phoneOptica;
});
 // Redireccionamos al mapa
 locationBtn.addEventListener("click", function() {
window.location.href = "https://maps.app.goo.gl/9SdgbWt5FBm8aNtJ7";
});