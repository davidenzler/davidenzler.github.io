function changeFontSize() {
    const textArea = document.getElementById("textInput");
    textArea.style.fontSize = "24pt";
}

function addStyle() {
    const textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
    
}

function removeSyle() {
    const textArea = document.getElementById("textInput");
    textArea.style.fontWeight = "";
    textArea.style.color = "";
    textArea.style.textDecoration = "";

}

function moo() {
    const textArea = document.getElementById("textInput");
    const upperText = textArea.value.toUpperCase();
    textArea.value = upperText;
    let string = textArea.value;
    let sentences = string.split(".");
    string = sentences.join("-MOO. ");
    textArea.value = string;
}

const biggerBtn = document.getElementById("biggerButton");
const fancyRadioBtn = document.getElementById("fancy");
const boringRadioBtn = document.getElementById("boring");
const mooBtn = document.getElementById("moo");

biggerBtn.addEventListener("click", changeFontSize);
fancyRadioBtn.addEventListener("click", addStyle);
boringRadioBtn.addEventListener("click", removeSyle);
mooBtn.addEventListener("click", moo);