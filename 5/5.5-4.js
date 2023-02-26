function descendingSort(array) {
   return array.sort((a, b) => b - a);
}
let array = [5, 3, 1, 9, -10];
descendingSort(array);
console.log(array);