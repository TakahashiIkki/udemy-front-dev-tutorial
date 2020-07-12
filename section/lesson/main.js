const button = document.querySelector('#btn');
const h1 = document.querySelector('h1');

function changeColor() {
    h1.style.color = 'red';
}

// button.addEventListener('click', function () {
//     // alert('hello');
//     this.style.color = 'red';
// });

button.onclick = changeColor;