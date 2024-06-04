const d= document;

export default function draw(btn, selector){
  const getWinnerComment =(selector)=>{
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
  

  /*para hacer un sorto en tiempo real se debe buscar el selector que nos esta dando el nombre 
  depende para donde estemos buscando hacer el sorteo;
  con comentarios de youtube:
   asi se ve el codigo--> 
   este se pega en la consola de youtubeconst getWinnerComment =() => {
    const $players = Array.from(document.querySelectorAll('#sections #contents #comment #body'));
    if ($players.length === 0) {
        return 'No hay comentarios.';
    }
    const randomIndex = Math.floor(Math.random() * $players.length);
    const winnerComment = $players[randomIndex];
    const winnerName = winnerComment.querySelector('#author-text span').textContent.trim();
    const winnerCommentText = winnerComment.querySelector('#content-text').textContent;
    return winnerComment ? `El ganador es: ${winnerName}, comentario: ${winnerCommentText}` : 'No se pudo obtener el ganador.';
}
// luego se coloca el buscador del comentario con la siguiente etiqueta creada directamente por google llamando a la funcion: 

getWinnerComment("ytb-comment-thread-render")

por ultimo nos da el resultado con un comentario al azar, diciendo que es el o la ganadora*/