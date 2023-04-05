// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("generatePassword called because of click on generateBtn");

  let intendedChars = '';
  let genPassword = ''
  let passLen = 0;
  let lower, upper, num, special = false;
  let index = 0;
  let randomChar = '';

  passLen = prompt("Enter passlength between 8 - 128");

  // validate passLen 
  passLen = parseInt(passLen);
  if (!isNaN(passLen) && passLen >= 8 && passLen <= 128) {
    alert("your chosen passwordLength is = " + passLen);

    lower = confirm("Press OK to include lower case characters in the password");
    if (lower) {
      intendedChars += "abcdefghijklmnopqrstuvwxyz";
    }

    upper = confirm("Press OK to include upper case characters in the password");
    if (upper) {
      intendedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    special = confirm("Press OK to include special characters in the password");
    if (special) {
      intendedChars += "!@#$%^&*()_+{}|:<>?";
    }

    num = confirm("Press OK to include numbers in the password");
    if (num) {
      intendedChars  += "0123456789";
    }
    console.log("intended Characters= ", intendedChars);

    if (lower === true || upper === true || num === true || special === true) {

    }
    else {
      alert ("Atleaset one character type should be chosen for password to be  geneerated. Please retry")
    }
  } else {
    alert("Password length must be a number between 8 and 128 ( both inclusive). Please retry");
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
