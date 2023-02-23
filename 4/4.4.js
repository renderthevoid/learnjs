///4.4-1
//выведет ошибку, потому что this ни на что не указывает в данном случае

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

///4.4-3
let ladder = {
    step: 0,    
    showStep() {
        console.log(this.step);
        return this;
    },
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
}
ladder.up().up().down().showStep().down().showStep();