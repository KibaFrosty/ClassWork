const persons = ['perso1', 'person2', 'person3', 'person4']

persons.push('person5')
console.log (persons);

persons.pop()
console.log (persons);

persons.unshift('person0')
console.log (persons);

persons.shift();
console.log (persons);

persons.splice(2, 2)
console.log (persons);

persons.splice(2, 2, 'user6', 'user7')
console.log (persons);

let personSecond = persons.slice(1, 3)
console.log (personSecond);

console.log (persons.concat(personSecond));

console.log (persons.indexOf('user6'));
console.log (persons.lastIndexOf('user6'));
console.log (persons.includes('user6'));

const numbers = ['1', '2', '3', '4', '5']

console.log (numbers);


console.log (numbers.concat(personSecond));

numbers.unshift('person0')


numbers.unshift('person-1')


numbers.unshift('person-2')
console.log (numbers);

console.log (numbers.includes('4'));

console.log(numbers[4]);

numbers.shift();
console.log (numbers);

numbers.splice(2, 2)
console.log (numbers);

const obj = [
    { name: 'User1', age: 40, budget: 20000},
    { name: 'User2', age: 16, budget: 15000},
    { name: 'User3', age: 24, budget: 17000},
    { name: 'User4', age: 27, budget: 18000},
    { name: 'Iser5', age: 18, budget: 19000},
    { name: 'User6', age: 19, budget: 3000},
]

for (let user of obj) {
    console.log (user);
}


const square = function (x) {
    return x * x
}

console.log (square(5));

const secondFunc = square;

console.log (secondFunc(6));






function formalGreeting () {
    console.log ('How are you7');
}

function casualGreeting () {
    console.log ('Whats us7');
}

function greet (type, formalGreeting, casualGreeting) {
if (type === 'formal') {
    formalGreeting()
} else if (type === 'casual') {
    casualGreeting()
}
}

greet('formal', formalGreeting, casualGreeting)




obj.forEach((user, index, arr) =>{
    console.log(user);
    console.log(index);
    console.log(arr);

    console.log(user.name.toUpperCase());
})


const newUser = obj.map(user => `${user.name.toUpperCase()} ${user.age * 5}`)

console.log (newUser);


const filterAdults = obj.filter(user => user.age <= 18 && user.name.startsWith('I'))
console.log (filterAdults);


const filterOld = obj.filter(user => user.age >= 25 && user.age <= 45)

console.log(filterOld);




const totalBudget = obj.reduce((total, obj) => total + obj.budget, 0)

console.log (totalBudget);


const findeUser = obj.find(user => user.name === 'Iser5')
console.log (findeUser);

const findeUserIndex = obj.findIndex(user => user.name === 'User2')
console.log (findeUserIndex);


const data = [
    {name: "Ann", age: 24},
    {name: "Bred", age: 27},
    {name: "Grace", age: 21},
    {name: "Alex", age: 30},
    {name: "Robby", age: 25}
];

let avg = data.reduce ((r, i) => r + i.age, 0) / (data.length || 1)
console.log (avg);


const users = [
    { name: 'User1', age: 40, budget: 210000},
    { name: 'User2', age: 16, budget: 151000},
    { name: 'User3', age: 24, budget: 17000},
    { name: 'User4', age: 27, budget: 18000},
    { name: 'Iser5', age: 18, budget: 19000},
    { name: 'User6', age: 19, budget: 3000},
]


const Budget123 = users
.filter(user => user.budget > 20000)
.map(user => {
    return {
        info: `${user.name} (${user.age})`,
        budget: user.budget
    }
})
console.log (Budget123);



const more18 = users
.filter(user => user.age > 18)
.map(user => {
    return {
        budget: user.budget
    }
})
console.log (more18);