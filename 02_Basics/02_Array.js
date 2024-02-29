const Array1 = ["imran", "khan", "Aslam", "Ali"];

const Array2 = ["wajid", "fasial", "sahil", "hamza"];

// Array1.push(Array2); // adding array 2 to array
// // console.log(Array1);

// console.log(Array1[1][2]); // length of the combined

// const data = Array1.concat(Array2);
// console.log(data);

// Use Spread

const useSpread  = [...Array1, ...Array2];
//console.log("Use spread: ",useSpread) ;

// Nested Array

    const nestedArray = [1, 2, 3, [4, 5, 6,], 7 ,[8, 9, [10, 11 ] ] ]
    console.log(`Nested Array : ${nestedArray}`);
    const nestArray = nestedArray.flat(Infinity);// to make one Array
    console.log(nestArray);


    console.log(Array.isArray("Muhammad Imran"));
    console.log(Array.from("Muhammad Imran"));

    console.log(Array.from({name : "Muhammad Imran"}));//object print

    const score = 100;
    const score1 = 200;
    const score2 = 300;
    const score3 = 400;

    console.log(Array.of(score, score1, score2, score3));// convert to one array
 

