const d= document;

export default function draw(btn, selector){
  const getWinner =(selector)=>{
      const $players = d.querySelectorAll(selector),
      random= Math.floor(Math.random()* $players.length),
      winner =$players[random];

      //console.log($players, random, winner)
      return `El ganador es: ${winner.textContent}`;
  }
  d.addEventListener("click", e=>{
      if(e.target.matches(btn)){
          let resultado= getWinner(selector);
          alert(resultado);
      }
  });
}

  /*para hacer un sorto en tiempo real se debe buscar el selector que nos esta dando el nombre 
  depende para donde estemos buscando hacer el sorteo;
  con comentarios de youtube:
   asi se ve el codigo--> 
   este se pega en la consola de youtube


 const getWinnerComment =(selector)=>{
      const $players = document.querySelectorAll(selector),
      random= Math.floor(Math.random()* $players.length),
      winner =$players[random];

      //console.log($players, random, winner)
      return `El ganador es: ${winner.textContent}`;
  }

  getWinnerComment("ytd-comment-thread-renderer #author-text span")
  esto que contiene dentro es el selector de youtube donde se encuentran los comentarios 
  del video. 

  para obtener el de otra red social se debe buscar el selector contenedor de el comentario
*/