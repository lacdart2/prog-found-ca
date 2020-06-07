// question 1
var intro = "start";

// question 2

var person = {
    name: "Mike",
    age: 37,
};

// question 3

var outOfStock = true;

if (outOfStock === true) {
    console.log("out of stock");
} else {
    console.log("in stock");
}

// question 4
// typeof showing as object !!!???

var sizes = [39, 40, 41, 42, 43];
console.log(sizes);
for (var i = 0; i < sizes.length; i++) {
    console.log(sizes[i]);
}

// question 5
var counter;
for (var i = 15; i <= 25; i++) {
    console.log(i);
}

// question 6

var counter;
for (var i = 15; i <= 25; i++) {
    if (i === 20) console.log(i);
}

// question  7
// last comma in array shows up when saving in vscode.i deleted it here.confusing 

var members = [
    { name: "mike", isLoggedIn: true, age: 33 },
    { name: "sara", isLoggedIn: false, age: 26 }
];
for (var i = 0; i < members.length; i++) {
    console.log(members[i].age);
    console.log(members[i].isLoggedIn);
}

// question 8

function whatIDontLike(someFood) {
    console.log("i don´t like " + someFood);
}
whatIDontLike("sushi");

// question 9

function calcul(budjet, cost) {
    console.log(budjet - cost);
}
calcul(1000, 340);

// question 10

restPlass = [];

function booking(seats) {
    restPlass.push("seats");
    console.log(seats);
}
booking("seats");


