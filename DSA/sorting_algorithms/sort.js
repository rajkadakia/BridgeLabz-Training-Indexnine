// bubble sort swap two elements

const bubblesort = (arr)=>{
    const n = arr.length;
    for(let i = 0;i <arr.length;i++){
        for(let j = 0; j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;

}
console.log(bubblesort([1,4,5,7,8,3,6,9,33,55,2,0,7,97]));

//selection sort

const selectionsort = (arr)=>{
    const n = arr.length;
    for(let i = 0; i<n-1;i++ ){
        let minindex = i;
        for(let j =i+1;j<n;j++){
            if(arr[j]<arr[minindex]){
                minindex = j;
            }
        }
        if(minindex !==i){
            [arr[i],arr[minindex]]=[arr[minindex],arr[i]];
        }
    }
    return arr;

}

//insertion sort 
const insertionsort = (arr)=>{
    const n = arr.length;
    for(let i = 1; i<n;i++){
        let key = arr[i];
        let j = i-1;

        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]= key;  
    }
    return arr;

}
//merge sort 

function mergesort(arr){
    if (arr.length<=1) return arr;
    const mid = Math.floor(arr.length/2);

    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));

    return merge(left,right);
}

function merge(left,right){
    let sortedarr = [];
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortedarr.push(left.shift());
        }
        else{
            sortedarr.push(right.shift());
        }
    }
    return sortedarr.concat(left,right);
}

//quick sort 

function quicksort(arr){
    if(arr.length<=1){
        return arr;
    }

    let pivot = arr[0];
    const left = [];
    const right=[];

    for(let i = 1; i <arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quicksort(left),pivot,...quicksort(right)];
}