
// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122). 


var character  = "P";
var character_ASCII = character.charCodeAt(0);

if(character_ASCII >= 65 && character_ASCII <= 90){
    document.write(`this is upperCase letter ${character}`)
}
else 
if(character_ASCII >= 97 && character_ASCII <= 122){
    document.write(`this is lowerCase letter ${character}`)
}
else
if(character_ASCII >= 48 && character_ASCII <= 57){
    document.write(`this is number ${character}`)
}
else{
    document.write(`not a charactter`)
}

document.write("</br>")
// 2. Write a JavaScript program that accept two integers and 
// display the larger. Also show if the two integers are equal.


var int1 = 2;
var int2 = 5;

if(int1 < int2){
  document.write(`The larger number is: ${int2}`);
}
else if(int1 === int2){
  document.write("Both are equal");
}
else {
  document.write(`The larger number is: ${int1}`);
}

document.write("</br>")
// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero.


var userInput = +prompt("write a number whether the number is positive, negative or zero")

if(userInput > 0){
   document.write("The Number is Positive")
}
else if(userInput < 0){
    document.write("The Number is Negative")
 }
else if(userInput == 0){
    document.write("The Number is Zero")
}
else{
    document.write("plz enter a vallid number")
};

document.write("</br>");

// 4. Write a program that takes a character (i.e. string of 
//     length 1) and returns true if it is a vowel, false otherwise

var input = prompt("Write one character (alphabet)").toLowerCase();

if(input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
  document.write(true);
} else {
  document.write(false);
}


// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. 
// Check if user has entered password. If not, then 
// give message “ Please enter your password” 
// ii. 
// Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise. 






var password = "12345678";

var user = prompt("enter the correct password")

if(user === ""){
    alert(" Please enter your password")
}
else
if(user === password){
    alert("Correct! The password you  entered matches the original password")
}
else{
    alert(" Incorrect password")
}

document.write("</br>")


// 6. This if/else statement does not work. Try to fix it: 
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; 
// else 
// greeting = "Good evening"; 
// } 


var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day"; 
document.write(greeting);
}
else {
greeting = "Good evening"; 
document.write(greeting);
} 

document.write("</br>")




// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements 



var time = +prompt("enter the current time i will convert in clock format pm and am ");

// var time = 1900;

if((time >= "0000") && (time< 1200)){
    document.write("Good Morning")
}
else if((time >= 1200) && (time<= 1700)){
  document.write("Good Afternoon")
}
else if((time >= 1700) && (time<= 2100)){
  document.write("Good Evening")
}
else if((time >= 2100) && (time<= 2359)){
  document.write("Good Night")
}else {
  document.write("Invalid time entered!");
}