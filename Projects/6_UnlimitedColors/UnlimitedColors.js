const start = document.querySelector('#start')
const stop = document.querySelector('#stop')

const hexCode = "0123456789ABCDEF"
let color = '#'
let interval= ''

const changeColor = function (){
    for(let i =0;i<6;i++){
        let index = hexCode[(Math.floor(Math.random()*16))] //hexCode[13]
        color += index
        console.log(color);
    }
    document.body.style.backgroundColor = color
    color = '#'
}

start.addEventListener('click', function(){
    if(interval==''){
    interval= setInterval(changeColor,1000)
    }
})
stop.addEventListener('click',function(){
    clearInterval(interval)
    interval= ''
    
})


