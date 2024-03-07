//global scope
var c = 200;

let a = 3000;
//scop is in {} bracket

if(true){
    //inside {} braket called block scope
    let a = 10;
    const b = 30;
    var c = 39;
}

// console.log(a)
// //console.log(b)
// console.log(c)


// another lect for scope and closer

function one(){
    const name = "imran";
    function two(){
        const website = "facebook"
        console.log(name);
    }
   // console.log(website);//error the two function not execute
    two();
}

one()


if(true){
    const username = "imran";
    if(username ==="imran"){
        const website = "Facebook";
        console.log(`${username} uses ${website}`);
    }
  //  console.log(website);// out of scope
}
// console.log(username);//out of scope


// hoisting function  declaration

addOne(5);// no error
function addOne(num){
    return num + 1;
}
//addOne(5);

addTwo(3)// create a error
const addTwo= function(num){
    return num + 2;
}
// addTwo(3)