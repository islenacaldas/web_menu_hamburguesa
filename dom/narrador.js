const d= document, 
w=window

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select"),
    $speechTextArea = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage= new SpeechSynthesisUtterance();

    console.log(speechMessage);

    let voices =[];
}