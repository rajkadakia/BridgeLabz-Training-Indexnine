

//  Creating symbols
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log("sym1:", sym1, "Type:", typeof sym1);
console.log("sym2:", sym2, "Type:", typeof sym2);

//  Symbols are unique
console.log("sym1 === sym2:", sym1 === sym2); 

//  Using symbols as object keys
let user = {
    [sym1]: "Raj",
    [sym2]: "Kumar"
};
console.log("User object with symbols:", user);

//  Accessing symbol keys
console.log("sym1 value:", user[sym1]);
console.log("sym2 value:", user[sym2]);
