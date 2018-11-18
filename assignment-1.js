//Declare an empty array
var numbers = [];
//iterate through the array
for (var i = 0; i < 10; i++) {
  //Add values to the array using the array.push();
//Will insert the value of i per interation
  numbers.push(i);
}

//console.log the first item in the array. The expected output is 0:
console.log(numbers[0]);
//console.log the last item in the array via popping. The expected output is 9:
var lastElement = numbers.pop();
console.log(lastElement);

//Create another variable named car and assign an empty object to it.
var car = {};
//Give the object a property called colour and assign it the value of "black".
car.colour = "black";
