///4.5-3

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => this.value += 2; ///+prompt("прибавить: ")
}

let acc = new Accumulator(1);
acc.read();
acc.read();
console.log(acc.value);