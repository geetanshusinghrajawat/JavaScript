let a = 10 // global scope
const b = 20 //global scope 
//var c = 30 // not good i repeat not good iss fucntion se di gyi value kisi scope ke andar bhi change ho jaati h joki ni honi chaiye

if(true)
{
    let a=20 // block scope ye curly braces mai hee reh jaata h
    //console.log("Inner:",a);
}

//console.log("Outer:",a);
//console.log(b);
//console.log(c);


function one ()
{
    const username = "Geetanshu"

    function two ()
    {
        const website = "Youtube"
        console.log(username);
    }
    two()
    // console.log(website); //scope ke bahar h ye 
}

//one()

if(true)
{
    const username="Geetanshu Singh"
    if (username==="Geetanshu Singh")
    {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website); //out of scope
}

//console.log(username);



//++++++++++++++++++++++++++++++++ INTERESTING +++++++++++++++++++++++++++++++++

addOne(5)// this means declaration of the function and a function can be declared before the definiton of the function
function addOne(num)//this is the defintion of the function
{
    return num+1
}

//addTwo(6) //i cannot do the same in this method of declaring a function as the function is being saved in the variable and variable cannot be excuted before initialisation
const addTwo = function(num)
{
    return num+2
}
addTwo(6) // have to put the after the declaration 
