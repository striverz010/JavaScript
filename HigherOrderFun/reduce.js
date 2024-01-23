//used for reducing the whole array into the single value
const arr=[1,2,3,4,5];

//finding the sum of whole array
//reduce has two arguments function and the default initialization
//acc->accumullator which indicates the intialization value
//curr->current value the each and every value in the array
const output1=arr.reduce(function(acc,curr){

    acc=acc+curr;

    return acc; 

},0);

console.log(output1);

//finding the max element from the array
const output2=arr.reduce(function(acc,curr){

    if(curr>acc){
        acc=curr;
    }
    return acc;
},0);
console.log(output2);