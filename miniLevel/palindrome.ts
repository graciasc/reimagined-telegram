// A palindrome is a word that can be flipped and represent the same word
// ex: level, radar, wow, noon

function palindromeTest( word: string) : boolean {

// check if word is a palidrone and return true or false
    return false
}


function simplerPalindroneTest( word: string): boolean {
    const caseSenstive = word.toLowerCase()
    const reversedWord = caseSenstive.split('').reverse().toString().replace(/,/gm, '')

    if(caseSenstive === reversedWord) {
        return true
    }
    return false 
}


// call function below
const firstTest = palindromeTest('level') // true
const secondTest = palindromeTest('malayalam') // true
const thirdTest = palindromeTest('soon') // false

// log results below
