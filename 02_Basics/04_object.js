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
console.log(obj3);
// we not use the above

//We Use Spreed Operator for joining Object
const obj4 = {...obj1 , ...obj2} // this is also way of joining two objects
console.log(obj4);




