//Array


const myArray = [0, 1, 2, 3, 4, 5];
// console.log([2]);

//JAvaScript Array is Resizable
//Shallow Coppy
//Deep Copy

const stringArray =["Ali","Wali","Imran"];
// console.log([0]);

let myArr = new Array(1, 2, 3, 4);

//Array Methods
myArr.push(6);
myArr.pop(1);
myArr.unshift(9);
myArr.shift();

// console.log (myArr.includes(2));// check number in array
// console.log(myArr.indexOf(3));
const newArr = myArr.join();// it convert array to string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);


//slice and splice

console.log("A" , myArray);

const myA = myArray.slice(1,3);
console.log(myA);

console.log("B", myArray);

const myA1 = myArray.splice(1,3);//Splice manipulate orignal array
console.log("C", myArray);
console.log(myA1);











// in Browser function
// const number = [1, 2, 3, 4]
// undefined
// number
// (4) [1, 2, 3, 4]
// 0: 1
// 1: 2
// 2: 3
// 3: 4
// length: 4
// [[Prototype]]: Array(0)

// at: ƒ at()
// concat: ƒ concat()
// constructor: ƒ Array()
// copyWithin: ƒ copyWithin()
// entries: ƒ entries()
// every: ƒ every()
// fill: ƒ fill()
// filter: ƒ filter()
// find: ƒ find()
// findIndex: ƒ findIndex()
// findLast: ƒ findLast()
// findLastIndex: ƒ findLastIndex()
// flat: ƒ flat()
// flatMap: ƒ flatMap()
// forEach: ƒ forEach()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// join: ƒ join()
// keys: ƒ keys()
// lastIndexOf: ƒ lastIndexOf()
// length: 0map: ƒ map()
// pop: ƒ pop()push: ƒ push()
// reduce: ƒ reduce()
// reduceRight: ƒ reduceRight()
// reverse: ƒ reverse()
// shift: ƒ shift()
// slice: ƒ slice()
// some: ƒ some()
// sort: ƒ sort()
// splice: ƒ splice()
// toLocaleString: ƒ toLocaleString()
// toReversed: ƒ toReversed()
// toSorted: ƒ toSorted()
// toSpliced: ƒ toSpliced()
// toString: ƒ toString()
// unshift: ƒ unshift()
// values: ƒ values()
// with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

