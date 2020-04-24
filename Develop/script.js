// Assignment Code
var chars = "abcdefghijklmnopqrstuvwxyz123456789!@#$%^&*_-/+?";
console.log(chars.length);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != undefined) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

function generatePassword() {
  var character = [];
  var length = prompt("Enter character length numerically");
  if (length > 128 || length < 8) {
    alert("must be more than 8 and less than 128");
    return;
  } else if (isNaN(length) === true) {
    alert("must provide number for length");
    return;
  } else {
    for (let n = 0; n < length; n++) {
      character.push(chars[Math.floor(Math.random() * chars.length - 1)]);
    }
    return character.join("");
  }
}
function add() {
  console.log("hello");
}
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

// console.log(generateAlphabet());
// document.getElementById("password").innerHTML = generatePassword();
//innerHTML is function to add dynamically

// for (let n = 0; n < 10; n++) {
//   console.log(Math.floor(Math.random() * 10));
// }

// Add event listener to generate button
// console.log(tests);
