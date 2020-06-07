
// question 1

var counter;
for (var i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// question 2
// a bit tricky,was confused between passing in the innerfunction content as a whole function , or just a string to point to innerfunction just.
// therefor i made two answers. 
// 2 .1
function innerFunction() {
    console.log("I am a function");
}
innerFunction();

function outerFunction(innerFunction) {
    console.log(innerFunction);
}
outerFunction("innerFunction");

// 2.2
function innerFunction() {
    console.log("I am a function");
}
innerFunction();

function outerFunction(innerFunction) {
    console.log(innerFunction);
}
outerFunction(innerFunction);


