//singleton
//object literals
//object.create()

const mySym= Symbol("key1")

const Jsuser= {
    name:"geetanshu",
    [mySym]:"mykey1",
    age:"18",
    location:"jaipur",
    email:"geetanshu@gmail.com",
    isLoggedin:"false",
    lastLoginDay:["Moday","Friday"]
}

//how to access the object
//step 1

// console.log(Jsuser.email);

//step 2
//console.log(Jsuser["email"]);

//symbol can be used by sqaure brackets
//console.log(Jsuser[mySym])

//.freeze() does not let change the value
//Object.freeze(Jsuser)
//console.log(Jsuser);

Jsuser.greeting = function()
{
    console.log("hello world!");
}

Jsuser.greeting2 = function()
{
    console.log(`Hello User, ${this.name}`);
}

console.log(Jsuser.greeting2());