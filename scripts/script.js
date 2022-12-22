// References:
/* Browser character set: http://www.net-comber.com/charset.html */ 

// Assignment code 
  // The user will be prompted with a series of prompts for password requirements.
  // Prompt the user to pick a number within a range between 8 and 128 characters. (x >= 8 && x <= 128)
  // Prompt the user to select a criteria for example: numbers, uppercase, lowercase, and special characters using the Window confirm() method.
  // Validate user input and at least one character type is selected.
  // After answering all the prompts, a password should be generated in a alert or written directly to the page that the user can copy.


// Targets the button element in HTML
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button or to the button element
// User selects the button and calls the generatePassword() function
generateBtn.addEventListener("click", writePassword);

// Declare string with characters to include in password generator
var numberChar = "0123456789";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "!@#$%^&*()";
var totalChar = []; 

// Convert strings into an Array.
var numberArr = numberChar.split('');
var upperCharArr = upperChar.split('');
var lowerCharArr = lowerChar.split('');
var specialCharArr = specialChar.split(''); 


/* Calls the generatePassword() function and stores data into password variable 
and sets/returns the value. */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
    var userInput = prompt("Pick a number from 8 and up to 128 to specify length of password.");
    if (userInput >= 8 && userInput <= 128) {
     /* Prompts user for password requirements here if condition is TRUE */ 

    if (confirm("Include Numbers?")) {
      totalChar = totalChar.concat(numberArr);
    }

    if (confirm("Include Uppercase?")) {
      totalChar = totalChar.concat(upperCharArr);
    }

    if (confirm("Include Lowercase?")) {
      totalChar = totalChar.concat(lowerCharArr);
    }

    if (confirm("Include Special Characters?")) {
      totalChar = totalChar.concat(specialCharArr);
    }
    return totalChar; 

  }


  else {
    /* If the user selects a number not within the specified range, 
    it will call the generatePassword() function 
    again to prompt user until condition is met. */
    alert("The number does NOT fall within in range. Please try again.");
    generatePassword();
  }

}
