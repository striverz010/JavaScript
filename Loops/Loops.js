
let nums=[1,2,3,4,5,6,7,8,9,10]

//basic for loop
for(let i=0;i<nums.length;i++){
    console.log(nums[i]);
}

//for each loop
nums.forEach((elements)=>{
    console.log(elements);
})

//for in loop
for(let a in nums){ //just prints the index only
    console.log(a);
}

//for each loop
for(let a of nums){
    console.log(a);
}

//while loop
let i=0;
const n=nums.length;
while(i<n){
    console.log(nums[i]);
    i++;
}
