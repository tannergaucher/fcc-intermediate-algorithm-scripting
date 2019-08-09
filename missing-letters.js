/* 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

PASS
*/

function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const alphabetStartIndex = alphabet.indexOf(str[0])
  let stringIndex = 0

  // Start iterating alphabet from index of str first letter.
  for (let i = alphabetStartIndex; i < str.length + alphabetStartIndex; i++) {
    const currentStringLetter = str[stringIndex]
    const currentAlphabetLetter = alphabet[i]

    if (currentStringLetter !== currentAlphabetLetter) {
      return currentAlphabetLetter
    }

    stringIndex++
  }

  return undefined
}

fearNotLetter('abce')
