
import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarma } from "./dom/reloj.js"
import { moveBall, shortcuts} from "./dom/teclado.js";
import  countdown from "./dom/cuenta_regresiva.js"

const d= document;

d.addEventListener("DOMContentLoaded",e=>{
    hamburgerMenu(".panel-btn",".panel", ".menu a")
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
    alarma("/assets/super_minion_3.mp3","#activar-alarma", "#desactivar-alarma"),
    countdown("countdown",
    "Nov 01, 2024 11:00:00",
     "feliz cumple preciosa 🎉 "
    )
})

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
})