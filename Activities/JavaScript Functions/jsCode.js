// Instructions: (Part 1) Write a JavaScript program that declares a function but calls it before it is declared.
// Because of function hoisting this will work in JavaScript.
// (Part 2) Also write a function which is assigned to a variable. Call it before it is assigned and prove that
// this does NOT work.

// Call a function before it is declared.
console.log(addSomething(455, " programs to write."));

function addSomething(num, str){
    return num + str;
}


// Call a function which is assigned to a variable before the function is assigned - Will not work!
console.log(willNotWork);

var willNotWork = function(){
    return "You should not be able to see this";
}

