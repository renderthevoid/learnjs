function unique(arr) {
    return arr.filter((item, i) => arr.indexOf(item) === i);
}
  
let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
  
console.log(unique(strings) ); // кришна, харе, :-O