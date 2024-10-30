



// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name. 



var input1 = prompt("enter your first name")
var input2 = prompt("enter your last name")

alert(" Hello "+input1 + " " + input2 + " i hope you are doing well")


// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser 

var input3 = prompt("which is your favorite mobile phone model ?");

document.write(`My favorite mobile phone ${input3} length of string is ${input3.length}`)

document.write("</br>" , "</br>")


// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser .


var fintIndex = "pakistani";
var find = fintIndex.indexOf("n")
document.write(` String : ${fintIndex} \n Find IndexOf 'n': ${find}`)

document.write("</br>" , "</br>")

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser. 

var hello = "Hello World";
var LastIndex = hello.lastIndexOf("l");
document.write(`String ${hello} \n lastIndexOf 'l' : ${LastIndex}`)


document.write("</br>" , "</br>")


// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser. 



var fintChar = "pakistani";
var char = fintChar.charAt(3)

document.write(`String ${fintChar} \n  Character at index 3 : ${char}`)



document.write("</br>" , "</br>")

// 6. Repeat Q1 using string concat() method. 



var input1 = prompt("enter your first name")
var input2 = prompt("enter your last name")

var concat = input1.concat(input2);
alert(" Hello " + concat + " i hope you are doing well")


document.write("</br>" , "</br>")

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser. 



var city = "Hyderabad";
var replace = city.replace("Hyder","Islam")
document.write(replace)


document.write("</br>" , "</br>")


// 8. Write a program to replace all occurrences of “and” in the 
// string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”; 

var message = "Ali and Sami are best friends. They play cricket and football together."; 

var replace = message.replace( /and/gi , "&")
document.write(replace)

document.write("</br>" , "</br>")

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser. 



var string = "472";
var value = parseInt("472")



document.write(`Value : ${string} </br> Type : ${typeof string} </br> Value : ${value} </br> Type: ${typeof value}`)



document.write("</br>" , "</br>")


// 10. Write a program that takes user input. Convert and 
// show the input in capital letters.



var str = prompt("write a word.. i will convert your written word into capital letters")

alert(str.toUpperCase())

document.write(`User Input : ${str} </br> Upper Case : ${str.toUpperCase()}`)




document.write("</br>" , "</br>")

// 11. 
// Write a program that takes user input. Convert and 
// show the input in title case.

var str1 = prompt("write a word.. i will convert your written word into Tital Case")

var titleCse = str1.charAt(0).toUpperCase() + str1.slice(1).toLowerCase()

alert(titleCse)


document.write(`User Input : ${str1} </br> Title Case : ${titleCse}`)


document.write("</br>" , "</br>")


// var num = 35.36 ; 
// 12. Write a program that converts the variable num to 
// string. 
// Remove the dot to display “3536” display in your browser.


var num = 35.36 ; 
var Tostring = num.toString().replace(".","");

document.write(`Number: ${num} </br> Result : ${Tostring}`)








// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 
// Note: 
// ASCII code of ! is 33 
// ASCII code of , is 44 
// ASCII code of . is 46 
// ASCII code of @ is 64 
var iinput = prompt("Write your username");
var username = iinput;
var acci = [33, 44, 46, 64]; // ASCII codes for '!', ',', '.', '@'
var isValid = true;

// Loop through each character of the username
for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i); // Get the ASCII code of the current character
    
    // Loop through the ASCII codes array to check for special symbols
    for (var j = 0; j < acci.length; j++) {
        if (charCode === acci[j]) {
            isValid = false;
            break;
        }
    }
}

// If username contains any special symbols, ask the user to enter a valid username
if (!isValid) {
    alert("Please enter a valid username without special characters (@ , . !)");
} else {
    alert("Username is valid: " + username);
}







// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long 
// If the password does not meet above requirements, 
// prompt the user to enter a valid password. 
// For character codes of a-z, A-Z & 0-9, refer to ASCII 
// table at the end of this document. 





var takePassword = prompt("Enter your password");
var hasLetter = false;
var hasNumber = false;
var firstCharCode = takePassword.charCodeAt(0);

// Check if the password is at least 6 characters long
if (takePassword.length < 6) {
    alert("Password is too short, it must be at least 6 characters.");
} 

// Check if the first character is a number
else if (firstCharCode >= 48 && firstCharCode <= 57) {
    alert("Do not use a number at the beginning of the password.");
} 

// Now, check for letters and numbers in the password
else {
    for (var i = 0; i < takePassword.length; i++) {
        var charcode = takePassword.charCodeAt(i);

        // Check if it's a letter
        if ((charcode >= 65 && charcode <= 90) || (charcode >= 97 && charcode <= 122)) {
            hasLetter = true;
        }
        
        // Check if it's a number
        if (charcode >= 48 && charcode <= 57) {
            hasNumber = true;
        }
    }

    // After the loop, check if both letters and numbers are found
    if (!hasLetter || !hasNumber) {
        alert("Password must contain both letters and numbers.");
    } else {
        alert("Password is valid.");
    }
}



// 16. Write a program to convert the following string to an 
// array using string split method. 
// var university = “University of Karachi”; 
// Display the elements of array in your browser. 
var university = "University of Karachi";

var uni = university.split("")

for(var i = 0; i < uni.length; i++){
    document.write(uni[i]+"</br>")
}






// 17. Write a program to display the last character of a user 
// input. 


var write = prompt("write any word i will display last character okyyyy")

document.write(`User Input : ${write} </br> last character of input: ${write.charAt(write.length-1)}`)


// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.



var string = "The quick brown fox jumps over the lazy dog";

// Convert the string to lowercase to make the comparison case-insensitive
var lowerCaseString = string.toLowerCase();

// Split the string into an array of words using space as a delimiter
var words = lowerCaseString.split(" ");

// Initialize a counter for occurrences of the word "the"
var count = 0;

// Loop through the array and count occurrences of "the"
for (var i = 0; i < words.length; i++) {
    if (words[i] === "the") {
        count++; // Increment the counter if the word is "the"
    }
}

// Display the result in the browser
document.write("The word 'the' occurs " + count + " times.");

// split method 
// split() method tumhein koi bhi string todne ki flexibility deta hai,
//  bas tumhe batana hota hai ke tum kis jagah (delimiter) par todna chahti ho. 
// For example, words mein todne ke liye space,
//  sentences mein todne ke liye comma,
//  ya har character ko todne ke liye empty string.



