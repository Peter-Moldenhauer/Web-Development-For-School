// Using a prototype method in a forEach loop
// This is a question I had in class

// This example demonstrates using a prototype with NO arguments/parameters in a forEach loop...
function Student(name) {
    this.name = name;
}
Student.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

var theStudents = [
    new Student("alf"),
    new Student("berta"),
    new Student("gamalan")
];

theStudents.forEach(function(el) {
    Student.prototype.sayName.apply(el);
});
// This prints:
// Hi my name is alf
// Hi my name is berta
// Hi my name is gamalan

