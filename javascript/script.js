// Assignment Code
var generateBtn = document.querySelector("#generate");
console.log(generateBtn)

// *** User clicks "Generate Password" button




// *** Print password on page (written or alert :) )

// Generate the password
function generatePassword() {
  // *** User is prompted to enter 8-128 characters. 
  // *** Error check if (< 8) || (> 128)

  // Set passwordLength to NaN to initialize below while loop, otherwise it will
  // be "undefined" which meets one of the conditions
  var passwordLength = NaN;

  // Keep prompting the user until they enter a valid input or click "cancel"
  while (
    // Loop continues if user DOESN'T click "Cancel" 
    (passwordLength !== null) &&
    // Loop continues while user keeps entering an invalid number or a string (i.e. NaN due to parseInt())
    ((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128))) {

    // Prompt user to enter password length
    passwordLength = prompt("Please enter the desired length of your password (8-128 characters).", "8");

    // If user did not click "cancel", change string to number
    if (passwordLength !== null) {
      passwordLength = parseInt(passwordLength);
    }

    // If the user returned a value that isn't a number between 8-128 
    // and hasn't clicked "cancel"
    if (((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128))
      && (passwordLength !== null)) {
      alert('Oops! Please enter a number from 8-128 or click "cancel" to exit.')
    }

  }
  console.log(`Password Length = ${passwordLength}`)

  // *** User is prompted to select one/many of: lowercase, uppercase, numeric and special characters
  // Error check if at least 1 is selected
  hasLowercase = confirm("Would you like your password to contain: lowercase? (ex. a, b, c etc.)");
  console.log(`User wants lowercase? ${hasLowercase}`);

  hasUppercase = confirm("Would you like your password to contain: uppercase? (ex. A, B, C etc.)");
  console.log(`User wants uppercase? ${hasUppercase}`);

  hasNumbers = confirm("Would you like your password to contain: numbers? (ex. 1, 2, 3 etc.)");
  console.log(`User wants numbers? ${hasNumbers}`);

  hasSpecialCharacters = confirm("Would you like your password to contain: special characters? (ex. #, @, % etc.)");
  console.log(`User wants uppercase? ${hasSpecialCharacters}`);

  // *** Generate password based on previous criteria
  // *** Loop number of characters from "passwordLength" to array
  // *** Create array of possible characters based on "hasXXXX" variables
  // ***
  // ***
  // ***
  // ***

  return "testpassword123@#";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
