//Immediate Invoked Function Experession (IIFE)

// function Connect(){
//     console.log("DB CONNECTED");
// }

// Connect()//this create error in Global Scope palution remove by Private fnction

//but now i Use IIFE

//syntex ()()

//named IIFE
(
    function(){
        var db = "Connected to DB";
        console.log(db);
        
        //accessing the variable outside of this scope will give an error because it is private to this function
        //accessing the variable outside of this scope will give an error

    })();

    //SImple IIFE

( () => {
        console.log(`BD is Connected`);
})()

// how to pass argument to IIFE function


((name) => {
    console.log(`Hi ${name} , the DB is CONNECTED`)
})('Imran Khan')


//tow IIFE in breakeby ; cemicolon