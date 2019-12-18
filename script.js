var userPass = [];
var specialSet =  " !#$%&()*+,-./:;<=>?@[\]^_`{|}~";
var numberCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var letterCharacters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "Y", "z"];
var passwordResult = document.querySelector('#exampleFormControlTextarea1');
var passLength = document.getElementById('length').value;
var passwordType = document.querySelector('#exampleFormControlSelect2').value;
let passCopy = document.querySelector('#copy');

document.getElementById("generate").addEventListener("click", function() {
    event.preventDefault();
    for (var i = 0; i< document.getElementById('length').value; i++) {
        if (document.querySelector('#exampleFormControlSelect2').value == 1) {
            var rnum = specialSet[Math.floor(Math.random() *specialSet.length)];
            userPass.push(rnum);
        }
        else if (document.querySelector('#exampleFormControlSelect2').value == 2) {
            var rnum = numberCharacters[Math.floor(Math.random() *numberCharacters.length)];
            userPass.push(rnum);
        }
        else if (document.querySelector('#exampleFormControlSelect2').value == 3){
            var rnum = letterCharacters[Math.floor(Math.random() *letterCharacters.length)];
            userPass.push(rnum);
        }
        else {
            var rnum = letterCharacters[Math.floor(Math.random() *letterCharacters.length)].toUpperCase();
            userPass.push(rnum);
        }
        }
        userPass = userPass.join('');
        console.log(userPass);
        passwordResult.textContent = userPass;
    }
);
document.getElementById("copy").addEventListener("click", function() {
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
});
    