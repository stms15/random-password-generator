// Assignment Code
var generateBtn = document.querySelector("#generate");

// Validate the criteria data
function validateCriteria(len, types) {
  if (len < 8 || len > 128 || len == null){
    alert("Invalid password length - must be between 8 and 128 characters. Please try again.");
    return false;
  } else if (types == null || types === "") {
    alert("Choose at least one set of characters. Please try again.")
    return false;
  } else if (types.includes("1") == false && types.includes("2") == false && types.includes("3") == false && types.includes("4") == false){
    alert("Invalid character selection - enter the NUMBER associated with the characters to include. Please try again.");
    return false;
  } else{
    return true;
  }
}

// Generate a random password based on the criteria
function generatePassword() {
  var passwordLen = prompt("Please enter the number of characters to use between 8 and 128");
  var characterTypes = prompt("Please enter the NUMBER(S) associated with the types of characters to use, separated by a comma.\n\n" + "1. Lower case (a, b...)\n" + "2. Upper case (A, B...)\n" + "3. Numbers (1, 2...)\n" + "4. Special characters (@, $...)");

  var valid = validateCriteria(passwordLen, characterTypes);
  console.log(valid);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
