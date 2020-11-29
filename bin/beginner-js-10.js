#!/usr/bin/env node

// from <https://youtu.be/EQMPAaAo6Fc>

// remember, var is function-scoped.
// this file is essentially one function
var hello = "Hello";
console.log(hello);
hello = "Hello world";
console.log(hello);

// using let (block scoped)
if (true) {
    let world = "Hello, World";
    console.log(world);
}

// const cannot be changed
const aaron = "Aaron";
console.log(aaron);