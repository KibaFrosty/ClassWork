function sum(a, b) {
    return a + b
}

const numSum =sum(5, 10)

console.log (numSum);


console.log(foo());
function foo() {return 10}


const args = summCallbackFunction(10, 20, callbackFunc)
console.log(args);

function callbackFunc() {
    console.log ('Test Callback func');
}

function summCallbackFunction(arg1, arg2, callback) {
    callback();
    return arg1 - arg2
}

const args1 = func123 (10, 10, 20)
console.log (args1)

function func123 (arg1, arg2, arg3) {
return arg1 / arg2 * arg3
}


// console.log (notHoisted)
// notHoisted();

// var notHoisted = function() {
//     console.log ('test');
// }

let math = {
    'func': function factorial(n) {
        console.log(n)
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n-1);
    }
};

math.func(10) 


const sumArrowFunction = (a, b, c) => {
    return a * b * c
}

const resultSumArrow = sumArrowFunction(2, 5, 10)
console.log (resultSumArrow);


const fruits = ['apple', 'banana', 'pinaple']

// const fresh = fruits.map(function(fruit) {
//     return `Cool ${fruit}`
// }) 

const fresh = fruits.map(fruit => `Cool ${fruit}`)
console.log(fresh)


const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', function() {
    console.log (this);
    this.style.color = 'blue'
    this.style.fontWeight = 'bold'

    setTimeout(()=>{
        console.log(this);
        
        this.style.color ='green'
        }, 2000)
})


// {funcNumber = function(num = 27) {
//     console.log('My old is ' + num);
// }}();

// funcNumber(30);

var a = 15;

(function() {
    var a = 25
    console.log (a);
})();

console.log (a);


const funcArgument = function(a, b) {
    console.log (arguments);
    return a - b
}

funcArgument(10, 7)


const User = function (name, age) {
    this.name = name
    this.age = age

    this.getFirstName = () => console.log (this.name)
    this.getAge = () => console.log (this.age)

    console.log(this)
}

const user = new User ('Kiba', 27)
const user2 = new User ('Mark', 24)
const user3 = new User ('Dima', 28)

console.log (user)
console.log (user.getFirstName())
console.log (user3)
console.log (user2.getAge())


function createCalc(arg) {
    return function() {
        console.log (10 * arg)
    }
}

const funcOne = createCalc(5)
funcOne()


// function generateUrl (domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }

// const comUrl = generateUrl('com')
// const ruUrl = generateUrl('ru')

// console.log(comUrl('google'));
// console.log(ruUrl('yandex'));


function MyNameIs (MyNAme) {
    return function(is) {
        return `My name${is} ${MyNAme}`
    }
}

const myName1 = MyNameIs('Mark')

console.log(myName1(' is'));
