
let array=[1,2,3,4,5]

console.log(array);  //[1,2,3,4,5]

array.push(6); //adds the element at the back
console.log(array); //[1,2,3,4,5,6]
array.push(7);
console.log(array); //[1,2,3,4,5,6,7]

array.pop(); //removes the element from the back
console.log(array); //[1,2,3,4,5,6]

array.shift(); //removes the starting element
console.log(array); //[2,3,4,5,6]

array.unshift(1); //adds the element at the begining
console.log(array); //[1,2,3,4,5,6]


let arr1=[1,2,3]
let arr2=[4,5,6,7,8,9]
let arr3=arr1.concat(arr2);
console.log(arr3);

//sorting the array in js
let nums=[100,234,567,7,8,9,111101];
nums.sort();
console.log(nums); //100,111101,234,567,7,8,9

let compare=(a,b)=>{
    return a-b;
}
nums.sort(compare);
console.log(nums);

nums.reverse();
console.log(nums);




