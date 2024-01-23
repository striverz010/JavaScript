
const arr=[1,2,3,4,5];



function binary(x){
    return x.toString(2);
}

//we can write full function on theire itself
const output1=arr.map(function double(x){
    return x*2;
});                 

//we can implement the outer function as well(for every value it repeats/does the operation)
const output2=arr.map(binary);

const output3=arr.map((x)=> x*3); //arraow funcation which are a anonymous functions in js also we can use

console.log(output1);
console.log(output2);
console.log(output3);