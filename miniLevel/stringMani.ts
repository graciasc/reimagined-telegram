// Js methods that make this easier .replace .concat

//remove __ and put your name
const profession: string = "My Name is __ and I am a developer for a living";
let pro1 = profession.replace('__', 'Nav');
console.log(pro1);
// add this welcome to the beginning of the welcome string
const welcome: string = "To Whom this may concern";
let wel1 = "Welcome";
let wel2 = wel1.concat(welcome);
console.log(wel2);
// remove World from string below
const HelloWorld: string = "Hello World";

//intermediate

// add Sir to the beginning of each string in the array
const names: string[] = ["Billy", "John", "James", "Peter"];

// with the new array return all strings in the array. Ex: Sir Billy Sir John
