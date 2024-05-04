// let name = "Joe"
// function storeNames() { return name; }
// There's an error because name is used in other parts of this coding language

let message: string = 'Hello World';
console.log(message);

// The error is caught in compile time, unlike in Javascript
const obj = {width: 10, height: 15};
const area = obj.width * obj.heightadsdad;

// Typescript gives context and lets you know ahead of time what you are doing
let amount = 10;
amount = "Joe";
console.log(typeof amount);