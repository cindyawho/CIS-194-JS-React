// let name = "Joe"
// function storeNames() { return name; }
// There's an error because name is used in other parts of this coding language
var message = 'Hello World';
console.log(message);

// Javascript still runs this code and doesn't care that there is an error in the next two lines
const obj = {width: 10, height: 15};
const area = obj.width * obj.heightadsdad;

// Again no error even though the next two lines can cause a lot of issues of overwriting variables of diff types
let amount = 10;
amount = "Joe";
console.log(typeof amount);
