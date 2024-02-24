//bakteck in stiong

const name = "Imran Khan";
const rollNumber = 1232;

console.log(`Hello My Name is ${ name } and My Roll Number Is ${rollNumber}`);
console.log(`Hello My Name is " ${ name }"  and My Roll Number Is " ${rollNumber} "`);// name and 

//string another methods

const gameName = new String("Imran Khan");
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf('k'));/*/ find the char k from starting of string */

const newString = gameName.substring(0,4);// how many character prng
console.log(newString);


const anotherString = gameName.slice(-8,4);//_ve value give
console.log(anotherString);

const str = "   foo  ";
console.log(str.trim()); // 'foo'// remove white spaceses

const url = "https://imran.com/imran%20abc";
console.log(url.replace('%20','-') );// replace

console.log(url.includes("imran"));

console.log(gameName.split(2,"-"));


// undefined
// gameName
// String {'Imran Khan'}
// 0: "I"
// 1: "m"
// 2: "r"
// 3: "a"
// 4: "n"
// 5: " "
// 6: "K"
// 7: "h"
// 8: "a"
// 9: "n"
// length: 10[[Prototype]]: String
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()

// lastIndexOf: ƒ lastIndexOf()
// length: 0link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()Symbol(Symbol.iterator): ƒ [Symbol.iterator]()[[Prototype]]: Object[[PrimitiveValue]]: ""[[PrimitiveValue]]: "Imran Khan"