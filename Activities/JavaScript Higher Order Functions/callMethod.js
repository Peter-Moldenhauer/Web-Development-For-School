// ****** Objects and Classes in JavaScript ******

// Example of a class constructor. If you want to make a DVD class you could do it like so...
function Dvd(title, length, rating){
    this.title = title;
    this.length = length;
    this.rating = rating;
    this.watchCount = 0;
}

// To get an instance of the Dvd class, call the function by prefixing it with the 'new' keyword.
var myDvd = new Dvd("Ocean's Eleven", 117, "PG-13");

// You can keep track of how many times you watch it with the watchCount variable. But how do you do that?
// JavaScript classes use a prototype. If you call a method or request a property of an instance of an object
// and it can't be found there, JavaScript will look at the prototype object to see if the property exists there.
// So if you have something that is shared by all instances of a class it should be on the prototype.
// So a method would belong there. You can add it like so...
Dvd.prototype.watch = function(){
    this.watchCount++;
    console.log("You watched " + this.title + ". That is a good movie!");
};

// You could then watch it by calling:
myDvd.watch();

// This will increment the watchCount and output the string: "You watched Ocean's Eleven. That is a good movie!".
// You do not want to add something like watchCount to the prototype because then EVERY dvd would share the
// same watch count. Meaning that there would be a global watch count for all DVDs and it would not be unique to
// an individual DVD. So Lion King and Ocean's Eleven would be increment and return the same value.

// ***** Demonstrating the functions CALL method ******
// The call emthod is a method of a function that calls the function immediately with a specific execution context

// Consider this function...
function timeToWatch(freeTime){
    return freeTime > this.length;
}

// The idea here is that you pass in your free time and it will let you know if you have time to watch a movie.
// We could add this to the Dvd prototype and call if from a Dvd instance and that would be fine.
// But to illustrate the call method we are not going to do that.
// Using the call method it would look like this instead...
console.log(timeToWatch.call(myDvd, 200));  // this will print: true

// This calls timeToWatch, the first argument sets the context to myDvd which is
// the "Ocean's Eleven" dvd. The following arguments are the functions normal arguments,
// in this case it is just the freeTime argument. The movie has a length of 117 minutes
// which is less than 200 so it would return true.







