// Assignment Code
var generateBtn = document.querySelector("#generate");

function Prompts() {
  // Collect password criteria from the user
  var length = parseInt(prompt("Enter the length of the password (8-128):"));

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be a number between 8 and 128 characters.");
    return null;
  }

  var hasLowerCase = confirm("Include lowercase letters?");
  var hasUpperCase = confirm("Include uppercase letters?");
  var hasNumbers = confirm("Include numbers?");
  var hasSpecialCharacters = confirm("Include special characters?");

  if (!hasLowerCase && !hasUpperCase && !hasNumbers && !hasSpecialCharacters) {
    alert("At least one character type should be selected.");
    return null;
  }

  return {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSpecialCharacters: hasSpecialCharacters
  };
}

function generatePassword() {
  var options = Prompts();
  if (!options) return "";

  var lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numberChars = '0123456789';
  var specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  var allChars = '';
  if (options.hasLowerCase) allChars += lowerCaseChars;
  if (options.hasUpperCase) allChars += upperCaseChars;
  if (options.hasNumbers) allChars += numberChars;
  if (options.hasSpecialCharacters) allChars += specialChars;

  var password = '';
  for (var i = 0; i < options.length; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
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
