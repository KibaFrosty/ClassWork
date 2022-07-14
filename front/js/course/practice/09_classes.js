// const Animal = {
//     name: 'Animal',
//     age: 10,
//     tail: true,
//     childrens: false
// }

// Animal.voice = 'VOICE'


// class Animal {
//     static type = 'ANIMAL'

//     constructor(options) {
//         this.name = options.name
//         this.age = options.age
//         this.tail = options.tail
//         this.childrens = options.childrens
//     }

//     voice() {
//         console.log('I am animal');
//     }
// }

// const animal = new Animal ({
//     name: 'Animal',
//     age: 10,
//     tail: true,
//     childrens: false
// })

// class Dog extends Animal {
//     static type = "Dog"

//     constructor (options) {
//         super(options)
//         this.color = options.color
//     }

//     bark() {
//         console.log('BARK BARK');
//     }

//     get ageNew(){
//         return this.age * 10
//     }

//     set ageNew(newAge) {
//         this.age = newAge
//     }
// }

// const dog = new Dog({
//     name: 'Dog',
//     age: 15,
//     tail: true,
//     childrens: false,
//     color: 'orange'
// })



class Person {
    static type = 'Person'

    constructor(options) {
        this.head = options.head
        this.eyes = options.eyes
        this.foot = options.foot
        this.leg = options.leg
    }

    voice() {
        console.log('I am Person');
    }
}

const person = new Person ({
    head: true,
    eyes: 2,
    foot: 2,
    leg: 2
})

class Mother extends Person {
    static type = "Mother"

    constructor (options) {
        super(options)
        this.car = options.car
        this.budget= options.budget
    }

    voice() {
        super.voice()
        console.log('i am mother');
    }
}

const mother = new Mother({
    head: true,
    eyes: 2,
    foot: 2,
    leg: 2,
    car: 'ferrari',
    budget: '100$'
})

class Child extends Mother {
    static type = "Child"

    constructor (options) {
        super(options)
        this.run = options.run
        this.hight= options.hight
    }

    voice() {
        super.voice()
        console.log('i am child');
    }
}

const child= new Child({
    head: true,
    eyes: 2,
    foot: 2,
    leg: 2,
    run: true,
    hight: 120
})