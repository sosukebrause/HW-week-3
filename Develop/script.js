// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "abcdefghkmnpqrstuvwxyz23456789";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  for (var i = 1; i < 4; i++) {}
  passwordText.value = password;
}

function 

function generateAlphabet () {
  var character = [];

  for (let n=0; n<10; n++) {
    character.push(n.toString());
  }
}


console.log("hello");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(tests);
