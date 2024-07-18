//for of

MyArr= [1,2,3,4,5,6]
for (const num of MyArr) 
{
    //console.log(MyArr[num]);    
}

const greeting = "Hello World!"

for (const greet of greeting)
{
    //console.log(`Each char is ${greet}`);
}


//++++++++++++++++++++++MAPS+++++++++++++++++++
//values should be unique
const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "United State of America")
map.set('RUS',"Russia")

for (const [key,value] of map) {
    console.log(value);
}

const gamee ={
    'game1':"NFS",
    'game2':"GTA",
    'game3':"FIFA",
    'game4':"COD"
}
// for (const [key,value] of gamee) {
//     console.log(key);
// }
