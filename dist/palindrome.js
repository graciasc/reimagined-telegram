"use strict";
// A palindrome is a word that can be flipped and represent the same word
// ex: level, radar, wow, noon
function palindromeTest(word) {
    // check if word is a palidrone and return true or false
    var word_len = word.length;
    var mid_word = Math.floor(word_len / 2);
    for (var i = 0; i < mid_word; i++) {
        if (word[i] !== word[word_len - 1 - i]) {
            return false;
        }
    }
    return true;
}
function simplerPalindroneTest(word) {
    var caseSenstive = word.toLowerCase();
    var reversedWord = caseSenstive.split('').reverse().toString().replace(/,/gm, '');
    if (caseSenstive === reversedWord) {
        return true;
    }
    return false;
}
// call function below
var firstTest = palindromeTest('level'); // true
var secondTest = palindromeTest('malayalam'); // true
var thirdTest = palindromeTest('soon'); // false
// log results below
