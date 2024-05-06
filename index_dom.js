
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm} from "./dom/reloj.js";
const d= document;

d.addEventListener("DOMContentLoaded",(e) =>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj", "#activar-reloj","#desactivar-reloj")
    alarm("assets/alarm-car-or-home-62554.mp3","#activar-alarma", "#desactivar-alarma")
})