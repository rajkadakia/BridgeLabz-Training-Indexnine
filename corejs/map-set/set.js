const set = new Set();

set.add(1);
set.add(2);
set.add(2); 

console.log(set.has(2)); 
console.log(set.size);   

set.delete(1);
console.log(set);        

const arr = [1,2,2,3,3,3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); 

//weakset
const visitedUsers = new WeakSet();

let user1 = { name: 'Alice' };
let user2 = { name: 'Bob' };


visitedUsers.add(user1);
visitedUsers.add(user2);

console.log(visitedUsers.has(user1)); 


user1 = null; 