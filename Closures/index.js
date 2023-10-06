function x(){  
    var a=10;
    function y(){
        console.log(a);
    }
   return y;

      //return function y(){       similar to the above function
      //console.log(a); }
}
var z=x();
console.log(z); //the function whihc return y() is stored in the z;
z(); //now z() is similar to the y() so what ever elements are present in the y are can be able to acess in z as well..!




// function z(){
//     var b=900;
//     function x(){
//         var a=10;
//         function y(){
//             console.log(a,b);
//         }
//         return y;
//     }
//     return x;
// }
// var k=z();
// console.log(k); //k  all the x function right now 
