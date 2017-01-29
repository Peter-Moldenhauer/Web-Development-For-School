function forEach(a, work) {
    for (var i = 0; i < a.length; i++) {
        work(a[i]);
    }
}

var arr = [1, 2, 3];

//forEach(arr,console.log); <--- This will not work because you are essentially passing 'log' not 'console.log'

var newLog = console.log.bind(console); //newLog now has the console.log function with a fixed context of console.
// In other words, newLog is a new function that turns console.log into just a "one word function" (i.e console) that
// allows you to now pass the log function binded with the context of console.

forEach(arr, newLog);  // <-- This will work because you are passing the array with the "one word" console.log function
// Prints:
// 1
// 2
// 3