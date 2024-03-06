//Lab Exercise: Classes, Objects

// Instruction 3 - create a new object
const darthVader = {
//  (a) 
    allegiance: "Empire",
//  (b)
    weapon: "lightsabre",
//  (c)
    sith: true
};

// Instruction 4 - access object properties
// (a)
console.log("Darth Vader\'s allegiance: ", darthVader.allegiance);
// (b)
console.log("Darth Vader\'s weapon: ", darthVader.weapon);
// (c)
console.log("Is Darth Vader a sith?: ", darthVader.sith);
// (d)
console.log("Darth Vader\'s Jedi: ", darthVader.jedi);
// (e)
console.log(Object.keys(darthVader).length); //Note: Object.keys is a function that takes an object and returns an array of the keys in it. By appending .length to it, we return the number of keys in the object.

// Instruction 5 - add to the map
// (a)
darthVader.children = 2;
// (b)
darthVader.childNames = ['Luke', 'Leia'];
// (c)
console.log("Darth Vader\'s amount of children: ", darthVader.children);
console.log("Darth\'s first child: ", darthVader.childNames[0]);
// Instruction 6 - iterate over the object
// (a)
for (var key in darthVader) {
    let value = darthVader[key];
    // (b)
    console.log(key, ":", value);
}

// Instruction 7 - manipulate the object
// (a), (b), (c), (d)

/*6. For this step, perform the following:
    a) Iterate over darthVader using a for...in loop that uses both the key and the value of each pair;
    b) Then, console-logging out each pair.

7. Manipulate the object by:
    a) Changing the value of allegiance to The light side and console-log darthVader;
    b) Deleting the key/value pair children of darthVader and console-log darthVader. Hint: use the code below:
        delete darthVader.children;
    c) De-structuring the object, setting a variable for each of the keys in the object to the corresponding value in the object:
        let {allegiance, weapon, sith, childNames} = darthVader;
    d) Lastly, clearing the darthVader object and console log it.*/