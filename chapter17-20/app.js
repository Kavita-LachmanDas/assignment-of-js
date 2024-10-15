
// 1. Declare and initialize an empty multidimensional array. 
// (Array of arrays)  

var multidimensional;
multidimensional = [];

// 2. Declare and initialize a multidimensional array 
// representing the following matrix:  


var multidimensional = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];

for (var i = 0; i < multidimensional.length; i++) { 
    for (var j = 0; j < multidimensional[i].length; j++) { 
        document.write(multidimensional[i][j] + " "); 
    }
    document.write("<br>"); 
}


// 3. Write a program to print numeric counting from 1 to 10. 
for(var i = 1; i <=10;i++){
    document.write("</br>" + i)
}


// 4.  Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user. 



var table = +prompt("Enter a number to show its multiplication table ...")

var startNum = +prompt("from which number you want to start table??");
var endNum = +prompt("from which number you want to end table??");
for(var i = startNum; i<=endNum;i++){
  document.write(`</br> ${table} X ${i} = ${table*i}`)
}


// 5. Write a program to print items of the following array 
// using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”] 



var fruits = ["apple", "banana", "mango", "orange", "strawberry"] 

for(var i = 0;i<fruits.length;i++){
    document.write("</br>" +  fruits[i])
  

   
}
for(var i = 0;i<fruits.length;i++){
    
  document.write("</br>")
  
    document.write(`Element at index ${i} is ${fruits[i]}`)
}



// 6. Generate the following series in your browser. See 
// example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

document.write(` <h1>Counting:</h1> </br> `)
for(var i = 1;i<=15;i++){
  
    
      document.write(`${i + ","}`)
      
      
  }

  document.write(` <h1>Reverse Counting:</h1> </br> `)
  
  for(var i = 10;i>=1;i--){
  
    
    document.write(`${i + ","}`)
    
    
}


document.write(` <h1>Even:</h1> </br> `)

for(var i = 2;i<=20;i+=2){

  
  document.write(`${i + ","}`)
  
  
}


document.write(` <h1>Odd:</h1> </br> `)

for(var i = 1;i<=20;i+=2){

  
  document.write(`${i + ","}`)
  
  
}


document.write(` <h1>Series:</h1> </br> `)

for(var i = 2;i<=20;i+=2){

  
  document.write(`${i + "K,"}`)
  
  
}





// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example: 

var  A = ["cake", "apple pie", "cookie","chips", "patties"] 

var iinput = prompt("Welcome to ABC Bakery. What Do You want to Order Sir/Ma'am")


for(var i =0;i<=A.length-1;i++){

  if(iinput == A[i]){
    continue;
    document.write(`</br> ${iinput} is available at index ${i} in our Bakery`)
}
 else{
    
    document.write(`</br> we are sorry, ${iinput} is not available in our Bakery`)
    break;
  };

}





// document.write("</br>")

// // 8. Write a program to identify the largest number in the 
// // given array. 
// // A = [24, 53, 78, 91, 12].

// var A = [24, 53, 78, 91, 12]
// var largest = Math.max(...A)
// document.write(`Array Items: ${A} </br> The Largest Number is: ${largest}`)


// document.write("</br>")

// // 9. Write a program to identify the smallest number in the 
// // given array. 
// // A = [24, 53, 78, 91, 12] 
// var A = [24, 53, 78, 91, 12] 

// var smallest = Math.min(...A)
// document.write(`Array Items: ${A} </br> The Smallest Number is: ${smallest}`)

// // 10. Write a program to print multiples of 5 ranging 1 to 
// // 100. 

// document.write("</br>")
// for(var i = 5; i<=100;i+=5){
//     document.write(i+",")
// }




var nestedArr = [["a", "b", "c"], [1, 2, 3, 4], ["x", "y", "z"]];

for (var i = 0; i < nestedArr.length; i++) {
  console.log(nestedArr[i], i);
}