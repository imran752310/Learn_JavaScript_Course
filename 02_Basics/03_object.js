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

JsUser.email = "new@gmail.com";
console.log(JsUser.email);

Object.freeze(JsUser);

JsUser.email = "windo@gmail.com";
console.log(JsUser.email);

console.log(JsUser);





