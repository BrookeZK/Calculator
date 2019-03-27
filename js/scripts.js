//calculator

//Business (back-end) logic:
var add = function(number1, number2){
	return number1 + number2;
};

var subtract = function(number1, number2){
  return number1 - number2;
};

var multiply = function(number1, number2){
  return number1 * number2;
};

var divide = function(number1, number2){
  return number1 / number2;
};

//Everything below this line is user interface (front-end) logic:
$(document).ready(function(){
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});

//must change the variable next to (number1, number) below to change the calculator function)








// // //Celsius to Fahrenheit converter
// var tempConversion = function (q1){
//   var celsius = parseInt(prompt(q1));
//   var farhenheit = ((9/5)*celsius)+32;
//   alert("the farhenheit temperature is " + farhenheit);
//
// };
//
// tempConversion("what is the celsius temperature?");
//
// // //BMI Calculator
// var bmi = function (q1,q2) {
//
// var weight = parseInt(prompt(q1));
// var height = parseInt(prompt(q2));
// var weight703 = weight*703;
// var heightSqr = height*height;
// alert("Your Body Mass Index is " + weight703/heightSqr);
// };
//
//
// bmi("What is your weight?","What is your height?");
//
