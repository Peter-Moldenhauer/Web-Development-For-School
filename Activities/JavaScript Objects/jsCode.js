// This program demonstrates objects in JavaScript

// Example 1
var day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running",
        "television"]
};
console.log(day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
console.log(day1.wolf);
// → false


// Example 2 - delete keyword
var anObject = {left: 1, right: 2};
console.log(anObject.left);
// → 1
delete anObject.left;  // remove the named property from the object
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true


// Example 3 - an array of objects
var journal = [
    {events: ["work", "touched tree", "pizza",
        "running", "television"],
        squirrel: false},
    {events: ["work", "ice cream", "cauliflower",
        "lasagna", "touched tree", "brushed teeth"],
        squirrel: false},
    {events: ["weekend", "cycling", "break",
        "peanuts", "beer"],
        squirrel: true},
    /* and so on... */
];


// Example 4 - setting object1 = object2
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
// → true
console.log(object1 == object3);
// → false

object1.value = 15;
console.log(object2.value);
// → 15
console.log(object3.value);
// → 10