// Assignment Code
var generateBtn = document.querySelector("#generate");

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

  // If user clicks "cancel", stop function
  if (passwordLength === null) {
    return "Your Secure Password";
  }

  // *** User is prompted to select one/many of: lowercase, uppercase, numeric and special characters
  // Error check if at least 1 is selected
  var requiresLowercase = false;
  var requiresUppercase = false;
  var requiresNumbers = false;
  var requiresSpecialCharacters = false;

  while ((requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters) == 0) {

    requiresLowercase = confirm("Would you like your password to contain: lowercase? (ex. a, b, c etc.)");

    requiresUppercase = confirm("Would you like your password to contain: uppercase? (ex. A, B, C etc.)");

    requiresNumbers = confirm("Would you like your password to contain: numbers? (ex. 1, 2, 3 etc.)");
 
    requiresSpecialCharacters = confirm("Would you like your password to contain: special characters? (ex. #, @, % etc.)");
  
    if ((requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters) == 0) {
      alert("Oops! You must select at least one character criteria.")
    }

  }

  // *** Generate required arrays based on user criteria
  if (requiresLowercase) {
    lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  if (requiresUppercase) {
    uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }
  if (requiresNumbers) {
    numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  if (requiresSpecialCharacters) {
    specialCharacterArray = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`' , '{' , '|' , '}' , '~'];
  }

  // *** String generation
  var hasLowercase = false;
  var hasUppercase = false;
  var hasNumbers = false;
  var hasSpecialCharacters = false;
  var passwordString = "";


  while (passwordString.length < passwordLength) {
    charChoice = Math.ceil(Math.random() * 4);

    if ((charChoice == 1) && requiresLowercase) {
      var randLowercase = Math.floor(lowercaseArray.length * Math.random());
      passwordString += lowercaseArray[randLowercase];
      hasLowercase = true;

    } else if ((charChoice == 2) && requiresUppercase) {
      var randUppercase = Math.floor(uppercaseArray.length * Math.random());
      passwordString += uppercaseArray[randUppercase];
      hasUppercase = true;

    } else if ((charChoice == 3) && requiresNumbers) {
      var randNumber = Math.floor(numberArray.length * Math.random());
      passwordString += numberArray[randNumber];
      hasNumbers = true;

    } else if ((charChoice == 4) && requiresSpecialCharacters) {
      var randSpecialCharacter = Math.floor(specialCharacterArray.length * Math.random());
      passwordString += specialCharacterArray[randSpecialCharacter];
      hasSpecialCharacters = true;

    }

    // *** Check to see if all required characer types are being used
    charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;
    if (charTypeCount >= (passwordLength - passwordString.length)) {

      if ((hasLowercase) && (charTypeCount > 1)) {
        requiresLowercase = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;

      }
      if ((hasUppercase) && (charTypeCount > 1)) {
        requiresUppercase = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;
    
      }
      if ((hasNumbers) && (charTypeCount > 1)) {
        requiresNumbers = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;
    
      }
      if ((hasSpecialCharacters) && (charTypeCount > 1)) {
        requiresSpecialCharacters = false;
        charTypeCount = requiresLowercase + requiresUppercase + requiresNumbers + requiresSpecialCharacters;
    
      }
    }

  }
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
