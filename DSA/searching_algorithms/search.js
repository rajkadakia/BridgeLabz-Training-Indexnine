//linear search

const linearsearch=(arr,target)=>{
    for(let i = 0;i<arr.length;i++){
        if(target===arr[i]){
            return i;
        }
    }
    return -1;
}
console.log(linearsearch([1,5,9], 5)); // expected 1
console.log(linearsearch([1,5,9], 100)); // expected -1

//globallinear search

const globallinearsearch=(arr,target)=>{
    let result = [];
    for(let i = 0;i<arr.length;i++){
        if(target===arr[i]){
            result.push(i);
        }
    }
    if(result.length===0)return -1
    return result;
}

//binary search

const binarysearch = (arr,target)=>{
    let start = 0;
    let end = arr.length-1;

    while(start<=end){
        let middle = Math.floor((start+end)/2);

        if(arr[middle]===target){
            return middle;
        }
        else if (arr[middle]<target){
            start = middle+1;
        }
        else{
            end = middle-1;
        }
    }
}