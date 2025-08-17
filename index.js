const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generateNew = document.getElementById("generate")
let passOne = document.getElementById("pass-one")
let passTwo = document.getElementById("pass-two")
let passLenght = document.getElementById("rangeValue")

function generatePass() {
    let passwordOne = "";
    let passwordTwo = "";
    let length = parseInt(passLenght.textContent);
    for (i = 0; i < length; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length);
        let randomIndexTwo = Math.floor(Math.random() * characters.length);
        passwordOne += characters[randomIndexOne]
        passwordTwo += characters[randomIndexTwo]
    }
    passOne.textContent = passwordOne
    passTwo.textContent = passwordTwo
}

function rangeSlide(value) {
            document.getElementById('rangeValue').innerHTML = value;
        }