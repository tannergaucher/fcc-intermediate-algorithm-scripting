/* 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

PASS
*/

function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetIndex = alphabet.indexOf(str[0])
  let stringIndex = 0

  for (let i = alphabetIndex; i < str.length + alphabetIndex; i++) {
    if (str[stringIndex] !== alphabet[i]) {
      return alphabet[i]
    }

    stringIndex++
  }

  return undefined
}

fearNotLetter('abce')
