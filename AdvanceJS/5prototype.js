let myName = 'Geetanshu      '
console.log(myName)
// console.log(myName.trueLength)


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor:"Hammer",
    spiderman: "Web",

    getSpiderPower: function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
heroPower.hitesh()

Array.prototype.greeting = function(){
    console.log(`Hello Everyone`);
}
myHeros.greeting()

///////////////////////Inheritance/////////////////////////

const user = {
    name: "geetu",

}
const Teacher = {
    makeVideo:true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,
    //old approach
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//New Approach
Object.setPrototypeOf(TeachingSupport,Teacher)

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let anotherUserName = "ChaiAurCode         "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUserName.trueLength()
