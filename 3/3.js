function pow(x, n) {
    let result = 1;
    for(let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("Введите x",''); 
let n = prompt("Введите n",'');
if (n <= 0) {
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
  alert(pow(x, n));
}