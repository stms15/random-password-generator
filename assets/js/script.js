// Assignment Code
var generateBtn = document.querySelector("#generate");


// Validate the criteria data
function validateCriteria(len, types) {
  var checkTypes = function(type) {
    if (type === "false" || type === "" || type === "no"){
      return true;
    } else {
      return false;
    }
  }
  if (len < 8 || len > 128 || len == null){
    alert("Invalid password length - must be between 8 and 128 characters. Please try again.");
    return false;
  } else if (types.every(checkTypes)) {
    alert("At least one set of characters has to be selected. Please try again.")
    return false;
  } else if (!types.includes("true")){
    alert('Invalid input for character selection. Please type "true" or "false" for each choice.');
    return false;
  } else {
    return true;
  }
}


// Generate a random password based on the criteria
function generatePassword() {
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChars = "!@#$%^&*()-_+=?/{}";

  var passwordLen = prompt("Please enter the number of characters to use between 8 and 128");
  var includeLower = prompt("Do you want to inlcude lower case characters? (Ex: a, b...)\n" + "Enter: true/false");
  var includeUpper = prompt("Do you want to inlcude lower case characters? (Ex: A, B...)\n" + "Enter: true/false");
  var includeNums = prompt("Do you want to inlcude lower case characters? (Ex: 1, 2...)\n" + "Enter: true/false");
  var includeSpecial = prompt("Do you want to inlcude lower case characters? (Ex: @, #...)\n" + "Enter: true/false");

  var characterTypes = [includeLower, includeUpper, includeNums, includeSpecial];
  var valid = validateCriteria(passwordLen, characterTypes);
  
  var selection = "";
  if (characterTypes[0] == "true") {
    selection = selection + lowerChars;
  }
  if (characterTypes[1] == "true") {
    selection = selection + upperChars;
  }
  if (characterTypes[2] == "true") {
    selection = selection + numbers;
  }
  if (characterTypes[3] == "true") {
    selection = selection + specialChars;
  }

  var password = "";
  if (valid) {
    for (let j=0; j<passwordLen; j++) {
      randomNum = Math.floor(Math.random() * selection.length);
      password = password + selection[randomNum];
    }
    return password;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
