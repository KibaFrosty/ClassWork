// var n = 80;
// while (n <= 100) {
//     console.log (n);
//     n += 2;
// }


// let paramStart = 10
// while (paramStart >=0) {
//     console.log ('Param start: ', paramStart);
//     paramStart --
// }

// var n = 100;
// while (true) {
//     console.log (n)
//     n += 2;

//     if (n>300) break
// }

// do {
//     var ageStr = prompt ('vvedite vozrast')
//     var age = parseInt (ageStr);
// }

// while (isNaN(age));
// console.log ('Vozrast: ' + age  + ' let') 


// const carsCycle = ['BMW', 'Audi', 'Mercedes', 'Mazda']

// for (let i = 0; i < carsCycle.length; i++) {
//     console.log (i);
//     const car = carsCycle[i]
//     console.log(car);
// }

// for (var houseNum = 1; houseNum <=19; houseNum +=2) {
//     if (houseNum == 13) continue

//     console.log ('Dom ' + houseNum)
// }

const preson = {
    fName : 'Kiba',
    lName : 'Frost',
    year: 1998,
    [1+3]: 'Key 4',

    language : [
        'Ru',
        'En',
        'Gr'
    ],
    hasWife: false,
    greet: function(){
        console.log('Greet');
    }
}

console.log (preson);
console.log (preson.year);
console.log (preson['fName'])


const key = 'year'
console.log(preson[key]);

preson.isProgrammer = true
preson.age = 30
console.log (preson)

preson.year = undefined
console.log (preson)

delete preson.year
console.log(preson);


var obj1;
obj1 = {
    prop1: {
        prop2: {
            prop3: 25,
            text: 'hello'
        }
    }
}

console.log (obj1.prop1.prop2.text);

