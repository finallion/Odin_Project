// EVENTS //
/*
click
dblclick
keydown
keyup
*/
///////////////////

// <button onclick="alert('Hello World')">Click Me</button>

// OR //

// <button id="btn">Click Me</button>
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// OR //

const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    alert("Hello World");
});


// WITH FUNCTIONS //
// <button onClick="alertFunction()">CLICK ME BABY</button>
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener('click', alertFunction);

// WITH CALLBACK //
btn.addEventListener('click', function (e) {
    console.log(e);
});


// WITH ARRAY //
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
});