// Example of duck typing
// Both objects have a log property so it doesnt matter which "type" of object you pass in, JavaScript will 
// figure out which property belongs with what object and print the appropriate information

function callLog(input){
	input.log();
}

var duck = {
	wingspan: 15,
	log: function (){console.log("Quack")}
}

var car = {
	wheels: 4,
	capacity: 5,
	log: function (){console.log("vroom!")}
}

console.log("call 1");
callLog(duck);
console.log("call 2");
callLog(car); 

