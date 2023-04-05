// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log( "generatePassword called because of click on generateBtn");

  let intendedChars = '';
  let genPassword = ''
  let passLen = 0;
  let lower,upper,num,special = false;
  let index = 0;
  let randomChar = '';

  passLen = prompt("Enter passlength between 8 - 128");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
