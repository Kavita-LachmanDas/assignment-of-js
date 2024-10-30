// 1. Write a program that takes a positive integer from user & 
// display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number


var pro =  +prompt("write a positive Integar");
var round = Math.round(pro)
var floor = Math.floor(pro)
var ceil = Math.ceil(pro)
document.write(`Number : ${pro} </br> round off value: ${round} </br> floor value: ${floor} </br> ceil value: ${ceil}`)






// 2. Write a program that takes a negative floating point 
// number from user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number 


var Neg =  +prompt("write a Negative Integar");
var round = Math.round(Neg)
var floor = Math.floor(Neg)
var ceil = Math.ceil(Neg)
document.write(`Number : ${Neg} </br> round off value: ${round} </br> floor value: ${floor} </br> ceil value: ${ceil}`)



// 3. Write a program that displays the absolute value of a 
// number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 


var absolute =  +prompt("write a number");

var ab = Math.abs(absolute);
document.write(`the absolute value of ${absolute} is ${ab}`);



// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.: 
var dice = Math.floor(Math.random()*6)+1;
document.write(`Random Dice Value: ${dice}`);


// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your 
// browser 



var head =Math.floor( Math.random()*2)+1;
var tail =Math.floor( Math.random()*2);

document.write(`Random Coin Value: Heads= ${head} </br> Random Coin Value:Tails= ${tail}`);



// 6. Write a program that shows a random number between 1 
// and 100 in your browser. 


var number = Math.floor(Math.random()*100)+1;

document.write(`Random Number between 1 to 100 : ${number}`)



// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be: 
// a. 50 
// b. 50kgs 
// c. 50.2kgs 
// d. 50.2kilograms 



var weight = parseInt(prompt("write your weight..."));
document.write(`the weight of user is ${weight} kilograms`)


// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.



var game = +prompt("enter a number between 1 to 10");

var secret = Math.floor(Math.random()*10)+1;

if(game == secret){
    alert(`conguratulationsssssss!!!!!!! you gusses right number \n  :secret number : ${secret} \n guessed number : ${game} `)
    document.write(`conguratulationss!!!!!!!`)
}else{
    alert("sorrrrrrrrry unmatched number \n try again!!!!")

}





















