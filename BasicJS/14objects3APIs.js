//const tinderUser = new Object() // this is the singleton instance
const tinderUser = {} // this is not the singleton instance

tinderUser.id="12345"
tinderUser.name = "geetanshu"
tinderUser.isLoggedIn = false

const newuser = {
    email: "newuser@gmail.com",
    fullname: {
        userfullname:{
            firstName:"John",
            LastName:"Wick"
           }
        }
}

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj3 = Object.assign({},obj1,obj2) // basic way of adding onjects

//another way of adding ojects
const obj4 = {...obj1,...obj2} // this method is called spread

const course = {
    courseName: "JS in Hindi",
    price: "999",
    courseInstructor:"Hitesh"
}
//better syntex 
const {courseInstructor: cinst} = course // this is how you make short name. 
console.log(cinst);

//+++++++++++++ API +++++++++++++
// {
//     "name":"pandey",
//     "cname":"balle balle",
//     "price":"free"
// } API can be build in arrays aswell
