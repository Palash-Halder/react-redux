
let box = document.getElementById('box');


// h1 create
// write text
// push h1 inside box

let h1 = document.createElement('h1');

h1.innerText = 'Instructor: Palash Halder';
h1.style.color = 'green';

console.log(h1);

box.appendChild(h1);




let btn = document.createElement('button');

btn.innerText = 'Delete';
btn.style.padding = '5px 15px';
btn.style.backgroundColor = 'red';
btn.style.color = 'white';
btn.style.border = 'none'; 
btn.style.borderRadius = '6px';
box.appendChild(btn);


//h1 tag delete করা:

// btn.addEventListener('click', () => {
//     h1.remove();
//     console.log(this);
// })



// পুরো div টাকে নিচের দুইভাবে delete করা যায়।

/*

btn.onclick = function() {
    console.log();
    this.parentElement.remove();
}
*/

btn.addEventListener('click', function() {
    console.log(this);
})




