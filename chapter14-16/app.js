
// 1. Declare an empty array using JS literal notation to store 
// student names in future.

var empty = [];

// 3. Declare and initialize a strings array. 

var StringsArray = [];
StringsArray = ["kavita", "lachmandas"]

// 4.  Declare and initialize a numbers array. 

var numberArray = [];
numberArray = [1, 2, 3, 4, 5]


// 5.  Declare and initialize a boolean array. 

var booleanArray = [];
booleanArray = [true, false]

// 6. Declare and initialize a mixed array. 

var mixedArrray = [];
mixedArrray = ['Kavita', 18, true]


// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like: 

var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"]
document.write(`<h1>Education</h1> </br> </br> <b> 1)${education[0]} </br> 2)${education[1]}
    </br> 3)${education[2]} </br> 4)${education[3]} </br> 5)${education[4]} </br> 6)${education[5]}
    </br> 7)${education[6]} </br> 8)${education[7]} </b>
    `)




//     8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:




var std = ["kavita", "hania", "dua"];
var score = [480, 450, 300];
var totalMarks = 500;

for (var i = 0; i < std.length; i++) {
    // Calculate percentage for each student
    var percentage = (score[i] / totalMarks) * 100;
    
    // Display score and percentage
    document.write(`Score of ${std[i]} is ${score[i]}. Percentage: ${percentage}%<br>`);
}



// 9. Initialize an array with color names. Display the array 
// elements in your browser. 
// a. Ask the user what color he/she wants to add to the 
// beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 

// d. Delete the first color in the array. Display the updated 
// array in your browser. 
// e. Delete the last color in the array. Display the updated 
// array in your browser. 
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser. 
// g. Ask the user at which index he/she wants to delete 
// color(s) & how many colors he/she wants to delete. Then 
// remove the same number of color(s) from user-defined 
// position/index. . Display the updated array in your 
// browser. 

    document.write("</br>")

var colorName = ["Red","Blue","Purple","Green","Gray"]

var colorInput = prompt("what color you want to add to the begining?? ")


colorName.unshift(colorInput)

alert("color added succesfully")
alert(colorName)

document.write("</br>")
var colorName = ["Red","Blue","Purple","Green","Gray"]

var colorInput = prompt("what color you want to add to the end?? ")


colorName.push(colorInput)

alert("color added succesfully")
alert(colorName)
document.write("</br>")


colorName.unshift("yellow","Black")

document.write(colorName)

document.write("</br>")

colorName.shift()
document.write(colorName)

document.write("</br>")
colorName.pop()
document.write(colorName)

document.write("</br>")

var userr = prompt("at which index you want to add a color?")

colorName.slice(userr)

document.write(colorName)

document.write("</br>")


var hello = prompt("at which index you want to delete color(s)??")
var hi = prompt("how many colors you want to delete?.")

colorName.splice(hello,hi)

document.write(colorName)

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.


// //Desending order
// var scores = [480, 450, 300];

// scores.sort(function(a, b) {
//     return a - b; // Jitna chota number, utna pehle aayega
// });

// console.log(scores); // Output: [300, 450, 480]

// Ascending order
// var numbers = [30, 2, 10];
// numbers.sort(function(a, b) {
//     return a - b; // Ascending order
// });
// console.log(numbers); // Output: [2, 10, 30]


var Scoress = [320,230,480,120];

var Ascending = Scoress.sort()



document.write(`Scores of students: ${Scoress} </br> ordered scores of students: ${Ascending} `)



// 11. 
// Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array. 


var cities = ["Karachi","Hyderabad","Thattaa","Quetta","Hunza"]

var selectedCities = cities.slice(2,4)

document.write(`Cities List: </br> ${cities} </br> Selected Cities List: </br> ${selectedCities}`)


// 12.  Write a program to create a single string from the 
// below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 


var arr = ["This", "is", "my",  "cat"]; 

var dc = arr.join(" ")
document.write(`<h1>Array:</h1></br>${arr} </br> <h1>String:</h1></br> ${dc}`)


document.write("</br>")

// 13. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)


var devices = ["Keyboard","Mouse","Printer","Monitor"]



for(var i =0;i<=devices.length-1;i++){
    document.write(` Out </br> ${devices[i]} </br> `)
}


document.write("</br>")
document.write("</br>")



// 14. Create a new array. Store values one by one in such a way 
// that you can access the values in reverse order. (Last In
// First Out) 


var devices = ["Keyboard","Mouse","Printer","Monitor"]

devices.reverse()


for(var i =0;i<=devices.length-1;i++){
    document.write(` Out </br> ${devices[i]} </br> `)
}




// 15. Write a program to store phone manufacturers (Apple, 
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method: 


var phone_manufacture = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.write(`<select>`);

for(var i = 0; i <=phone_manufacture.length-1;i++){
    document.write(`<option> ${phone_manufacture[i]} </option>`)
}

document.write(`</select>`);