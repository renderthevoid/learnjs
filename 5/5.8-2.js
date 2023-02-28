let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let timeReadMessages = new WeakMap();

timeReadMessages.set(messages[1], new Date('February 27, 2023 16:23:30'));

console.log(timeReadMessages.get(messages[1]));