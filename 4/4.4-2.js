///4.4-2
let calculator = {
    read() {
        this.a = 12; ///+prompt("введите a", 0)
        this.b = 12; ///+prompt("введите b", 0)
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}
calculator.read();
console.log(calculator.mul());