require('@babel/polyfill');

import num from "./test";
console.log(`Тестирование импорта. Импортировали число - ${num}`);
const x = 123;
console.log(`Variable x => ${x}`);


function first(){
    return new Promise((resolve, reject) => {
        console.log('Function first');
        resolve();
    })
}

function second(){
    return new Promise((resolve, reject) => {
        console.log('Function second');
        resolve();
    })
}

function third(){
    return new Promise((resolve, reject) => {
        console.log('Function third');
        resolve();
    })
}

first().then(() => {
    return second();
}).then(() => {
    return third();
})

