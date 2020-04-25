/*
    1. Add a button to HTML - DONE!
    2. When button clicked it will create a prompt that allows user to choose which criteria they want - DONE!
        - Ask for length (number of characters) DONE!
        - Character types - DONE!
            - Uppercase - DONE!
            - Lowercase - DONE!
            - Numeric - DONE!
            - Special characters ($!%) - DONE!
    3. Validate user input and let the user know if it is valid - DONE!
    4. Generate the password - DONE!
    5. Show the password - DONE!
    6. Add styling to your elements
    7. Make it responsive (should look good on all screen sizes)
*/
// 2. When button clicked it will create a prompt that allows user to choose which criteria they want
// 2a. add an onclick handler to button
// 2b. create function to start prompting user
function promptForPassword() {
  let isUppercase = false,
    isLowercase = false,
    isNumeric = false,
    isSpecialChar = false;
  let isOneCharTypeSelected =
    isUppercase || isLowercase || isNumeric || isSpecialChar;
  let userInput = prompt(
    "How many characters should the password be? Enter a number between 8 and 128"
  );
  let numCharacters = parseInt(userInput); // convert the string into a number type
  // don't need to use let since the userInput is already declared
  // validate that at least one character type has been selected
  while (!isOneCharTypeSelected) {
    userInput = prompt(
      "Would you like your password to have Uppercase characters? Answer yes or no"
    );
    isUppercase = userInput === "yes"; // convert userInput to a boolean
    userInput = prompt(
      "Would you like your password to have Lowercase characters? Answer yes or no"
    );
    isLowercase = userInput === "yes";
    userInput = prompt(
      "Would you like your password to have Numeric characters? Answer yes or no"
    );
    isNumeric = userInput === "yes";
    userInput = prompt(
      "Would you like your password to have Special characters? Answer yes or no"
    );
    isSpecialChar = userInput === "yes";
    // check if at least one character type is selected
    isOneCharTypeSelected =
      isUppercase || isLowercase || isNumeric || isSpecialChar;
    if (!isOneCharTypeSelected) {
      alert("You need to enter at least one character type");
    }
  }
  let lowercase = ["a", "b", "c"];
  let uppercase = ["A", "B", "C"];
  let specialChar = ["$", "!", "%"];
  let numbers = [1, 2, 3];
  let characterTypes = [];
  if (isUppercase) {
    characterTypes.push(uppercase);
  }
  if (isLowercase) {
    characterTypes.push(lowercase);
  }
  if (isNumeric) {
    characterTypes.push(numbers);
  }
  if (isSpecialChar) {
    characterTypes.push(specialChar);
  }
  let password = generatePassword(numCharacters, characterTypes);
  // get the password element
  let passwordNode = document.getElementById("password");
  // update the value of the element
  passwordNode.innerHTML = password;
}
// 2c. connect function to onclick handler
function generatePassword(num, arr) {
  let possibilityIndex = 0;
  let password = "";
  let targetArray = [];
  for (let i = 0; i < num; i++) {
    targetArray = arr[possibilityIndex];
    possibilityIndex++;
    password += targetArray[Math.floor(Math.random() * targetArray.length)];
    if (possibilityIndex == arr.length) {
      possibilityIndex = 0;
    }
  }
  return password;
}
