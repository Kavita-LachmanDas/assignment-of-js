// 1. Write a program that displays current date and time in 
// your browser. 

var currennt  = new Date()
document.write(currennt)

// 2. Write a program that alerts the current month in words. 
// For example December. 


var get = ["jan","feb","mar","apr","may","june","jul","aug","sep","oct",'nov',"dec"]
var currennt  = new Date()
var month =currennt.getMonth()
document.write(`Current Month: ${get[month]}`)



// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun. 

var getDay = ["sunday","monday","tuesday",'wednesday',"thursday","friday","saturday"];
var currennt  = new Date()
var day = currennt.getDay()
alert("today is " + getDay[day].replace("day",""))



// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today. 


var getDay = ["sunday","monday","tuesday",'wednesday',"thursday","friday","saturday"];
var currennt  = new Date()
var day = currennt.getDay()


if(getDay[day] === "saturday" || getDay[day] === "sunday"){
    alert("it is fun day " + getDay[day] )
} else{
    alert("its normal day " + getDay[day])
}






// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”. 

var currennt  = new Date()
var date = currennt.getDate()


if(date < 16){
   document.write(" First fifteen days of the month")
}
else 
if(date > 16){
    document.write(" last days of the month")
 }




//  6. Write a program that determines the minutes since 
//  midnight, Jan. 1, 1970 and assigns it to a variable that 
//  hasn't been declared beforehand. Use any variable you like 
//  to represent the Date object. 




var currennt  = new Date()
document.write(`Curreent Date: ${currennt}`)


var miliseconds = currennt.getTime()
document.write(`Elapsed miliseconds since january 1, 1970: ${miliseconds}`)

var min = miliseconds/(1000*60)
document.write(`Elapsed minutes since january 1, 1970: ${min}`)






// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

var currennt  = new Date()
var hours = currennt.getHours()

if(hours >= 12){
 alert("Its PM")
}
else{
    alert("its AM")
}


// 8. Write a program that creates a Date object for the last day 
// of the last month of 2020 and assigns it to variable named 
// laterDate. 

var laterDate = new Date("Thu Dec 31 2020 00:00:00 ")
document.write(laterDate)



// 9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015 



var starting = new Date("June 18, 2015");
var now = new Date()
var differnce =  now - starting
var dc = differnce/(1000*60*60*24)
alert(Math.floor(dc) + " Days have passed since first Ramadan , 2015")


// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015. 



var ref = new Date("Sat Dec 05, 2015 22:50:16");
var now = new Date()

var diff = now - ref;
var sec = diff/1000;
document.write(Math.floor(sec) + "seconds had passed since begining  of 2015")





// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 

var currennt = new Date();
var hours = currennt.getHours();

currennt.setHours(hours-1);

document.write(`Current date: ${new Date()} </br> one hour ago it was ${currennt}`);



// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back? 


var currennt = new Date();
var years = currennt.getFullYear();
currennt.setFullYear(years-100);
console.log(currennt);

document.write(`Current date: ${new Date()} </br> 100 years back it was ${currennt}`);


// 13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser. 



var age = prompt("enter your age ");

var currennt = new Date();
var getBirthYear = currennt.getFullYear()-age;

document.write(`Your Age is ${age} </br> Your Birth Year is ${getBirthYear}`)


// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 







function generateBill(customerName, units, chargesPerUnit, latePaymentSurcharge) {
    var currentMonth = new Date().toLocaleString('default', { month: 'long' });

   
    var netAmount = (units * chargesPerUnit).toFixed(2);
    var grossAmount = (parseFloat(netAmount) + latePaymentSurcharge).toFixed(2);

   
    console.log("K-Electric Bill");
    console.log("Customer Name: " + customerName);
    console.log("Current Month: " + currentMonth);
    console.log("Number of Units: " + units);
    console.log("Charges per Unit: " + chargesPerUnit.toFixed(2));
    console.log("Net Amount Payable (within Due Date): " + netAmount);
    console.log("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
    console.log("Gross Amount Payable (after Due Date): " + grossAmount);
}


generateBill("John Doe", 350, 15, 20);






