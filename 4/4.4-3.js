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