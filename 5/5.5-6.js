function Calculator() {
    this.operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    }

    this.calculate = str => {
        let arr = str.split(" ");
        let a = Number(arr[0]);
        let operation = arr[1];
        let b = Number(arr[2]);

        if (!this.operations[operation]) {
            return NaN;
        }
        return this.operations[operation](a, b);
    };

    this.addMethod = (newOperation, action) => {
        this.operations[newOperation] = action;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
let result1 = powerCalc.calculate("2 * 3");
console.log(result, result1); // 8