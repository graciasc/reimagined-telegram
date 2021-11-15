// A palindrome is a word that can be flipped and represent the same word
// ex: level, radar, wow, noon

function palindromeTest( word: string) : boolean {

// check if word is a palidrone and return true or false
    var word_len = word.length
    var mid_word = Math.floor(word_len / 2)

    for ( var i = 0; i < mid_word; i++){
        if (word_len[i] !== word_len[word_len - 1 - i]){
            return false;
        }
    }
    return true;
}


// call function below
const firstTest = palindromeTest('level')
const secondTest = palindromeTest('Malayalam')

// log results below
