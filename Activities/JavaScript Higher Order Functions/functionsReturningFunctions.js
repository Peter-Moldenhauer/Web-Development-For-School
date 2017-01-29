// This function sums an array of integers
// Could also do: [2,2,3].forEach(foo); This would call the function foo three times passing in 2, 2, and 3.
function sumArr(arr) {
    var sum = 0;
    arr.forEach(function (v) {
        sum += v;
    });
    return sum;
}

console.log(sumArr([2,2,3])); // call the above function, pass an array to it and print out retrun value to screen
// 7 is printed to the screen


// This function creates dialog functions.
// It takes a character name as an argument. It then returns a function which takes a line of dialog and returns a string which // quotes it and adds the reference to the speaker
function dialog(speaker) {
    return function(speech){
        return speaker + " says \"" + speech + "\"";
    }
}

var Donald = { name: "Donald Duck"}; // The initial character object

Donald.speak = dialog(Donald.name); // Donald.speak becomes a function after calling the dialog() function

console.log(Donald.speak("Hello there")); // Calling the Donald.speak function
// Prints: Donald Duck says "Hello there"