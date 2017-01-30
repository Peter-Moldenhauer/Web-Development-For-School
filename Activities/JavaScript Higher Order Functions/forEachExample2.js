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

