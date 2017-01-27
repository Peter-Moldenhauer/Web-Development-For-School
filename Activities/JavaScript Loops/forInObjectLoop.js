/*****************************************************************
This program demonstrates the for( in ) loop to print objects.

 The first code portion will print here and abc because these are the
 keys in the object, obj1.

 In the second portion, here, is and abc will be printed. The object
 {is: "an"} is not a key, but the value that the key 'here' maps to.
 One way to treat nested objects would be to wrap your code in a function
 and check to see whether each value mapped to by the keys you iterate over
 are of the object type, and if they are, incur a recursive call of the
 function using that object as the parameter.
*****************************************************************/

// This prints:
// here
// abc
var obj = {here: {is: "an"}, abc: 2};
for(var x in obj) {
    console.log(x);
}

// This prints:
// here
// is
// abc
printObjKeys(obj);

function printObjKeys (obj) {
    for (var x in obj) {
        console.log(x);
        if (typeof(obj[x]) === 'object') {
            printObjKeys(obj[x]);
        }
    }
}