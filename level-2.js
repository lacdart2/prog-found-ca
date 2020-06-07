
// question 1

var counter;
for (var i = 15; i <= 25; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// question 2

function innerFunction() {
    console.log("I am a function ");
}
innerFunction();

function outerFunction() {}
outerFunction();

function one(name, familly) {
    console.log("our guest is " + name + " " + familly);
    return console.log("imreturn");
}
one("kader", "hafsi");




