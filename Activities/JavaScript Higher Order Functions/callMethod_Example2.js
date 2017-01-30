var student1 = { name: "Mickey",
    sayName: function (){ console.log(this.name) }
};

var student2 = { name: "Donald",
    sayName: function (){ console.log(this.name) }
};

student1.sayName(); //Mickey
student2.sayName(); //Donald

// ^^^^^^ One way to create objects and get them to "sayName" (above) ^^^^^^^^


// vvvvvvvv Another (New way to create objects and get them to "sayName" (below) vvvvvv

// Create a Student class, this is the constructor for that class. Pass it a name in the constructor
function Student( name ){
    this.name = name;    // use the name that was passed to set its name property
}

// Behind the Student class (function) there is a prototype object
// The prototype has stuff that is common to all Students
Student.prototype.sayName = function () { console.log(this.name); };

var student3 = new Student("Kermit"); //Kermit <-- Create an object based on the Student prototype
var student4 = new Student("Ernie"); //Ernie  <-- Create an object based on the Student prototype

student3.sayName(); // Get student3 to "sayName" through the prototype function
student4.sayName();

// You can change the prototype later after you initially create it - keep referencing the same prototype
Student.prototype.sayName = function ()  { console.log("Hi my name is " + this.name); };

student1.sayName(); // This prints: Mickey  -- this is because its from the top portion and doesnt have access to prototype
student3.sayName(); // This prints: Hi my name is Kermit  -- this is because it has access to the new and updated prototype


function greet(subject){
    var greeting = "Hello " + subject.name;
    greeting += " my name is " + this.name;
    greeting += ". Nice to meet you!";
    console.log(greeting);
}

// we could add this greet function inside of the prototype object so it works properly, as is this doesnt work as intended
greet(student1); //Hello Mickey my name is result. Nice to meet you!

// use the .call method to produce the result that we want...
// the "this" keyword refers to Kermit in this function - so this creates a context for the greet() function
// student1 refers to the "subject" in the greet function definition
greet.call(student3, student1); //Hello Mickey my name is Kermit. Nice to meet you!







