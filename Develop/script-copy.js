var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*_-/+?";
var allCharacters = lowerCase + upperCase + numbers + specialCharacters;
console.log(allCharacters.length);

function splicing(shortArrayPlace, howMany, adder) {
  let lc = lowerCase;
  let uc = upperCase;
  let nu = numbers;
  let sp = specialCharacters;
  shortArray = [lc, uc, nu, sp];
  console.log(shortArray.splice(shortArrayPlace, howMany, adder));
  return shortArray.toString();
}
console.log(splicing(1, 1, null));

function generatePassword() {
  var character = [];

  var length = prompt("Enter the desired character length numerically");
  var hasUpperCase = confirm("click ok to include uppercase letters");
  var hasLowerCase = confirm("click ok to include lowercase letters");
  var hasNumbers = confirm("Click OK to include numbers");

  let validCharacters = [];
  if (hasUpperCase) {
    validCharacters += upperCase;
  }
  if (hasLowerCase) {
    validCharacters += lowerCase;
  }
  if (hasNumbers) {
    validCharacters += numbers;
  }

  for (let n = 0; n < length; n++) {
    character.push(
      validCharacters[Math.floor(Math.random() * validCharacters.length - 1)]
    );
  }
  return character;
}
// return character.join("");
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// var groups = {
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   upperCase: "ABCEDFGHIJKLMNOPQRSTUVWXYZ",
//   numbers: "1234567890",
//   specialCharacters: "!@#$%^&*_-/+?",
//   combine: function (aa, bb) {
//     finalForm = aa + bb;
//     // finalForm = aaa + bbb;
//     // finalForm = this.lowerCase + this.numbers;
//     return finalForm;
//   },
// };
// console.log(groups.combine(numbers, upperCase));
// groups.combine(lowerCase, upperCase);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password != undefined) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// function getPasswordOptions() {
//   var length = prompt("Enter the desired character length numerically");
//   if (length > 128 || length < 8) {
//     alert("must be more than 8 and less than 128");
//     return;
//   }
//   if (isNaN(length) === true) {
//     alert("must provide number for length");
//     return;
//   }
//   if (hasSpecialCharacters === true) {
//     return;
//   }
// }
//   var hasSpecialCharacters = confirm("Click OK to include special characters");
//   var hasLowerCase = confirm("click ok to include lowercase letters");
//   var hasUpperCase = confirm("click ok to include uppercase letters");
//   var hasNumbers = confirm("click ok to include numbers");
//   var passwordOptions = {
//     hasSpecialCharacters: hasSpecialCharacters,
//     hasLowerCase: hasLowerCase,
//     hasUpperCase: hasUpperCase,
//     hasNumbers: hasNumbers,
//     length: length,
//   };

//   return passwordOptions;
// }
