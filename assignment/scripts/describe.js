// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// make a variable called name and set it to "Dane"
// Make a coniditional checking if the name equals mary, if so then console log " "hi, Mary!"
// If the name does not equal mary then they console.log "How do you do?"
//(new) Name=Dane, in the if check if name=mary which it does not. In this case console.log("how do you do")


//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Make a varible named secret and leave it black
// make a variable called code and equal it to 123
// write a conditional that says if code is greater than 250, assign the value "duper" to the variable secret
//we console.log "secret"
// (new)code=123, in the if statement, code does equal 123 so assign super to "secret" then multiply code by 2
//in the if statement check if code is greater than 250, it is not so we console log
//console.log(secret)= "super"

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// They made 3 variables and assigned a value to each one(isStudent equals 2(boullion), age equals 34 and zip equals 55407)
// Then they wrote a condtion that stated that if "isStudent is true AND zip is greater than 80000" then it would console log "you're a student on the west coast"
// then they followed it with an else if statement that stated that "if isStudent equals false OR age is less than 30" then they asked "what is your hobby?"
//they added another else if checking if they were students using the boullion isStudent.
//then they finished it with an else statement which means that if both of those scenarios are untrue then they console.log "how is the weather?"

//(new) in this else if, we checked the 3 variables both the first and 2nd conditionals are false however the third one is true
// we console.log("welcome to Prime!")

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// colorOne should be colorOne="blue"; and colorTwo should be colorTwo="red";
if (mix === true) {
  colorOne = 'purple';
}
// instead of only colorOne= purple, it should be both colorOne and colorTwo which can be done by using the && variable between colorOne and colorTwo
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
//They said to check is temp is greater than 39 and time is grater than or equal to 4 however they used || which means or, they should be haved && meaning AND.
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
  //The directions say to check is age is greater than or equal to minAge however they are checking if minAge is lessthan or equal to age.(it could give the same results however it is not what the directions say)
  //after fixing it if(age >= minAge) then they console.log "enter"
}
*/

