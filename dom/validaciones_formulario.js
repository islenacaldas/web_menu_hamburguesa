const d= document;

export default function contactFormValidations() {
const $form= d.querySelector(".contact-form"),
$inputs =d.querySelectorAll(".contact-form [required]");

console.log($inputs);

$inputs.forEach(input =>{
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    input.insertAdjacentElement("afterend", $span)
})
}