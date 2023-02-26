///4.5-1
let object = {
    name: "john"
};
function A() { 
    return object;
}
function B() { 
    return object;
}

let a = new A();
let b = new B();

console.log(a, b, a === b);