const d=document;
let x=0, 
y=0

export function moveBall(e, ball, stage){
    const $ball= d.querySelector(ball),
    $stage = d.querySelector(stage);
   
    const move= () => {
        $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
    }

    switch(e.keyCode){
        case 37:
            e.preventDefault();
            x--;
            move();
            break;
        case 38:
            e.preventDefault();
            y--;
            move();
            break;
        case 39:
            e.preventDefault();
            x++;
            move();
            break;
        case 40:
            e.preventDefault();
            y++;
            move()
            break;
        default:
            break; 
    }
   
}

export function shortcuts(e){
   if(e.key === "a" && e.altKey){
        alert("haz lanzado una alerta con el teclado")
    }

    if(e.key === "c" && e.altKey){
        confirm("haz lanzado una confirmacion con el teclado")
    }

    if(e.key === "p" && e.altKey){
        prompt("haz lanzado un aviso con el teclado")
    }
}