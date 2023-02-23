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

///4.5-2

function Calculator() {
    this.read = () => {
        this.a = 12;
        this.b = 13;
    };
    this.sum = () => this.a + this.b;
    this.mul = () => this.a * this.b;
}

let calc = new Calculator();
calc.read();
console.log(calc.mul());

///4.5-3

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => this.value += 2; ///+prompt("прибавить: ")
}

let acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value);