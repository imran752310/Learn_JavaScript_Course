const userEmail = []

if(userEmail){
    console.log(`the User Email is ${userEmail}`);
}else{
    console.log("Do not have the user email");
}

// falsy values

//false, 0, -0, BigInt , "", 0n, null, undefined ,NaN

//Truthy Value
//"0", 'false', " ", [], {}, function(){}

//check array
if(userEmail.length === 0){
    console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0){
    console.log("The Object is Empty");
}


//Nullish Coalescing Operator (??) : null undefine

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10

console.log(val1) //output: 10

//Ternary Operator

// conditional Operator

// condition ? true : false

const apple = 5;

apple >= 6 ? console.log("true less than 5") : console.log( "true greater than or equal to 5");










