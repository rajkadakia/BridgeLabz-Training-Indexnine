const arr =[1,2,3,4,5];
const arr2 = new Array(3); // empty array with 3 place holders

// basic operations
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

arr.length;
arr.length=2;


//slice and split arr
const arr3 =[1,2,3,4,5,6,7,8];
arr3.slice(0,3);
arr3.slice(0,2);
arr3.splice(0,0,"X","Y");
arr3.splice(1,2,4,6);
arr3.splice(1,2);

const arr4=[1,2,3,4,5,6,7,8,9];
arr4.includes(3);
arr4.indexOf(2);
arr4.find(x=>x >5);

//array destructure

const arr5=[1,2,3,4,5];
const [a,b]=arr5;

//foreach
const arr6=[1,2,3,4,5,6,7];
arr6.forEach((n,index) => { 
    console.log("index",index,n);
});
arr6.forEach((n,index)=>{
    arr6[index] = n*2;
});

//filter //map // reduce
const arr7=[1,2,3,4,5,6,7];
const even=arr7.filter(x=>x % 2 === 0); //log even

const arr8=[1,2,3,4,5];
const mul=arr8.map(x=>x*2);
const sqr =arr8.map(x=>x*x);

const arr9=[1,2,3,4];
const sum = arr9.reduce((acc,curr)=>acc+curr,0);
const mull = arr9.reduce((acc,cur)=>acc*cur,0);

const fruits=["apple","banana","orange","banana","orange","banana","apple","cherry"]
const counter = fruits.reduce((accu,fruit)=>{
accu[fruit] = (accu[fruit]||0)+1;
return accu;
},{});

//array iterables
 const arr10=[12,3,5];
 for(const n of arr10){
    console.log(n);
 }
 //copy and deepcopy
  const arr11=[{a:1},{b:2},{c:3}];
  const copy=[...arr11];
  copy[0].x=100;
  arr11[1].x=200;

  const arr12=[{a:4},{b:5},{c:6}];
  const dcopy = structuredClone(arr12);

  dcopy[0].x=400;
  arr12[0].x=300;