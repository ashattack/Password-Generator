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
    characterCount = parseInt(prompt("How long do you want your password to be? Please enter a number.")) || "floof";

    // Creating an if statement if user doesnt input allowed character amount
    if (characterCount === null) {
      alert("Where is your answer?");
    } else if (characterCount < 8) {
      alert("Malfunction! Password too short!");
    } else if (characterCount > 128) {
      alert("How will you ever remember this? Enter a shorter password immediately.");
    };

    console.log(characterCount);
  }

  var allGood = false;
  while (!allGood) {
    //user confirms
    var confirmNumbers = confirm("Do you wish to have numbers in your very random password?");
    var confirmSpecialCharacters = confirm("Do you wish to have espically special characters in your very random password?");
    var confirmUpperCase = confirm("Do you wish to have uppercase letters in your very random password?");
    var confirmLowerCase = confirm("Do you wish to have lowercase in your very random password?");

    var brains = [confirmNumbers, confirmSpecialCharacters , confirmUpperCase, confirmLowerCase]

    // If user accepts all confirms 
    if (brains.some(Boolean)) {
      // options = specialCharacters.concat(numbers, specialCharacters, letters, uppers);

      if (confirmNumbers)
        options = options.concat(numbers);

      if (confirmSpecialCharacters)
        options = options.concat(specialCharacters);

      if (confirmUpperCase)
        options = options.concat(uppers);

      if (confirmLowerCase)
        options = options.concat(letters);

      console.log("options", options);
      allGood = true;
    } else {
      //If user does not pick any confirms 
      alert("Please say OK to at least one, come on now.");
    }
  }

  var password = "";
  for (var i = 0; i < characterCount; i++) {
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
