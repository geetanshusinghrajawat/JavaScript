const form = document.querySelector('form');
const compare = document.querySelector('#weight-guide')
form.addEventListener('submit', function(e){
    e.preventDefault();
    const h = parseInt(document.querySelector('#height').value);
    const w = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#results');

    if(h===''||h==0||isNaN(h)||w===''||isNaN(w)||w==0)
    {
        res.innerHTML = 'Please enter the valid details';
    }
    else {
        const bmi =  (w / ((h * h) / 10000)).toFixed(2);
        res.innerHTML =`<span>${bmi}</span>`
        if(bmi<18.6)
            {
                compare.innerHTML = "UnderWeight"
            }
        else if (bmi>=18.6 && bmi<=24.9)
            {
                compare.innerHTML = "Normal weight"
            }
        else if (bmi>24.9){
            compare.innerHTML = "Overweight"
        }
    }
    
})