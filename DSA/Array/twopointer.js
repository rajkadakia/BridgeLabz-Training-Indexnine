/*
move all zeros 

let arr = [2,0,0,6,0,4,0,7,0,1];
let left = 0;

for(let right =0; right<arr.length; right++){
    if(arr[right]!=0){
        let temp = arr[left];
        arr[left]=arr[right];
        arr[right]= temp;

        left++;
    }
}
console.log(arr);
*/
/*
reverse array

let arr = [1,2,3,4,5];
let left = 0;
let right = arr.length-1;

while(left<=right){
    let temp = arr[left];
    arr[left]= arr[right];
    arr[right]= temp;

    left++;
    right--;
}
console.log(arr);
*/
/*
sort unique

let arr=[1,1,2,2,3,3,4,4,5,5,6,];
let left = 0;

for(let right = 1; right<arr.length;right++){
    if(arr[left]!=arr[right]){
        left++;
        arr[left]=arr[right];
    }
}
console.log(arr.slice(0,left+1));
*/
/*
find middle

let arr = [1,2,3,4,5,6,7];
let slow = 0;
let fast = 0;

while(fast<arr.length && fast+1<arr.length){
    slow +=1;
    fast +=2;
}
console.log(arr[slow]);
*/
/*
check palindrome

let arr =[1,2,5,3,4,4,3,5,2,1];
let left = 0;
let right = arr.length-1;
let ispalin = true;
while(left<=right){
    if(arr[left]!==arr[right]){
        ispalin = false
        break;
    }
    left++;
    right--;
}
console.log(ispalin);
*/

/*
let arr = [1,2,4,7,11,15];
let tar = 15;

let left = 0;
let right = arr.length -1 ;
let result = [];

while(left<=right){
    let sum = arr[left]+arr[right];
    if(sum===tar){
        result=[arr[left],arr[right]];
        break;
    }
    else if (sum>tar){
        right--;
    }
    else{
        left++;
    }
}
console.log(result)
*/

/*
let arr = [-4, -1, 0, 3, 10];
let left = 0;
let right = arr.length - 1;
let result = new Array(arr.length);
let pos = arr.length - 1;

while (left <= right) {
    let leftSq = arr[left] ** 2;
    let rightSq = arr[right] ** 2;

    if (leftSq > rightSq) {
        result[pos] = leftSq;
        left++;
    } else {
        result[pos] = rightSq;
        right--;
    }
    pos--;
}

console.log(result); 
*/
