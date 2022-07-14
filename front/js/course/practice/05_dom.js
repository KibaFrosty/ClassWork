// console.log (document.body)
// console.log (document.documentElement)


// const bodyElement = document.body
// console.log (bodyElement.firstChild);
// console.log  (bodyElement.lastChild);
// console.log (bodyElement.body.lastChild);


// const childNodes = document.body.childNodes
// console.log (childNodes);
// console.log (document.body.hasChildNodes());


// const children = document.body.children
// console.log (children);

// const prevSiblingNode = bodyElement.prevSibling
// const nextSiblingNode = bodyElement.nextSibling
// const parentNode = bodyElement.parentNode

// console.log (prevSiblingNode);
// console.log (nextSiblingNode);
// console.log (parentNode);


// console.log (document.querySelectorAll ('.sub_list'));
// console.log (document.querySelectorAll ('li'));


// const elem = document.querySelectorAll ('.sub_list')
// console.log (elem[1]);

// for (const el of elem) {
//     console.log (el + 'test');
// }

// elem.forEach(el => {
//     console.log (el);
// })


// console.log (document.querySelector('.lists_list'));

// console.log (document.getElementById('identify'));

// const staticCollection = document.querySelectorAll('.sub_list')
// const liveColliction = document.getElementsByClassName('sub_list')

// console.log (staticCollection);
// console.log (liveColliction);

// const changeCollectionLive = document.querySelector ('.sub_list')
// changeCollectionLive.insertAdjacentHTML('beforeend', '<li class="sub_list">New</li>') 


// const sub = document.querySelector('.sub_sub')
// console.log (sub.closest('.sub_list'));


// const name = 'Kiba'
// const inner = document.querySelector('.lesson_text')
// inner.innerHTML = `<h1>Hello, my name is ${name}</h1>`

// console.log (inner);


// const createElement = document.createElement('div')
// createElement.innerHtml = `Hello, world`

// console.log (createElement);


// const lessonElement = document.querySelector('.lesson_text')
// lessonElement.prepend(createElement)


// const childNodes = document.header.childNodes
// console.log (childNodes);

const headerElement = document.querySelector('.header')
console.log (headerElement.firstElementChild);

const idElements = document.querySelectorAll('[id]')
console.log (idElements);
