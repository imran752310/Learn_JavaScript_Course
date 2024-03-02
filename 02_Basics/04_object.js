// singalten object 

//const sigaltenObjt  = new Object()//this is singalten object

const nonSingalTnObjt = {}//this is non -signalten object.
//result will be same empty  object out put .

nonSingalTnObjt.id = "123",
nonSingalTnObjt.name = "Imran Khan",
nonSingalTnObjt.status = false

//console.log(sigaltenObjt);
//console.log(nonSingalTnObjt);

//nested Object
const person = {
    id :"123",
    age: 30,
    fullname : {
        userName : {
            firstName : "Imran",
            lastName : "Khan"
         }
    }
}

// console.log(person);
//  console.log(person.fullname);
//  console.log(person.fullname.userName);
//  console.log(person.fullname.userName.firstName);
//  console.log(person.fullname.userName.lastName);

//Join  Many Object into one

const obj1 = {1 : "a", 2 : "b"}
const obj2 ={3 : "c", 4 : "d"}

//const obj3 = {obj1 , obj2};
//console.log(obj3);//output { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
const obj3 = Object.assign({}, obj1, obj2)// the {} is source add  to which object we want to join.
// console.log(obj3);
// we not use the above

//We Use Spreed Operator for joining Object
const obj4 = {...obj1 , ...obj2} // this is also way of joining two objects
// console.log(obj4);

//

//Another Syntax which Use for Fetch Data From Database

const User1 = [
    {
        id : 1,
        email : "abc@gmail.com" 
    },
    {
        id : 2,
        email : "xyz@yahoo.com"
    },
    {
        id : 3,
        email : "xyz@yahoo.com"
    }
]

User1[1].email;
// let userEmail= User1.find((user)=>{return user.id == 2})
// console.log(userEmail.email);

// console.log(nonSingalTnObjt);

// console.log(Object.keys(nonSingalTnObjt));//prnt Keys
// console.log(Object.values(nonSingalTnObjt));// print Values

// console.log(Object.entries(nonSingalTnObjt));// print [ [ 'id', '123' ], [ 'name', 'Imran Khan' ], [ 'status', false ] ]

// console.log(Object.hasOwnProperty(nonSingalTnObjt));//prnt Keys


const course ={

    course : "JavaScript",
    price : 234,
    instructor : "Imran Khan"
}

// Object Destrucrureing
//course.instructor //this method is also good for single valu print

const {instructor: abc} = course

console.log(abc);

//JSON OBJECt Not real Object
// {
//     "Name" : "Imarn",
//     "Coursename" : "JavaScript",
//     "Price" : 2344
// }


