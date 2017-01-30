// Higher order functions...

// Example 1 - functions that create (return) new functions
function greaterThan(n) {
    return function(m) { return m > n; };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
// This prints: true

// Example 2 - functions that change other functions
function noisy(f) {
    return function(arg) {
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);
// → calling with 0
// → called with 0 - got false
