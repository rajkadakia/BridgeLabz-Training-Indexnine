const map = new Map();
map.set("name","raj");
map.set("age",42);
map.set(true,"yes");

console.log(map.get('name')); 
console.log(map.size);   

map.delete(42);               
console.log(map.has(42)); 

//weak map
const loginCount = new WeakMap();

let user1 = { name: 'Alice' };
let user2 = { name: 'Bob' };

loginCount.set(user1, 1);
loginCount.set(user2, 3);

console.log(loginCount.get(user1)); // 1
console.log(loginCount.get(user2)); // 3


user1 = null;