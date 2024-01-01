

let name1="ManiKanta Korimilli";

console.log(name1.length);  //19

console.log(name1.toUpperCase()); //MANIKANTA KORIMILLI

console.log(name1.toLowerCase()); //manikanta korimilli

console.log(name1.slice(2,5)); //niK

console.log(name1.replace("Man","Gun"));  //GuniKanta Korimilli

console.log(name1.concat("Is Good Boy")); //ManiKanta KorimilliIs Good Boy

console.log(name1.substring(1,5));

let str1="a";
let str2="b";


if(str1<str2){
    console.log(`${str1} is smaller than the ${str2}`);
}

for(let i=0;i<name1.length;i++){
    console.log(name1[i]);
}
