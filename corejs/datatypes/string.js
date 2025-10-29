

//  Creating strings
let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `Hello World!`;

console.log(singleQuote, doubleQuote, backticks);
console.log("Type of singleQuote:", typeof singleQuote);

//  String concatenation
let greeting = "Hello" + " " + "Raj";
console.log("Concatenation:", greeting);

//  Template literals (ES6)
let name = "Raj";
let age = 20;
let template = `My name is ${name} and I am ${age} years old.`;
console.log("Template literal:", template);

//  String length
console.log("Length of template:", template.length);

//  Accessing characters
console.log("First character:", template[0]);
console.log("Last character:", template[template.length - 1]);

//  Common string methods
let str = "JavaScript is fun";

console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Includes 'Script':", str.includes("Script"));
console.log("Starts with 'Java':", str.startsWith("Java"));
console.log("Ends with 'fun':", str.endsWith("fun"));
console.log("Slice(0,10):", str.slice(0, 10));
console.log("Replace 'fun' with 'awesome':", str.replace("fun", "awesome"));
console.log("Split by space:", str.split(" "));
