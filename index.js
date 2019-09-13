// ASYNC FUNCTIONS

// Simple Example
function scaryClown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 2000);
    });
}

async function msg() {
    const msg = await scaryClown();
    console.log('Message:', msg);
}

msg(); // Message: 🤡 <-- after 2 seconds

function who() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 200);
    });
}

function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurks');
        }, 300);
    });
}

function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shadows');
        }, 500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

msg(); // 🤡 lurks in the shadows <-- after 1 second


async function msg() {
    const [a, b, c] = await Promise.all([who(), what(), where()]);

    console.log(`${a} ${b} ${c}`);
}

msg(); // 🤡 lurks in the shadows <-- after 500ms


// Promise-Returning
async function hello() {
    return 'Hello Alligator!';
}

const b = hello();

console.log(b);

b.then(x => console.log(x)); // Hello Alligator!

hello().then(x => console.log(x)); // Hello Alligator!


// Different Forms

// Async Function Expression
const msg1 = async function () {
    const msg = await scaryClown();
    console.log('Message:', msg);
}

// Async Arrow Function
const msg2 = async () => {
    const msg = await scaryClown();
    console.log('Message:', msg);
}


// Error Handling
function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1); // 0 or 1, at random

        val ? resolve('Lucky!!') : reject('Nope 😠');
    });
}

async function msg3() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}

msg3(); // Lucky!!
msg3(); // Lucky!!
msg3(); // Lucky!!
msg3(); // Nope 😠
msg3(); // Lucky!!
msg3(); // Nope 😠
msg3(); // Nope 😠
msg3(); // Nope 😠
msg3(); // Nope 😠
msg3(); // Lucky!!


async function msg4() {
    const msg = await yayOrNay();
    console.log(msg);
}

msg4().catch(x => console.log(x));



function caserUpper(val) {
    return new Promise((resolve, reject) => {
        resolve(val.toUpperCase());
    });
}

async function msg5(x) {
    try {
        const msg = await caserUpper(x);
        console.log(msg);
    } catch (err) {
        console.log('Ohh no:', err.message);
    }
}

msg5('Hello'); // HELLO
msg5(34); // Ohh no: val.toUpperCase is not a function

/*
// Async Functions With Promise-Based APIS
async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map(user => user.username);

    console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');
// ["Bret", "Antonette", "Samantha", "Karianne", "Kamren", "Leopoldo_Corkery", "Elwyn.Skiles", "Maxime_Nienow", "Delphine", "Moriah.Stanton"]
*/