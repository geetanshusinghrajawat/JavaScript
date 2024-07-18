//const tinderUser = new Object() // this is the singleton instance
const tinderUser = {} // this is not the singleton instance

tinderUser.id="12345"
tinderUser.name = "geetanshu"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const newuser = {
    email: "newuser@gmail.com",
    fullname: {
        userfullname:{
            firstName:"John",
            LastName:"Wick"
           }
        }
}
//console.log(newuser.fullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2) // basic way of adding onjects
//console.log(obj3);

//another way of adding ojects
const obj4 = {...obj1,...obj2} // this method is called spread
//console.log(obj4);

console.log(tinderUser);
//basix properties of the object
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));
