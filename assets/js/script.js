// Assignment Code
var generateBtn = document.querySelector("#generate");

// Validate the criteria data
function validateCriteria() {

}

// Generate a random password based on the criteria
function generatePassword() {
  var passwordLen = prompt("Please enter the number of characters to use between 8 and 128");
  var characterTypes = prompt("Please enter the NUMBER(S) associated with the types of characters to use, separated by a comma.\n\n" + "1. Lower case (a, b...)\n" + "2. Upper case (A, B...)\n" + "3. Numbers (1, 2...)\n" + "4. Special characters (@, $...)");

  console.log(passwordLen);
  console.log(characterTypes);

  // validateCriteria(passwordLen, characterTypes);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
