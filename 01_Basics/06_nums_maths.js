const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);// spatailly define this is number 

//NOw To Seen In Browser Console there is maney Function 
console.log(balance.valueOf());
console.log(balance.toString().length)//convert to string

console.log(balance.toFixed(2))//the Value having 2 or 1 zeros it end like 100.00 used in Ecommerce sites

const otherNumber = 20.646;
console.log(otherNumber.toPrecision(3));

const handred = 100000
console.log(handred.toLocaleString('en-IN'));

// Number {100}
// [[Prototype]]: Number
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed: ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 100


//++++++++++++++++++++++ Math  ++++++++++++++++

const math = Math;
console.log(math);
console.log(Math.abs(-4));//absolute value
console.log(Math.round(5.6));//round up
console.log(Math.ceil(4.2));// give larg value
console.log(Math.floor(4.8));// gve small value
console.log(Math.min(4,4,5,7,8,1));
console.log(Math.max(4,4,5,7,8,1));

console.log(Math.random());// random value between 0 and 1

console.log(Math.random()*10);// random value between 0 and 1
console.log((Math.random()*10) + 2);// random value between 0 and 1

let x = Math.floor(Math.random() * 10); // a random integer value
console.log(x);






//in Browser Console

//Math
// E
// : 
// 2.718281828459045
// LN2
// : 
// 0.6931471805599453
// LN10
// : 
// 2.302585092994046
// LOG2E
// : 
// 1.4426950408889634
// LOG10E
// : 
// 0.4342944819032518
// PI
// : 
// 3.141592653589793
// SQRT1_2
// : 
// 0.7071067811865476
// SQRT2
// : 
// 1.4142135623730951
// abs
// : 
// ƒ abs()
// acos
// : 
// ƒ acos()
// acosh
// : 
// ƒ acosh()
// asin
// : 
// ƒ asin()
// asinh
// : 
// ƒ asinh()
// atan
// : 
// ƒ atan()
// atan2
// : 
// ƒ atan2()
// atanh
// : 
// ƒ atanh()
// cbrt
// : 
// ƒ cbrt()
// ceil
// : 
// ƒ ceil()
// clz32
// : 
// ƒ clz32()
// cos
// : 
// ƒ cos()
// cosh
// : 
// ƒ cosh()
// exp
// : 
// ƒ exp()
// expm1
// : 
// ƒ expm1()
// floor
// : 
// ƒ floor()
// fround
// : 
// ƒ fround()
// hypot
// : 
// ƒ hypot()
// imul
// : 
// ƒ imul()
// log
// : 
// ƒ log()
// log1p
// : 
// ƒ log1p()
// log2
// : 
// ƒ log2()
// log10
// : 
// ƒ log10()
// max
// : 
// ƒ max()
// min
// : 
// ƒ min()
// pow
// : 
// ƒ pow()
// random
// : 
// ƒ random()
// round
// : 
// ƒ round()
// sign
// : 
// ƒ sign()
// sin
// : 
// ƒ sin()
// sinh
// : 
// ƒ sinh()
// sqrt
// : 
// ƒ sqrt()
// tan
// : 
// ƒ tan()
// tanh
// : 
// ƒ tanh()
// trunc
// : 
// ƒ trunc()
// Symbol(Symbol.toStringTag)
// : 
// "Math"
// [[Prototype]]
// : 
Object