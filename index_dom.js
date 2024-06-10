
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarma } from "./dom/reloj.js"
import { moveBall, shortcuts} from "./dom/teclado.js";
import  countdown from "./dom/cuenta_regresiva.js"
import scrollTopButton from "./dom/boton_scroll.js";
import darkTheme from "./dom/tema_obscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busquedas.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";

const d= document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarma("/assets/super_minion_3.mp3","#activar-alarma", "#desactivar-alarma"),
    countdown("countdown",
    "Nov 01, 2024 11:00:00",
     "feliz cumple preciosa 🎉 "
    ),

    scrollTopButton(".scroll-top-btn"),

    responsiveMedia(
        "youtube",
        "(min-width:1024px)",
         `<a href="https://www.youtube.com/watch?v=bi_vc3oD6Tc" target="_blank" rel="noopener">Ver Video</a>`,
         `<iframe width="560" height="315" 
         src="https://www.youtube.com/embed/bi_vc3oD6Tc?si=5350kedsZYVXnt5P"
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
        )
    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        `<a href="https://maps.app.goo.gl/sT5vo4Lq8jyYgNYp9" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127249.70592153331!2d-74.14032187643294!3d4.67342486302138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7eccfe58f%3A0x99cb72b35351476!2sPlaza%20de%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1716823821791!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"`
        )
    responsiveTester("responsive-tester");

    userDeviceInfo("user-device");

    webCam("webcam");

    getGeolocation("geolocation")
    searchFilters(".card-filter",".card")
    draw("#winner-btn",".player")
    slider();
})

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})
darkTheme(".dark-theme-btn","dark-mode")