///5.4-2
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
console.log(styles.shift(0));
styles.unshift("Рэп", "Рэгги");
console.log(styles);