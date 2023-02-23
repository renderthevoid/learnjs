///2.13-7
let n = 10;
number:
for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
        if ((i % j == 0)) {
            continue number;
        }
    } 
    console.log(i);
}
