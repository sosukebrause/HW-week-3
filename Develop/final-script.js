var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var password = generatePassword();
  if (password != undefined) {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}
function generatePassword() {
  var newOption = getPasswordOptions();
  var character = [];
  console.log(newOption);
  let validCharacters = "";
  if (newOption.hasUpperCase) {
    validCharacters += upperCase;
  }
  console.log(validCharacters);

  if (newOption.hasLowerCase) {
    validCharacters += lowerCase;
  }
  console.log(validCharacters);
  if (newOption.hasNumbers) {
    validCharacters += numbers;
  }
  if (newOption.hasSpecialCharacters) {
    validCharacters += specialCharacters;
  }
  console.log(validCharacters);

  for (let n = 0; n < newOption.length; n++) {
    character.push(
      validCharacters[Math.floor(Math.random() * newOption.length - 1)]
    );
  }

  return character.join("");
}
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCEDFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*_-/+?";
var allCharacters = lowerCase + upperCase + numbers + specialCharacters;
console.log(allCharacters.length);

function getPasswordOptions() {
  var length = prompt("Enter the desired character length numerically");

  if (length > 128 || length < 8) {
    alert("Number of characters must be more than 8 and less than 128");
    return;
  }
  if (isNaN(length) === true) {
    alert("Must provide number for length");
    return;
  }
  var hasUpperCase = confirm(
    "Click Ok or Cancel to include or exclude Upper Case Letters"
  );
  var hasLowerCase = confirm(
    "Click Ok or Cancel to include or exclude Lower Case Letters"
  );
  var hasNumbers = confirm("Click Ok or Cancel to include or exclude numbers");
  var hasSpecialCharacters = confirm(
    "Click Ok or Cancel to include or exclude Special Characters"
  );
  var passwordOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters,
  };
  return passwordOptions;
}
