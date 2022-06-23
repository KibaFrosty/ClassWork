console.log(typeof(0)); //number
console.log(typeof 0); //number
console.log(typeof true); //boolean
console.log(typeof 'javascript'); //string
console.log(typeof undefined); //undefind
console.log(typeof Math); //object
console.log(typeof Symbol('JS')); //symbol
console.log(typeof null); //object
console.log(typeof function() {}); //function !!
console.log(typeof NaN); //number !!
console.log('helo' / 10); //NaN
console.log(typeof (1/0)); //Infinity



let obj = {
    person1: {
        name: 'Kiba',
        lastName: 'Frost',
        age: 24
    },
    person2: {
        name: 'Kiba2',
        lastName: 'Frost2',
        age: 243
    }
}


let language = 'javascript'
if (language) {
    console.log ('The best language IS: ', language);
    console.log (`The best language is: ${language}`);
}


let arr = [1, 'hello', true, 25, 25, '25']
//         0      1      2    3   4    5


console.log(null + 2); //2
console.log(undefined + 42); //NaN - операция невозможона 

