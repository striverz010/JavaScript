//for filter the date 
const arr=[1,2,3,4,5,6,7];

function isEven(x){
    return x%2===0;
}
const output1=arr.filter(isEven);

const output2=arr.filter((x)=>x%2===1);

const output3=arr.filter(function greaterthan4(x){
    return x>4;
})

console.log(output1);
console.log(output2);
console.log(output3);
