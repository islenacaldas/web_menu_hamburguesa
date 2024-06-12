const d= document;

export default function scrollSpy(){
 const $sections =d.querySelectorAll("section[data-scroll-spy]")
 const cb=(entries)=>{
    //console.log("entries", entries);

    entries.forEach(entry =>{
        //console.log("entry", entry);
        const id= entry.target.getAttribute("id");
        console.log(id)
        if(entry.isIntersecting){
        d.querySelectorAll(`a[data-scroll-spy][href="#${id}"]`)
        .classList("active");
        }else{
            d.querySelectorAll(`a[data-scroll-spy][href="#${id}"]`)
            .classList.remove("active")
        }
    })
}   

 const observer = new IntersectionObserver(cb,{
    threshold:[0.5, 0.75],
 });
console.log("observer", observer)
 $sections.forEach(el=>observer.observe(el));
}
