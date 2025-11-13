//smallest subarray with target sum
// Input: [2,3,1,2,4,3], target = 7 → output = 2 ([4,3])
/*
let arr = [2,3,1,2,4,3];
let left = 0;
const target =7;
let sum =0;
let minlen = Infinity;

for(let right = 0;right<arr.length;right++){
    sum+=arr[right];

    while(sum>=target){
        minlen = Math.min(minlen,right-left+1);
        sum-=arr[left];
        left++;
    
    }
   
}
console.log(minlen);
*/

//max sum of sub array
/*
let arr = [2,1,5,1,3,2];
const k = 3;
let left = 0;
let sum=0;
let maxsum = 0;

for(let right = 0;right<arr.length;right++){
    sum+=arr[right];

    if(right-left+1>k){
        sum-=arr[left];
        left++
    }

    if(right-left+1===k){
        maxsum=Math.max(maxsum,sum);
    }
}
console.log(maxsum);
*/

//subarray with any no of 1s but only limited 0
/*
let arr = [1,0,1,1,0,0,1,1,1];
const k = 2 ;
let left = 0;
let zerocount = 0;
let maxlen = 0;
 
for(let right = 0;right<arr.length;right++){
    if(arr[right]===0){
        zerocount++;
    }
    while(zerocount>k){
        if(arr[left]===0){
            zerocount--;
            left++
        }
       
    }
     maxlen=Math.max(maxlen,right-left+1)
}
console.log(maxlen);
*/

//Find the maximum sum of a contiguous subarray of size k where all elements satisfy a condition.
//Example condition: only positive numbers are allowed.

//Array: [2, -1, 5, 1, 3, -2, 4], k = 3

let arr = [2, -1, 5, 1, 3, -2, 4];
const k = 3;
let left = 0;
let windowsum = 0;
let maxsum = 0;

for(let right = 0;right<arr.length;right++){
    if(arr[right]>=0){
        windowsum+=arr[right]
    }
    else{
        windowsum = 0;
        left = right + 1
        continue;
    }
    if(right-left+1 >k){
        windowsum-=arr[left];
        left++;
    }

    if(right-left+1===k){
        maxsum=Math.max(maxsum,windowsum);
    }
}
console.log(maxsum);