let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    return users.reduce((a, b) => a + b.age, 0) / users.length;
}

console.log(getAverageAge(arr));