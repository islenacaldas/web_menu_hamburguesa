const d= document, 
w=window

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
    $speechTextArea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage= new SpeechSynthesisUtterance();

    //console.log(speechMessage);

    let voices =[];


    d.addEventListener("DOMContentLoaded", (e)=>{
       // console.log(w.speechSynthesis.getVoices())
        //console.log(w.speechSynthesis)

        w.speechSynthesis.addEventListener("voiceschanged", e=>{
            //console.log(e)
            voices= w.speechSynthesis.getVoices();
            //console.log(voices);

            voices.forEach((voice)=>{
                const $option = d.createElement("option")
                $option.value= voice.name;
                $option.textContent = `${voice.name} *** ${voice.lang}`


                $speechSelect.appendChild($option)
            })
        })
    })
        d.addEventListener("change", e=>{})
    d.addEventListener("click", e=>{})
}