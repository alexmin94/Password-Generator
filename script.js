// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("generatePassword called because of click on generateBtn");

  var intendedChars = '';
  var genPassword = ''
  var passLen = 0;
  var lower, upper, num, special = false;
  var index = 0;
  var randomChar = '';

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
      intendedChars += "0123456789";
    }
    console.log("intended Characters= ", intendedChars);

    if (lower === true || upper === true || num === true || special === true) {

      //  here : all inputs got , all inputs validated to be okay.
      // So generate password according to user criteria
      for (var i = 0; i < passLen; i++) {
        index = Math.floor(Math.random() * intendedChars.length);
        console.log("index = ", index);
        randomChar = intendedChars[index];
        console.log("randomChar = ", randomChar);

        genPassword = genPassword + randomChar;
      }
      return genPassword;
    }
    else {
      alert("Atleaset one character type should be chosen for password to be  geneerated. Please retry")
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
