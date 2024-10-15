// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.


var num1 = 3;
var num2 = 5;
var sum = 3 + 5;

document.write(`sum of ${num1} and ${num2} is ${sum}`)

document.write("</br>")


// 2. Repeat task1 for subtraction, multiplication, division & 
// modulus. 


var num1 = 3;
var num2 = 5;
var sum = 3 - 5;

document.write(`subtraction of ${num1} and ${num2} is ${sum}`)

document.write("</br>")

var num1 = 3;
var num2 = 5;
var sum = 3 * 5;

document.write(`multiplication of ${num1} and ${num2} is ${sum}`)

document.write("</br>")
var num1 = 3;
var num2 = 5;
var sum = 3 / 5;

document.write(`Division of ${num1} and ${num2} is ${sum}`)

document.write("</br>")



// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value 
// after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial 
// value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value 
// after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 
 
// after addition is: 13”. 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value 
// after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value 
// by 3.  
// l. Output : “The remainder is : 0”. 





var number; 
number = 5;
document.write(`Initial Value : ${number}`)
document.write("</br>")

 number++
document.write(`Value after Increment : ${number}`)
document.write("</br>")

number = number+7
document.write(`Value after addition : ${number}`)
document.write("</br>")

 number--

document.write(`Value after Decrement : ${number}`)
document.write("</br>")

document.write(`The remainder is : ${number%3}`)

document.write("</br>")


// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store 
// ticket price in a variable & calculate the cost of buying 5 
// tickets 
// to a movie. Example output:


var ticketprice = 600

document.write(`Total Cost To Buy 5 tickets to a movie is ${ticketprice*5}PKR`)


document.write("</br>")
// 5. Write a script to display multiplication table of any 
// number in your browser. E.g 

for(var i = 1 ; i <= 10 ; i ++){
    var num = 4;
    var mull = 4 * i
    document.write(`${num} X ${i} = ${mull} </br>`)

}


document.write("</br>" + " " + "</br>")


// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 


var Celcius = 25;

// var c = (F-32)*5/9            

var F = (Celcius * 9/5)+32


var Fahrenheit = 70
var c = (Fahrenheit-32)*5/9   


document.write(`${Celcius}<sup>o</sup>C is ${F}<sup>o</sup>F </br> ${Fahrenheit}<sup>o</sup>F is ${c}<sup>o</sup>C`)






// 7.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables

// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 



var item1Price = 650;

var item2Price = 100;

var Ordered_Quantity_item1 = 3

var Ordered_Quantity_item2 = 7


var shipping_charges =  100

var totalCost = (item1Price*Ordered_Quantity_item1) + (item2Price *Ordered_Quantity_item2) + (shipping_charges)
document.write(`Price of Item 1 is ${item1Price} </br> quantity of Item 1 is ${Ordered_Quantity_item1} </br> Price of Item 1 is ${item2Price} </br> quantity of Item 2 is ${Ordered_Quantity_item2} </br> Shipping Charges ${shipping_charges} </br> </br> Total Cost Of Your Order  is ${totalCost}`)


document.write("</br>" +" " + "</br>")
// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser 

var totalMarks = 980;
var obtainedMarks = 804;

var percentage = obtainedMarks*100/totalMarks

document.write(`<h1>Marks Sheet</h1> </br> </br> Total Marks: ${totalMarks} </br> Marks Obtained: ${obtainedMarks} </br> Percentage: ${percentage}%`)



document.write("</br>" +" " + "</br>")

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee) 


var usDollar = 10;
var saudiRiyal = 25;

var convertDollar_into_Pak = usDollar * 104.80




var convertRiyal_into_Pak = saudiRiyal*28

var totalCurrency = convertDollar_into_Pak + convertRiyal_into_Pak
document.write(`<h1>Currency in PKR </h1> </br> </br> Total Currency In PKR: ${totalCurrency}`)


document.write("</br>" +" " + "</br>")




// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression





var num =  10

var expression = ((num+=5)*10)/2


document.write(expression)

document.write("</br>")


// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored 
// values. 
// Output them to the screen like so: “They are either NN or NN 
// years old”. 


var currentYear = 2024;
var birthYear = 2005;

var possible_age1 = currentYear - birthYear

var possible_age2 = currentYear - birthYear - 1
document.write(`They are either ${possible_age1} or ${possible_age2} Years old.`)

document.write("</br>")


// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and 
// output “The circumference is NN”. 
// (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 



var radius = 20;
// c = 2 pi r 

var circumference = 2 * 3.142 * radius;

var area = 3.142 * 400;

document.write(`<h1>The Geometrizer </h1> </br> </br> The Radius of a Circle: ${radius} </br> The circumference is: ${circumference} </br> The area is ${area} `)












// 13. The Lifetime Supply Calculator: Ever wonder how 
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of 
// your life. 
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.



var fav_snake = "Chocolate Chip";
var current_age = 15;
var maximum_age = 65;
var amount_of_snake_per_day = 3;

var result = (maximum_age - current_age )*3
document.write(`<h1>The Lifetime Supply Calculator </h1> </br> </br> Favorite Snake: ${fav_snake} </br> Current Age: ${current_age} </br> Estimated Maximum Age: ${maximum_age} </br> Amount of Snakes per day: ${amount_of_snake_per_day} </br> </br> You will need ${result} ${fav_snake} to last you until the ripe old age of ${maximum_age}`)