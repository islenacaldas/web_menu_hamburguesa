const d=document;

export function moveBall(e, ball, stage){
    const $ball= d.querySelector(ball)
    $stage = d.querySelector(stage)
    console.log(e.keyCode)
}

export function shortcuts(e){
    /*console.log(e)
    console.log(e.type)
    console.log(e.key)
    
    console.log(`aly: ${e.altKey}`)
    console.log(`ctrl: ${e.ctrlKey}`)
    console.log(`shift:${e.shiftKey}`)*/

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