"use strict";
const salutation = (name, age) => {
    console.log(`Hello my names is ${name} i have ${age} years old`);
};
const jhon = {
    age: 25,
    name: "jhon doe",
    salutation: salutation,
};
console.log(jhon.salutation(jhon.name, jhon.age));
