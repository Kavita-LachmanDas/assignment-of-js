

// 1. Write a function that displays current date & time in your 
// browser.

function currentDate (){
    var date = new Date();
    document.write(date);
    
}

currentDate()



// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.




function input(){
    var firstName = prompt("enter your first name..");
    var lastName = prompt("enter ypur last name..");
    alert(`hello ${firstName +" "+ lastName} I hope you are doing well!!!`)
}

input()

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.


function sum(){
  var Num1 = parseInt(prompt("enter first number"));
  var Num2 = parseInt(prompt("enter second number then i will add it"));
var result = Num1 + Num2
  alert(`first Number is ${Num1} \n Second Number is ${Num2} \n sum is ${result}`)
}


sum()



// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.



function Calculator(num1, num2 , operator){
   num1 = parseInt(prompt("enter first number"));
    num2 = parseInt(prompt("enter second number "));
     operator = prompt("choose operator \n addition \n subtraction \n multiplication \n division \n exponential \n modulus");
  
    if(operator == "addition"  ){
        parseInt(  document.write( num1 + num2))
    }
else  if(operator == "subtraction"  ){
    document.write("Result: " +num1 - num2)
}
else  if(operator == "division"  ){
    document.write("Result: " +num1 / num2)
}
else  if(operator == "multiplication"  ){
    document.write("Result: "+num1 * num2)
}
else  if(operator == "exponential"  ){
    document.write("Result: "+ num1 ** num2)
}
else  if(operator == "modulus"  ){
    document.write("Result: "+num1 % num2)
}

else {
    document.write("Invalid operator selected.");
}
}

Calculator()



// 5. Write a function that squares its argument.

function square() {
    var number = parseInt(prompt("Enter a number to square:"));
    var result = number * number; 
    alert("Square of your entered number is: " + result);
}

square();


// 6. Write a function that computes factorial of a number.

function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i; 
    }
    return result;
}


let number = parseInt(prompt("Enter a number to find its factorial:"));
alert("The factorial of " + number + " is: " + factorial(number));


// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.


function counting(){
    var Num3 = parseInt(prompt("enter start number"));
    var Num4 = parseInt(prompt("enter end number"));



    for(var i = Num3 ; i <= Num4 ; i++){
      document.write(i + "<br>")
    }
    
}
console.log(counting());




// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


function calculateHypotenuse() {
    var base = parseInt(prompt("Enter base number:"));
    var perpendicular = parseInt(prompt("Enter perpendicular number:"));

    // Inner function to calculate the square of a number
    function calculateSquare(num) {
        return num * num; // Return the square of the number
    }

    // Calculate squares using the inner function
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);

    // Calculate hypotenuse using Pythagorean theorem
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare); // Take the square root

    alert("The hypotenuse of the triangle is: " + hypotenuse);
}

calculateHypotenuse();







// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


function rectangle(width, height) {
    return width * height; // Calculate the area
}


console.log("Area with values: " + rectangle(2, 3)); 


var width = 4; 
var height = 5; 
console.log("Area with variables: " + rectangle(width, height)); 




// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam




function isPalindrome(str) {
   
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
 
    var reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}


console.log(isPalindrome("madam"));
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("hello")); 





// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
function capitalizeFirstLetter(str) {
    var words = str.split(' '); 
    var capitalizedWords = []; 

    for (var i = 0; i < words.length; i++) {
        capitalizedWords[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize
    }

    return capitalizedWords.join(' '); 
}


console.log(capitalizeFirstLetter('the quick brown fox')); 









// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'





function findLongestWord(str) {
    var longestWord = '';
    var words = str.split(' '); 

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; 
        }
    }

    return longestWord;
}


console.log(findLongestWord('Web Development Tutorial')); 






// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// function | JAVASCRIPT

// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'


function countLetterOccurrences(str, letter) {
    var count = 0; 


    for (var i = 0; i < str.length; i++) {
        
        if (str[i] === letter) {
            count++; 
        }
    }

    return count; 
}


var result = countLetterOccurrences('JSResourceS.com', 'o');
console.log(result); 





// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2


function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius; 
    console.log("The circumference is " + circumference.toFixed(2)); 
}

function calcArea(radius) {
    var area = Math.PI * radius * radius; 
    console.log("The area is " + area.toFixed(2)); 
}


var radius = 5; 
calcCircumference(radius); 
calcArea(radius); 

