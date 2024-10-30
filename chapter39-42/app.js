

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.


function power(a, b) {
    var result = 1;
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}


console.log(power(2, 3)); 
console.log(power(5, 2)); 


// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; 
    } else {
        return false; 
    }
}


console.log(isLeapYear(2016)); 
console.log(isLeapYear(1900)); 
console.log(isLeapYear(2000)); 

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions


function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}


function calculateArea(a, b, c) {
    var s = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}


var a = 5;
var b = 6;
var c = 7;

console.log("Semi-perimeter:", calculateSemiPerimeter(a, b, c));
console.log("Area of triangle:", calculateArea(a, b, c)); 











// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.


function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}


function calculatePercentage(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var maxMarks = 300; // 100 marks per subject
    return (totalMarks / maxMarks) * 100;
}


function mainFunction(marks1, marks2, marks3) {
    var average = calculateAverage(marks1, marks2, marks3);
    var percentage = calculatePercentage(marks1, marks2, marks3);

    console.log("Average Marks:", average.toFixed(2));
    console.log("Percentage:", percentage.toFixed(2) + "%");
}


mainFunction(85, 90, 78); 





// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.



function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i; 
        }
    }
    return -1; 
}


console.log(customIndexOf("hello", "e")); 
console.log(customIndexOf("hello", "a")); 


// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.



function removeVowels(sentence) {
    var vowels = "aeiouAEIOU";
    var result = "";

    for (var i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i]; 
        }
    }

    return result;
}


console.log(removeVowels("Hello World")); 
console.log(removeVowels("JavaScript is fun")); 




// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.


function countVowelPairs(text) {
    var count = 0;

    for (var i = 0; i < text.length - 1; i++) {
        var pair = text[i] + text[i + 1];

        switch (pair) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
                break;
        }
    }

    return count;
}


var sentence = "Pleases read this application and give me gratuity";
console.log(countVowelPairs(sentence)); 













// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.




function convertToMeters(km) {
    return km * 1000;
}

function convertToFeet(km) {
    return km * 3280.84;
}


function convertToInches(km) {
    return km * 39370.1;
}


function convertToCentimeters(km) {
    return km * 100000;
}

function displayConversions(km) {
    console.log("Distance in meters:", convertToMeters(km));
    console.log("Distance in feet:", convertToFeet(km));
    console.log("Distance in inches:", convertToInches(km));
    console.log("Distance in centimeters:", convertToCentimeters(km));
}


var distanceInKm = 5; 
displayConversions(distanceInKm);




// . Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.



function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.0;
    
    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        var overtimePay = overtimeHours * overtimeRate;
        return overtimePay;
    } else {
        return 0; 
    }
}


var hoursWorked = 45; 
var overtimePay = calculateOvertimePay(hoursWorked);

console.log("Overtime Pay: Rs.", overtimePay);



// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer.


function calculateCurrencyNotes(amount) {
    
    if (amount % 100 !== 0) {
        console.log("Amount must be in hundreds.");
        return;
    }

   
    var notes100 = 0;
    var notes50 = 0;
    var notes10 = 0;

  
    notes100 = Math.floor(amount / 100);
    amount %= 100; 

  
    notes50 = Math.floor(amount / 50);
    amount %= 50;

   
    notes10 = Math.floor(amount / 10);

    
    console.log("Currency Notes:");
    console.log("100: " + notes100);
    console.log("50: " + notes50);
    console.log("10: " + notes10);
}


var amountToWithdraw = 760; 
calculateCurrencyNotes(amountToWithdraw);
