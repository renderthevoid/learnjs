function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}

let array = [5, 1, 8, 3];
filterRangeInPlace(array, 1, 3);
console.log(array);