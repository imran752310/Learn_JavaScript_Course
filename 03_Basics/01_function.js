// function addNumber(num1 ,num2){//num1 and num2 are Parameters
//     console.log( num1 + num2);
// }

// addNumber(5, 7); // returns 12  // 5 and 7 is Aurgument
// addNumber(5, '7'); // returns 47
// addNumber(5, null); // returns 5
// addNumber(5); // returns NaN
// // if stor the afunction variable and print
// const result = addNumber(2, 4);
//console.log(result);//print undefine it mean function not exectue

function addNumber(num1 ,num2){//num1 and num2 are Parameters
    return num1 + num2;
}

const sum = addNumber(3, 9)
console.log("Result : ", sum); //returns 12


function logIn(userName = "ali", password){// pass default value 

    if(userName === undefined &&  password === undefined ){
        return ('User name or Password cannot be empty')
    }else{
    return `Hi "${userName}", your Password is "${password}"`;
    }
}
//console.log(logIn("Imran Khan"));// Ali overide by imran khan

//Cart or shoping card in website concept in function
//kala che mung function create ko khu da rata pata naye che sumra argument pati pass ke ge num mung ba rest oprator pass ko

// function calculateCartPrice(num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 30, 499, 500 ));  //print only one value 200


// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 30, 499, 500 ));  //using Spred operator give all value in one array


function calculateCartPrice(val1,valu2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 30, 499, 500,300, 212 )); // the ist two value pass in val1 and val2 and then print all in num1


//How to Pass Object from Function

const User = {
    userName : "Imran Khan",
    Price : 122,
}

// function handleObject(anyObject){
//     return `Username is ${anyObject.userName} and Price ${anyObject.Price} `;
// }
// console.log(handleObject(User));

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and Price ${anyObject.Price}`);
}

handleObject(User);

handleObject({
    userName : "Wali ali",
    Price : 234
});

// Pass Array From Function

const myArray = [1, 2, 3, 4, 5, 6];

function passArray(getArray){
    return getArray[2];
}

// console.log(passArray(myArray));

 
console.log(passArray([102, 111, 333]));




