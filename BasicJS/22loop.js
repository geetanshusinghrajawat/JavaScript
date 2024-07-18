// for  loop
for (let i = 0; i <=10; i++) {
    const element = i;
    //console.log(element);
}

for (let i = 0; i <=10; i++)
{
    //console.log(`Outer Loop Value ${i}`)
    for (let j = 0; j <=10; j++) {
        //console.log(`Inner Loop  value ${j}`)
    }
}
MyArr = ["Flash","Batman","IronMan","superman"]
for (let i = 0; i < MyArr.length; i++) {
    const element = MyArr[i];
    //console.log(element);
}

//KeyWords
//break & Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5)
    {
        //console.log("5 is detected");
        break; // break means ending of the loop when the condition is reached
    }
    //console.log(index);
    
}
for (let index = 1; index <= 20; index++) {
    if (index == 5)
    {
        console.log("5 is detected");
        continue // continue means skip that partular condition whenever its true and dont end the loop
        }
    console.log(index);
    
}