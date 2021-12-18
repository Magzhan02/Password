const copy = document.querySelector(".copy");
const pass = document.getElementById("pass");
const length = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const simbol = document.getElementById("simbol");
const generate = document.getElementById("generate");


const upperLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetter = 'abcdefghijklmnopqrstuvwxyz';
const num = '0123456789';
const simbols = '!@#$%^&*()_+=';

function setUpperCase() {
    return upperLetter[Math.floor(Math.random() *
        upperLetter.length)];
}

function setLowercase() {
    return lowerLetter[Math.floor(Math.random() *
        lowerLetter.length)];
}

function setNum() {
    return num[Math.floor(Math.random() *
        num.length)];
}

function setSimbol() {
    return simbols[Math.floor(Math.random() *
        simbols.length)];
}

function setPassword() {
    const len = length.value;

    let password = "";

    for (let i = 0; i < len; i++) {
        let j = generateP();
        password += j;
    }
    pass.value = password;
}

function atLeastOneCheckboxIsChecked(){
    const checkboxes = Array.from(document.querySelectorAll("input[type='checkbox']"));
    return checkboxes.reduce((acc, curr) => acc || curr.checked, false);
}

function generateP() {
    const passw = [];
    if(atLeastOneCheckboxIsChecked()){
        if (upper.checked) {
            passw.push(setUpperCase())
        }
        if (lower.checked) {
            passw.push(setLowercase())
        }
        if (number.checked) {
            passw.push(setNum())
        }
        if (simbol.checked) {
            passw.push(setSimbol())
        }
        return passw[Math.floor(Math.random() * passw.length)]
    }
    else{
        return ''
    }
}

generate.addEventListener('click', setPassword)

copy.addEventListener('click', function () {
    navigator.clipboard.writeText(pass.value).then(
        function () {
            alert("Copied!");
        })
})