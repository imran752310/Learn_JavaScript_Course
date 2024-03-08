const coding = ["js", "ruby", "java", "python", "cpp"]


//useing foreach loop or functon 
coding.forEach( function (val) {
    //console.log(val);
} )

//usring Arrow function or call back function

coding.forEach( (val) =>{
  //  console.log(val + ' is a popular language');
})

//using function 

function printMe(val){
    //console.log(val);
}

coding.forEach(printMe);


// to Print more argument

coding.forEach( (item, index, arr) =>{
    //console.log(item , index, arr);
})

// desturtureing Arry having Multiple Objects

const myCode = [
    {
        bookName : "js",
        autherName : "Ali",
    },
    {
        bookName : "React",
        autherName : "wali",
    },
    {
        bookName : "node",
        autherName : "majeed",
    }
]

myCode.forEach( (item) =>{
   // console.log(item);// access the Array
    console.log(item.bookName , item.autherName);// access the Array and also object property
})











// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
// ]

// myCoding.forEach( (item) => {
    
//    // console.log(item.languageName);
// } )