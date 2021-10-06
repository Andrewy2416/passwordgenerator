var characterLength = 8;
var choiceArray = [];

var specialCharArray = ['!','@','#','$','%','^','&','*','(',')','?','~','/','|',':','>','<','"',];
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArray = ['1','2','3','4','5','6','7','8','9','0',];






// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {


}


function getPrompts(){
  choiceArray = [];
    characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Your Character Length has to be a number that falls between 8 - 128. Please try again")
        return false;
    }    

    if (confirm("Would you like lowercase letters in your password")) {
      choiceArr = choiceArray.concat(lowerCaseArray);

    }

    if (confirm("Would you like uppercase letters in your password")) {
      choiceArr = choiceArray.concat(upperCaseArray);

    }

    if (confirm("Would you like special characters in your password")) {
      choiceArr = choiceArray.concat(specialCharArray);

    }

    if (confirm("Would you like numbers in your password")) {
      choiceArr = choiceArray.concat(numberArray);

    }
    return true;



}


