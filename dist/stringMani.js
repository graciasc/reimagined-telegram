"use strict";
// Js methods that make this easier .replace .concat
//remove __ and put your name
var profession = "My Name is __ and I am a developer for a living";
var pro1 = profession.replace('__', 'Nav');
console.log(pro1);
// add this welcome to the beginning of the welcome string
var welcome = "To Whom this may concern";
var wel1 = "Welcome";
var wel2 = wel1.concat(welcome);
console.log(wel2);
// remove World from string below
var HelloWorld = "Hello World";
var str = HelloWorld.replace("World", "");
console.log(str);
//intermediate
// add Sir to the beginning of each string in the array
var names = ["Billy", "John", "James", "Peter"];
// with the new array return all strings in the array. Ex: Sir Billy Sir John
