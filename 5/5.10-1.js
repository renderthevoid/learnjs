let user = {
    name: "John",
    years: 30,
    isAdmin: true
};

let {name, years: age, isAdmin = false} = user;

console.log(`${name} ${age} ${isAdmin}`);