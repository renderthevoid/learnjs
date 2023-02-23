///2.17-1 
let ask = (question, yes, no) => {
    return question ? yes : no;
}
console.log(ask("agree?", "yes", "no"));