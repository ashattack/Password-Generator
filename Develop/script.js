// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)



// Write password to the #password input
function generatePassword(characterCount, numbers, specialCharacters, upperCase, lowerCase) {
  return "password"
}

function writePassword() {
  
  var characterCount = prompt("How many characters do you want your password to be");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm("Do you want special characters in your password?");
  var upperCase = confirm("Do you want upper case in your password?");
  var lowerCase = confirm("Do you want lower case in your password?");
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
