const accountId = 144553
let accountEmail = "geetanshu@gmail.com"
var accountPassword = "12345" 
/*
prefer not to use var
Because of issue in block scope and functional scope
*/
accountCity = "Jaipur" //varialble can be declared without let,var,const
let accountState

//const cannot change
//accountId = 2
console.log("Account",accountId);

accountEmail = "gitanshu@gmail.com"
accountPassword = "253775"
accountCity = "Ajmer"

//to print everything at once

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])