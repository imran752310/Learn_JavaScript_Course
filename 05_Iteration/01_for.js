//for

// for(let i = 0; i < 10; i++ ){
//     const element = i;
//     if(element ==5){
      
//          console.log(`I am out of the loop ${i}`);
//     }
//     console.log(element);
// }

// for(let i = 0; i < 10; i++ ){
//     console.log(` Outer Loop ${i}`);
//     for(let j = 0; j < 3; j++ ){
        
//         console.log(`This is INNer Loop ${j}`);
//     }
// }

let myArray = ['Ali', 'Wali','saleem'];

for(let i = 0; i< myArray.length; i++){
    console.log(`My name is ${myArray[i]}`);
}

//Break and Continuou

for(let i = 1; i <=12; i++){
   
   if(i==5) {
    console.log("Detected")
    continue;
}
console.log(`Value is ${i}`);

}