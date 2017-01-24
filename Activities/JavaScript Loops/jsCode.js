// This program demonstrates the different types of loops in JavaScript

// While loop Example 1:
var result = 1;
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);


// While loop Example 2:
var number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

// Do while loop:
do {
    var yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);


// For loop Example 1:
var result = 1;
for (var counter = 0; counter < 10; counter = counter + 1)
    result = result * 2;
console.log(result);


// For loop Example 2:
for (var current = 20; ; current++) {
    if (current % 7 == 0)
        break;
}
console.log(current);