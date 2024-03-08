 // we use For in loop
 
 const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "Ruby",
    rt : "react"
 }

 for (const key in myObject) {
    //console.log(`${key} the shortcut ${myObject[key]}`);
 }

 const programming = ["js", "cpp", "Rt", "rb"];
 
 for (const key in programming) {
    console.log(programming[key]);
 }




// dont use for Map iteraton

// // const map = new Map()
// // map.set('IN', "India")
// // map.set('USA', "United States of America")
// // map.set('Fr', "France")
// // map.set('IN', "India")

// // for (const key in map) {
// //     console.log(key);
// // }