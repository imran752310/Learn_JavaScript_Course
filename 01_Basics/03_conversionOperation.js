let score = "3";
//null =0
//undefine 
//"33" =33
//"222scs"  =nan
//true=1;false=1 
//empty string  

console.log(typeof score );
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);


// let isLogIn = 1// if 0 than false
// let booleanIsLogin = Boolean(isLogIn);
// console.log(typeof booleanIsLogin)//true

// let isLogIn = ""// if emty string than false
// let booleanIsLogin = Boolean(isLogIn);
// console.log(typeof booleanIsLogin)//false


let isLogIn = "asas"// if any type of string than true
let booleanIsLogin = Boolean(isLogIn);
console.log(typeof booleanIsLogin)//True

//number to string 
let num = 32
let numToString =String(num);
console.log(typeof numToString);