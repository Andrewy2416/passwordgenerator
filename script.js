//Base password length
var characterLength = 8;

//Concatanted var to place values in
var choiceArr = [];

//Arrays for password generator
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')','?','~','/','|',':','>','<','"',];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0',];






// Assignment code here



var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
    var correctPrompts = getPrompts(); 
    var passwordText = document.querySelector("#password");

    if(correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
   } else {
        passwordText.value = "";
    }

//Randomizer
function generatePassword() {

  var password = "";
  for(var i = 0; i < characterLength; i++) {
      var randomIndex = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[randomIndex]
  }

  return password;


}

//User Prompts
function getPrompts(){
    choiceArr = [];
    characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));
    
    //Making sure user chooses between 8 and 128 characters
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Your Character Length has to be a number that falls between 8 - 128. Please try again")
        return false;
    }    
    
    //IF statements for user preference
    //Lower Case 
    if (confirm("Would you like lowercase letters in your password")) {
      choiceArr = choiceArr.concat(lowerCaseArr);

    }
    //Upper Case
    if (confirm("Would you like uppercase letters in your password")) {
      choiceArr = choiceArr.concat(upperCaseArr);

    }
    //Special Characters
    if (confirm("Would you like special characters in your password")) {
      choiceArr = choiceArr.concat(specialCharArr);

    }
    //Numbers
    if (confirm("Would you like numbers in your password")) {
      choiceArr = choiceArr.concat(numberArr);

    }
    return true;



}

}