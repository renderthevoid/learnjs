function shuffle(array) {
    let index = array.length; 
    let value;
  
    while (0 !== index) {
  
      let random = Math.floor(Math.random() * index);
      index -= 1;
  
      value = array[index];
      array[index] = array[random];
      array[random] = value;
    }
  
    return array;
}
let array = [1, 2, 3];
console.log(shuffle(array));