// Demonstrates the use of forEach loop

function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

// Example 1
forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
// Prints:
// Wampeter
// Foma
// Granfalloon


// Example 2
var numbers = [1, 2, 3, 4, 5], sum = 0;
// Often you dont pass a predefined function to forEach but create a function value on the
// spot instead: function(number) { sum += number }
forEach(numbers, function(number) {
    sum += number;
});
console.log(sum);
// Prints: 15


// Another Example of forEach loop...
function Student( name ) {
    this.name = name;  
}

Student.prototype.sayName = function ()  { console.log("Hi my name is " + this.name); };

var theStudents = [
	new Student("Terry"),
	new Student("Bryant"),
	new Student("Ralph")
];

theStudents.forEach( function(student) {
    student.sayName();
});
//Prints:
// Hi my name is Terry
// Hi my name is Bryant
// Hi my name is Ralph 

/*

To pass an argument to (for instance) sayName, you'd just modify like so:
 
theStudents.forEach( function(student) {
    student.sayName( --parameter-- );
});

*/








