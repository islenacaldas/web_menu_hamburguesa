
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarma } from "./dom/reloj.js"
import { moveBall, shortcuts} from "./dom/teclado.js";

const d= document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarma("/assets/super_minion_3.mp3","#activar-alarma", "#desactivar-alarma")
})

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})