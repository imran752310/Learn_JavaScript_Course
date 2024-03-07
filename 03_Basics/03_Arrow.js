//THIS key word use current context  of execution like User Object {}

const User = {
    name : "Imran",
    Price : 999,
     welcomeMessage(){
        console.log(`${this.name} Welcome to Shop`);
       // console.log(this);//this use for current context object
    }
}

// User.welcomeMessage();
// User.name = "John";
// User.welcomeMessage();

console.log(this);// print empty object but in browser console print  window object


// in function connot use this 

// function chai(){
//     const name  = "wali";
//     console.log(this.name)
// }
// chai();// print undefine because This not work in function

// const chai = function(){
//     const name  = "wali";
//     console.log(this.name)
// }
// chai();// print undefine because This not work in function

//arrow function

// const chai = () => {
//     const name  = "wali";
//     console.log(this.name)
// }

// chai();// print undefine because This not work in function
// Explacite Return

// const chai = (num1 , num2) =>{
//     return num1 + num2;
// }

//Emplycit

// const chai = (num1, num2) => num1 + num2;

//const chai = (num1, num2) => ( num1 + num2  );

//return Object

const chai = (num1, num2) => ({username : "Imran Khan"});



console.log(chai(5,6));


