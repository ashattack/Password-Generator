var characterCount;
var numbers;
var specialCharacters;

//arrays
//Special Characters 
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "?", ">", "<"];

//Numbers 
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//letters 
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var options;

//Uppercase Conversion
space = [];
var upLetters = function (x) {
  return x.toUpperCase();
};
uppers = letters.map(upLetters);


var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click,", function () {
  pass = generatePassword();
  document.getElementById("password").placeholder = pass;
});



function isGoodNumber(userNumber) {
  if (typeof userNumber != "number") {
    return false;
  } else if (userNumber < 8 || userNumber > 128) {
    return false;
  } else {
    return true;
  }
}


// function for generating password
function generatePassword() {

  var options = [];
  //Asks user 
  var characterCount = "floof"
  while (!isGoodNumber(characterCount)) {
    characterCount = parseInt(prompt("How many characters do you want your password to be?")) || "floof";

    // Creating an if statement if user doesnt input allowed character amount
    if (characterCount === null) {
      alert("Please input a number");
    } else if (characterCount < 8) {
      alert("Password too short! Please input a number greater than 8.");
    } else if (characterCount > 128) {
      alert("Password too long! Please shorten to less than 128 characters.");
    };

    console.log(characterCount);
  }

  var allGood = false;
  while (!allGood) {
    //user confirms
    var confirmNumbers = confirm("Do you want numbers in your password?");
    var confirmSpecialCharacters = confirm("Do you want special characters in your password?");
    var confirmUpperCase = confirm("Do you want upper case in your password?");
    var confirmLowerCase = confirm("Do you want lower case in your password?");

    //If user does not pick any confirms 
    if (confirmNumbers || confirmSpecialCharacters || confirmUpperCase || confirmLowerCase) {
      alert("You must accept at least one.");

      // If user accepts all confirms 
    } else if (confirmNumbers && confirmSpecialCharacters && confirmUpperCase && confirmLowerCase) {
      options = specialCharacters.concat(numbers, specialCharacters, letters, uppers);
      allGood = true;
      console.log(specialCharacters);
    }
  }
var password = "";
for (var i = 0; i < characterCount; i++){
  var item = options[Math.floor(Math.random() * options.length)]
  password += item
}

  
console.log(options);
console.log(password);
return password;


}

function writePassword() {
  //parseInt makes the computer look for an integer


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
