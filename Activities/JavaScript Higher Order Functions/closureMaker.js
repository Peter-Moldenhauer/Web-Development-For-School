function outer(){
    var n = 0;
    inner();
    return n;
}

function inner(){
    n += 1; //Throws an error, n is not in scope.
}

//outer(); // <-- this wont work because n is not in scope for inner(). Would return: "n is not defined"

function closureMaker(){
    var n = 0; // n is in scope everywhere inside of closureMaker() - including the inner and outer functions
    var inner = function(){
        n +=1;
    };
    var outer = function(){
        inner();
        return n;
    };
    return outer; // When this 'outer' function is returned, closureMaker() exits and doesn't exist anymore
}   // So what happens to the variables (i.e. 'n') inside of closureMaker() when the function exits?
            // A copy of the variables is made, and this copy will continue to persist and be accessed by the functions
            // that were defined inside of closureMaker()

var outerClosure = closureMaker();
console.log("Call 1: " + outerClosure()); //This prints: Call 1: 1
console.log("Call 2: " + outerClosure()); //This prints: Call 2: 2