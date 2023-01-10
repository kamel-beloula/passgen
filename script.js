// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var passwordLength = 0
let generatedPassword = ""
let listOfCharacters = ""

// Function to prompt user for password options
function getPasswordOptions() {
  do {
    passwordLength = prompt("Choose the length of your password between 10 and 64")
    if (passwordLength < 10 || passwordLength > 64) {
      alert("Please choose a number between 10 and 64")
    }

  } while (passwordLength < 10 || passwordLength > 64 || passwordLength != parseInt(passwordLength));

  listOfCharacters = ""

  do {

    const lowercase = confirm("Would you like to include Lowercase Characters in you password?")
    const uppercase = confirm("Would you like to include Uppercase Characters in you password?")
    const numeric = confirm("Would you like to include Numeric Characters in you password?")
    const specialChar = confirm("Would you like to include Special Characters in you password? ($@%&*, etc)")

    if (lowercase) {
      listOfCharacters += lowerCasedCharacters.join("")
    }
    if (uppercase) {
      listOfCharacters += upperCasedCharacters.join("")
    }
    if (numeric) {
      listOfCharacters += numericCharacters.join("")
    }
    if (specialChar) {
      listOfCharacters += specialCharacters.join("")
    }

    if (listOfCharacters === "") {
      if (!confirm('You need to choose at least one "Character Type" or click "Cancel" to exit')) {
        return
      }
    }

  } while (listOfCharacters === "");
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);