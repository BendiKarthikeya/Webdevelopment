// console.log("happy Birthday");

// const item= [
//     {id:1,name,"one"};
//     {id:1,name,"two"};
// ];

// const item = itesm.map((intm.find=> o)

async function task1() {
    setTimeout(() => {
        console.log('task1');
    }, 1000);
}
async function task2() {
    console.log('task2');
}
async function start() {
    await task1();
    await task2();
    console.log('start');
}
start();
console.log("after start");
