let textColorLink = document.getElementById("text-color");
let bgColorLink = document.getElementById("bg-color");
let fflink = document.getElementById("fontFamily");
let sentence = document.getElementById("case");
let finish = document.getElementById("clear");
let bold = document.getElementById("b")
let italic = document.getElementById("i")
let under = document.getElementById("u")
let strike = document.getElementById("st")
let b = document.getElementById("borderr")
let big = document.getElementById("inc")
let small = document.getElementById("dec")
let right = document.getElementById("r")
let center = document.getElementById("c")
let left = document.getElementById("l")

let workingArea = document.getElementById("textArea");
let input = document.getElementById("inp");

// Set the initial colors
let textColor = "black";
let bgColor = "white";
let ff = "Arial";
let s_c = "lower"
let emp = "";
let bc = "black"
let fs = "14px"

textColorLink.addEventListener("click", function () {
    textColor = prompt("Enter a new text color:");
    workingArea.style.color = textColor;
});

bgColorLink.addEventListener("click", function () {
    bgColor = prompt("Enter a new background color:");
    inp.style.backgroundColor = bgColor;
});
fflink.addEventListener("click", function () {
    ff = prompt("Enter a new font-family:");
    workingArea.style.fontFamily = ff;
});
sentence.addEventListener("click", function () {
    s_c = prompt("Enter a case: lower || upper || capitalize");
    workingArea.style.textTransform = s_c;
});
finish.addEventListener("click", function () {
    location.reload()
});
bold.addEventListener("click", function () {
    workingArea.style.fontWeight = "bolder";
});
under.addEventListener("click", function () {
    workingArea.style.textDecoration = "underline";
});
italic.addEventListener("click", function () {
    workingArea.style.fontStyle = "italic";
});
strike.addEventListener("click", function () {
    workingArea.style.textDecoration = "line-through";
});
b.addEventListener("click", function () {
    bc = prompt("Enter Border Color")
    workingArea.style.border = "thick solid";
    workingArea.style.borderColor = bc;
});
big.addEventListener("click", function () {
    fs = prompt("Enter a Font Size to increase");
    workingArea.style.fontSize = fs;
});
small.addEventListener("click", function () {
    fs = prompt("Enter a Font Size to decrease");
    workingArea.style.fontSize = fs;
});
right.addEventListener("click", function () {
    workingArea.style.textAlign = "right";
});
center.addEventListener("click", function () {
    workingArea.style.textAlign = "center";
});
left.addEventListener("click", function () {
    workingArea.style.textAlign = "left";
});
function words() {
    let w = document.getElementById('word');
    let text = workingArea.value;
    let wordLength = text.split(" ")
    w.innerHTML = wordLength.length;
}
function letters() {
    let l = document.getElementById('letter');
    let letter = workingArea.value;
    let Length = letter.split("")
    l.innerHTML = Length.length;
}
function replace() {
    let replaceLetter = prompt("Enter the letter to replace:");
    let replacementLetter = prompt("Enter the replacement letter:");


    let newText = workingArea.value.replaceAll(replaceLetter, replacementLetter);

    workingArea.value = newText;
}