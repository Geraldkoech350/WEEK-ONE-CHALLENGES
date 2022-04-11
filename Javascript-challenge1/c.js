// Given an integer x, return true if x is a palindrome integer.
let num=121;


var newnum = num.toString().split("").reverse().join("")
   if(parseInt(newnum)===num){
console.log(true);
   }
   else{
console.log(false);

   }


