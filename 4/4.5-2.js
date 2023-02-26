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