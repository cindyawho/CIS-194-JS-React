let numbers = [23, -1, 2, 5, 2, 4, 1, 212, 419, -20];

// ES5: filter() with function expression
//need to create a new array when filtering an array
let positives = numbers.filter(function(value) {
  return value >= 0;
});
console.log(positives);     
console.log(numbers);

// ES6+: filter() with arrow function
let positives_arrow = numbers.filter(value => value >= 0);
console.log(positives_arrow);     
console.log(numbers);


// filter() won't work on empty arrays
let empty_numbers = [];
let empty_filters = empty_numbers.filter(value => value >= 0);
console.log(empty_filters);     
console.log(empty_numbers);

// Apply both filter(), sort() to the array
let positives_ascending = numbers.filter(value => value >= 0).sort((c1, c2) => c1-c2);
console.log(positives_ascending);

//*****************MORE EXAMPLES************************//

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Filter out even numbers
const evenNumbers = numbers2.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


const fruits = ["apple", "cherry", "banana", "date"];
// Sort in alphabetical order
fruits.sort();
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]
// Sort in reverse alphabetical order
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // Output: ["date", "cherry", "banana", "apple"]


const originalArray = [3, 1, 2];
const sortedArray = [...originalArray].sort();
console.log(sortedArray); // Output: [1, 2, 3]
console.log(originalArray); // Output: [3, 1, 2]
