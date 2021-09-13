// Assignment code here
let generateBtn = document.querySelector("#generate");

var lowercaseEl = "abcdefghijklmnopqrstuvwxyz";
var uppercaseEl = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberEl = "0123456789";
var specialCharEl = "!@#$%^&*()_-+={[}]|:;<>.?/";
let allCharacters = "";

function generatePassword() {
  allCharacters = "";
  let passwordLength = prompt("Please choose password length between 8 characters and 128 characters.");
  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(parseInt(passwordLength))
  ) {
    window.alert(
      "You have entered an invalid length. Please enter a number between 8 and 128."
    );
  } else {
    let lowercasePrompt = window.confirm(
      "Would you like lowercase characters in your password?"
    );
    if (lowercasePrompt) {
      allCharacters += lowercaseEl;
    }
    let uppercasePrompt = window.confirm(
      "Would you like uppercase characters in your password?"
    );
    if (uppercasePrompt) {
      allCharacters += uppercaseEl;
    }
    let numberPrompt = window.confirm(
      "Would you like numbers in your password?"
    );
    if (numberPrompt) {
      allCharacters += numberEl;
    }
    let specialCharPrompt = window.confirm(
      "Would you like special characters in your password?"
    );
    if (specialCharPrompt) {
      allCharacters += specialCharEl;
    }

    if (
      lowercasePrompt === false &&
      uppercasePrompt === false &&
      numberPrompt === false &&
      specialCharPrompt === false
    ) {
      alert("Invalid selection. Please select characters for your password");
      generatePassword();
    }
  }
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += allCharacter.charAt(
      Math.floor(Math.random() * allCharacters.length)
    );
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


