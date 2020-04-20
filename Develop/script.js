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
console.log("hello");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
