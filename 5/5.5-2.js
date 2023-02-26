function filterRange(arr, a, b) {
    let array = arr;
    return array.filter(item => item >= a && item <= b);
}

let array = [3, 2, 6, 4];
console.log(filterRange(array, 1, 4));
console.log(array);
