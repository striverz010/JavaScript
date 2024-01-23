
const users=[
    {firstName:"maheshbabu",lastName:"gattameni",age:35},
    {firstName:"arjun",lastName:"allu",age:40},
    {firstName:"tarak",lastName:"nandamuri",age:35},
    {firstName:"chaitanya",lastName:"akhineni",age:45},
]

//finding the every user first and last name together
const output1=users.map((x)=>x.firstName+x.lastName);
console.log(output1);

//finding the grouping of ages or count of same age groups
//{35:2,40:1,45:1}
const output2=users.reduce(function(acc,curr){

    if(acc[curr.age]){

        acc[curr.age]= ++acc[curr.age];

    }
    else{
        acc[curr.age]=1;
    }
    return acc;

},{})
console.log(output2);

//finding the first name of users whoe age is having less than 40
const output3=users.filter((x)=>x.age<40).map((x)=>x.firstName);
console.log(output3);

//lly finding with the reduce
const output4=users.reduce(function(acc,curr){
    if(curr.age<40){
        acc.push(curr.firstName);
    }
    return acc;
},[])
console.log(output4);


