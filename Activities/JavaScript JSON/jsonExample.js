/* JSON - JavaScript Object Notation

- All property names have to be surrounded by double quotes
- Only simple data expressions are allowed, no function calls, variables or anything that involves computation
- Comments are not allowed in JSON

 [
 {"name": "Emma de Milliano", "sex": "f",
 "born": 1876, "died": 1956,
 "father": "Petrus de Milliano",
 "mother": "Sophia van Damme"},
 {"name": "Carolus Haverbeke", "sex": "m",
 "born": 1832, "died": 1905,
 "father": "Carel Haverbeke",
 "mother": "Maria van Brussel"},
 … and so on
 ]

*/

// JavaScript give us functions, JSON.stringify and JSON.parse that convert data to and from this format
// The first takes a JavaScript value and returns a JSON-encoded string
// The second takes such a string and converts it to the value it encodes

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);  // This prints: {"name":"X","born":1980}

console.log(JSON.parse(string).born);  // This prints: 1980
