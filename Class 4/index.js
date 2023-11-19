/*let weight = 81;

if(weight < 50){
    console.log("You are very weak");
    
} else if (weight <= 80){
    console.log("You are healthy");
    
} else if(weight > 80){
    console.log("You reover weight");
    
} else{
    console.log("");
    
}*/
/*Assignments

### Assignment 1: If-Else Statements
*Problem:*
Write a program that takes an integer as input and prints whether it is an even or odd number.

*Instructions:*
1. Create a variable and assign an integer value to it.
2. Use an if-else statement to check if the number is even or odd.
3. Print the result.*/
var evenOdd = 6;
if (evenOdd % 2) {
    console.log("This is odd number");
}
else {
    console.log("Tis is even number");
}
/*### Assignment 2: If-Else Statements
*Problem:*
Create a program that determines if a given temperature is above or below freezing (32°F).

*Instructions:*
1. Create a variable and assign a temperature value to it.
2. Use an if-else statement to check if the temperature is above or below freezing.
3. Print the result.*/
var temp = 33;
if (temp > 32) {
    console.log("It is above 32°F");
}
else {
    console.log("It is freezing because temperature is below then 32°F");
}
/*### Assignment 3: Switch Statement
*Problem:*
Write a program that converts a numeric day of the week (1 for Sunday, 2 for Monday, ..., 7 for Saturday) into its corresponding name.

*Instructions:*
1. Create a variable and assign a day number to it.
2. Use a switch statement to match the number with the corresponding day.
3. Print the day of the week.*/
var day = 6;
switch (day) {
    case 0:
        console.log("Monday");
        break;
    case 1:
        console.log("Tuesday");
        break;
    case 2:
        console.log("Wednesday");
        break;
    case 3:
        console.log("Thursday");
        break;
    case 4:
        console.log("Friday");
        break;
    case 5:
        console.log("Saturday");
        break;
    case 6:
        console.log("Sunday");
        break;
    default:
        console.log("Please enter right words");
}
/*### Assignment 4: If-Else Statements
*Problem:*
Create a program that checks if a given number is positive, negative, or zero.

*Instructions:*
1. Create a variable and assign a number to it.
2. Use if-else statements to check if the number is positive, negative, or zero.
3. Print the result.*/
var num = 2;
if (num >= 1) {
    console.log("It is positive number");
}
else if (num !== 1) {
    console.log("It is negative number");
}
else {
    console.log("The number is zero!");
}
/*### Assignment 5: If-Else Statements
*Problem:*
Write a program that checks if a given year is a leap year.

*Instructions:*
1. Create a variable and assign a year value to it.
2. Use if-else statements to check if the year is a leap year.
3. Print the result.*/
var year = 2021;
if (year % 4) {
    console.log(" This is leap year");
}
else {
    console.log("This is not leap year");
}
