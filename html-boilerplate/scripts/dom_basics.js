/*
<div id="container">
  <div class="display"></div>
  <div class="controls"></div>
</div>
 */

const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector('.controls');
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

const div = document.createElement('div');
div.style.color = 'blue';
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');

//////////////////////
///// ATTRIBUTES /////
//////////////////////
div.setAttribute('id', 'theDiv');
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');
// removes specified attribute

///////////////////
///// CLASSES /////
///////////////////
div.classList.add('new');
// adds class "new" to your new div

div.classList.remove('new');
// removes "new" class from div

div.classList.toggle('active');
// if div doesn't have class "active" then add it, or if
// it does, then remove it

///////////////////
///// CONTENT /////
///////////////////

div.textContent = 'Hello World!'
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = '<span>Hello World!</span>';
// renders the HTML inside div