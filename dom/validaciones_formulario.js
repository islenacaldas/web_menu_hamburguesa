const d= document;

export default function contactFormValidations() {
const $form= d.querySelector(".contact-form"),
$inputs =d.querySelectorAll(".contact-form[required]");

//console.log($inputs);

$inputs.forEach(input =>{
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contact-form-error","none")
    input.insertAdjacentElement("afterend", $span)
});

d.addEventListener("keyup", e=>{
    if(e.target.matches(".contact-form[required]")){
        let $input = e.target,
        pattern= $input.pattern || $input.dataset.pattern;

       // console.log($input, pattern);
        if(pattern && $input.value !== ""){
            //console.log("El input tiene patron")
            let regex= new RegExp(pattern)
            return !regex.exec($input.value)
            ? d.getElementById($input.name).add("is-active")
            : d.getElementById($input.name).remove("is-active")
        }
        if(!pattern){
            //console.log("El input no tiene patron")
            return $input.value===""
            ? d.getElementById($input.name).classList.add("is-active")
            :d.getElementById($input.name).classList.remove("is-active")
        }
    }
})

d.addEventListener("submit", (e)=>{
    e.preventDefault();
    alert("enviando formulario")

    const $loader= d.querySelector(".contact-form-loader"),
    $responsive = d.querySelector(".contact-form-response")

    $loader.classList.remove("none")
})

}