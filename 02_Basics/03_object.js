// singaleten
// Object.create()

//object litrals

const mySym = Symbol("key1");

const JsUser = {

    name : "imran",
    age : 23,
   [ mySym ]: "myKey1",// if you print the object show you symbol and its key
    email : "imram@gmail.com",
    location : "Islamabad",
    isLoggin : false,
    lastLoginDay : ["sunday", "monday"] 
}

console.log(JsUser.email);

console.log(JsUser["email"]);

console.log(JsUser.mySym);
console.log(JsUser[mySym]);

JsUser.email = "new@gmail.com";// value manipulation
console.log(JsUser.email);

//Object.freeze(JsUser);// used for  making an object immutable means can't be changed after creation
// if you try to change it will throw error in console

JsUser.email = "windo@gmail.com";
console.log(JsUser.email);

console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser.greeting);//out put give you [Function (anonymous)] it not execute but give refrence






