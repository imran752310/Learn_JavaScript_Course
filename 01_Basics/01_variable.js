const accountId= 12345;
let accountEmail = "imran@gmail.com";
var  accountPassword = "12345";
     accountCity = "Islamabad";

    // accountId = 2; // error constant doesn't change
    // In JavaScript there is no scope of variable
    accountId =212121;
    accountEmail='abc@gmail.com';
    accountPassword= '111';
    accountCity ="karachi"

    let accountState; //undefine due not assign value

     console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])
