// Assignment Code
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*_-/+?";
var allCharacters = lowerCase + upperCase + numbers + specialCharacters;

console.log(allCharacters.length);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != undefined) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

function getPasswordOptions() {
  var length = prompt("Enter the desired character length numerically");
  if (length > 128 || length < 8) {
    alert("must be more than 8 and less than 128");
    return;
  }
  if (isNaN(length) === true) {
    alert("must provide number for length");
    return;
  }
  if (hasSpecialCharacters === true) {
    return;
  }

  var hasSpecialCharacters = confirm("Click OK to include special characters");
  var hasLowerCase = confirm("click ok to include lowercase letters");
  var hasUpperCase = confirm("click ok to include uppercase letters");
  var hasNumbers = confirm("click ok to include numbers");
  var passwordOptions = {
    hasSpecialCharacters: hasSpecialCharacters,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    length: length,
  };

  return passwordOptions;
}

function generatePassword() {
  var character = [];

  for (let n = 0; n < length; n++) {
    character.push(
      allCharacters[Math.floor(Math.random() * allCharacters.length - 1)]
    );
  }
  return character.join("");
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
