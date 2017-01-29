// The following code segments demonstrate closure and loops.
// We create an array of FUNCTIONS (not values) and want to call each function index to print a value
// The first block doesnt do this correctly - it prints '3' when each function index of the array is called
// The second block does do this correctly - it prints 0 1 2 that correspond to the index of each called function of the array

/************************************************************
********** This function doesnt work as intended ***********

 function generateFunctionList(){
    var fnArr = [];
    for( var i = 0; i < 3; i++){
        fnArr[i] = function(){
            console.log(i);
        };
    }
    return fnArr;
}

var functionArray = generateFunctionList();
functionArray[0](); //Expect 0?
functionArray[1](); //Expect 1?
functionArray[2](); //Expect 2?

********************************************************************/

// This function does work as intended: Prints 0 1 2 when each "function index" is called from the array...

function generateFunctionList(){
    var fnArr = [];
    for( var i = 0; i < 3; i++){
        fnArr[i] = function(x){ // generate 3 different closures of x because this function gets called only 3 times
            return function(){                                         // because it is inside of the loop
                console.log(x);
            };
        }(i); // pass i in for the value of x (above)
    }
    return fnArr;
}

var functionArray = generateFunctionList();
functionArray[0](); //Expect 0?
functionArray[1](); //Expect 1?
functionArray[2](); //Expect 2?