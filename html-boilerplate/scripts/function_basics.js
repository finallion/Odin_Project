/////// FUNCTIONS //////////

function sayHi() {   // (1) create
    alert( "Hello" );
}

let func = sayHi;    // (2) copy // with parentheses would write the result of sayHi into func

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

////////////////////////////

function sayHi2() {
    alert( "Hello" );
}

alert( sayHi2 ); // shows the function code

////////////////////////////

let sayHi3 = function() {
    alert( "Hello" );
};

////////////////////////////

function sayHi4() {
    // ...
}

let sayHi5 = function() { // semicolon
    // ...
};


///////////////////////////
// callback
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

/////////////
/* same as */
/////////////
ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

///////////////////
// function declaration (block scope)
sayHi("John"); // Hello, John, works before declaration. let func = function(name) {...} wouldn't

function sayHi(name) {
    alert( `Hello, ${name}` );
}

//////////////////
// function expression
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
    alert( `Hello, ${name}` );
};

/* FUNCTION SCOPE - WORKS NOT */
let age = 16; // take 16 as an example

if (age < 18) {
    welcome();               // \   (runs)
                             //  |
    function welcome() {     //  |
        alert("Hello!");       //  |  Function Declaration is available
    }                        //  |  everywhere in the block where it's declared
                             //  |
    welcome();               // /   (runs)
} else {
    function welcome() {
        alert("Greetings!");
    }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined

/* FUNCTION SCOPE - WORKS */
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
    welcome = function() {
        alert("Hello!");
    };
} else {
    welcome = function() {
        alert("Greetings!");
    };
}

welcome(); // ok now

////////////////////
/* ARROW FUNCTION */
////////////////////
let func = (arg1, arg2, argN) => expression;

// equals
let func = function(arg1, arg2, argN) {
    return expression;
};

// another example
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3

////////////////////
/* DEFAULT VALUES */
////////////////////
function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

// another example
function showMessage(from, text = anotherFunction()) {
    // anotherFunction() only executed if no text given
    // its result becomes the value of text
}



