// Methods - methods are simply properties that hold function values...

function speak(line) {
    console.log("The " + this.type + " rabbit says '" +
        line + "'");
}
var whiteRabbit = {type: "white", speak: speak};
var fatRabbit = {type: "fat", speak: speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
// Prints: The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

fatRabbit.speak("I could sure use a carrot right now.");
// Prints: The fat rabbit says 'I could sure use a carrot right now.'

// There is a method similar to apply, called call. It also calls the function it is a method of but
// takes its arguments normally, rather than as an array. Like apply and bind, call can be passed a specific this value.

// apply example...
speak.apply(fatRabbit, ["Burp!"]);
// Prints: The fat rabbit says 'Burp!'

// call example...
speak.call({type: "old"}, "Oh my.");
// Prints: The old rabbit says 'Oh my.'