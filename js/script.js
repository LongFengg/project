"use sctrict";

let num = 10;

function showFirstMessage(text) {
    console.log(text);
    num = 25;
}

showFirstMessage("Hello world!");
console.log(num);

// function calc(a, b){
//     return (a + b);
// }

// console.log(calc(4, 7));

function ret() {
    let num = 50;
    return num;
}

const antoherNum = ret();
console.log(antoherNum);

const logger = function(){
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;
console.log(calc(5,4));