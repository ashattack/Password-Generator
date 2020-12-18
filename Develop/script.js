//arrays
//Special Characters 
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "?", ">", "<"];

//Numbers 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//letters 
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//Uppercase Conversion
space = [];
var upLetters = function (x) {
  return x.toUpperCase();
};
uppers = letters.map(upLetters);


var generateBtn = document.querySelector("#generate");

get.addEventListener("click,", function () { 
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});




// function for generating password
function generatePassword() {
  
  //Asks user 
  var characterCount = parseInt(prompt("How many characters do you want your password to be?"));
  
  // Creating an if statement if user doesnt input allowed character amount
  if (characterCount === null){
    alert("Please input a number");
  } else if (characterCount < 8) {
    characterCount = parseInt(prompt("Password too short! Please input a number greater than 8."));
  } else if (characterCount > 128){
    characterCount = parseInt(prompt("Password too long! Please shorten to less than 128 characters."));
  } else {
    //User confirms 
    var numbers = confirm("Do you want numbers in your password?");
    var specialCharacters = confirm("Do you want special characters in your password?");
    var upperCase = confirm("Do you want upper case in your password?");
    var lowerCase = confirm("Do you want lower case in your password?");
  };
}

function writePassword() {
  //parseInt makes the computer look for an integer
  
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
