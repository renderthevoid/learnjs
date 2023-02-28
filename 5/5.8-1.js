let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMeassages = new WeakSet(); 

readMeassages.add(messages[0]);
readMeassages.add(messages[1]);


console.log(`Has the message from ${messages[0].from} been read? ${readMeassages.has(messages[0])}`);
console.log(`Has the message from ${messages[2].from} been read? ${readMeassages.has(messages[2])}`);

