// for of loop

["","","",""]//in array string
[{},{},{}] //in Array object

const arr = [1, 2, 3, 4, 5];

for (const num of arr ){
    // console.log(num);
}

//its also use for string character

const greetings = "Hellow word";

for (const greet of greetings){
    //console.log(`This is Peint of ${greet}`);
}


//Maps 

// maps is it self object no duplication value

const  map = new Map();
map.set('pak', "pakistan")
map.set('Agh', "Aghfghanistan")
map.set('ik', "imran khan");

console.log(map);// print object

for (const value of map){
   // console.log(value);// print all in Array [ 'pak', 'pakistan' ] [ 'Agh', 'Aghfghanistan' ][ 'ik', 'imran khan' ]
}

for (const [key, value] of map){
  //  console.log(key,":" ,value);
}


// for of loop use for object but not work

const myObject = {
    g1 : "cricket",
    g2 : "footbal"
}

for(const  [key, value] of myObject) {
    console.log(key,value);// there is error it not a methods of object destructuring
}


























// // for of

// // ["", "", ""]
// // [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     //console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     //console.log(`Each char is ${greet}`)
// }

// // Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")


// // console.log(map);

// for (const [key, value] of map) {
//     // console.log(key, ':-', value);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// // for (const [key, value] of myObject) {
// //     console.log(key, ':-', value);
    
// // }