console.log(pow(3, 2.2));
function pow(x, n) {
    if ((n % 1 != 0) || (n < 1)) {
        return "Здесь так не принято";
    } else {
        let i = 0;
        let res = 1;
        while (i < n) {
            res *= x;
            i++;
        }
        return res;
    }
}