var bmi = function (q1,q2) {
  // return weight703/heightSqr;
var weight = parseInt(prompt(q1));
var height = parseInt(prompt(q2));
var weight703 = weight*703;
var heightSqr = height*height;
alert("Your Body Mass Index is " + weight703/heightSqr);
};


bmi("What is your weight?","What is your height?");





// var multiply = function(number1, number2){
// 	return number1 * number2;
// };
//
// var number1 = parseInt(prompt("enter a number:"));
// var number2 = parseInt(prompt("enter another number:"));
// var results = multiply(number1, number2);
//
// alert(results);
