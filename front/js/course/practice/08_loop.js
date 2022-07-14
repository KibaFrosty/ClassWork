console.log ('first func');
console.log('sec func');

const time = 1000
setTimeout(()=>{
console.log(`Time out after ${time} sec!`);
}, time)

console.log('End func');



function timeoutOtherSeconds() {
    console.log('TimeoutOtherSeconds');
}

setTimeout(timeoutOtherSeconds, time)


// 1 2 12 13 3 4 11 5 6 9 10 7 8 14 15

console.log(1);

setTimeout(() =>{
    console.log(2);

    setTimeout(() => {
        console.log(3);
        console.log(4);
    })

    setTimeout(()=> {
        console.log(5);
        console.log(6);
    }, 0)

    setTimeout(()=> {
        console.log(7);
        console.log(8);
    }, 500)

    setTimeout(() => {
        console.log(9);
        console.log(10);
    }, 0)

    console.log(11);
}, 1000)

console.log(12);
console.log(13);

setTimeout(()=> {
    console.log(14);
    console.log(15);
}, 3000)
