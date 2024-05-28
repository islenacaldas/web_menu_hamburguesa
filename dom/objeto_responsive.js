const d=document,
w=window;


export default function responsiveMedia(id, mq, mobileContet, desktopContent){
let breakpoint = w.matchMedia(mq)


const responsive=(e)=>{
    if(e.matches){
        d.getElementById(id).innerHTML= desktopContent
    }else{
        d.getElementById(id).innerHTML =mobileContet
    }
    //console.log("MQ", e.matches)
}
breakpoint.addListener(responsive)
responsive(breakpoint);
}