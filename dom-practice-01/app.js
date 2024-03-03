
let num = document.getElementById('number');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');

plus.addEventListener('click', function(){
    num.innerText = Number(num.innerText) + 1;
})


minus.addEventListener('click', function(){
        if (Number(number.innerText) > 0) {
            num.innerText = Number(number.innerText) - 1;
        }
     })


