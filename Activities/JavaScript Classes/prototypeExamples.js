// Class constructor
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer"); // create an instance of the Rabbit class named killerRabbit
var blackRabbit = new Rabbit("black");

console.log(blackRabbit.type);
// → black

// Add a speak method to all rabbits created with the Rabbit constructor - Do this through the use of the prototype
Rabbit.prototype.speak = function(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
};

blackRabbit.speak("Doom...");
// → The black rabbit says 'Doom...'


// Overriding prototypes - When you add a property to an object, whether it is present in the prototype or not,
// the property is added to the object itself, which will henceforth have it as its own property. If there is a
// property by the same name in the prototype, this property will no longer affect the object. The prototype itself is not changed.
Rabbit.prototype.teeth = "small";

console.log(killerRabbit.teeth);
// → small

killerRabbit.teeth = "long, sharp, and bloody";

console.log(killerRabbit.teeth);
// → long, sharp, and bloody

console.log(blackRabbit.teeth);
// → small

console.log(Rabbit.prototype.teeth);
// → small