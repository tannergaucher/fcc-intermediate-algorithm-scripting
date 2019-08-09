/* 
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

PASS
*/

function translatePigLatin(str) {
  const strArr = str.split('')

  //  Find the index of the first vowel.
  const firstVowelIndex = strArr.findIndex(
    el => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u'
  )

  // Handle no vowels.
  if (firstVowelIndex === -1) return `${str}ay`

  //   If str starts with a vowel,
  if (firstVowelIndex === 0) {
    // just add suffix.
    strArr.push('way')

    // Return a string.
    return strArr.join('')
  } else {
    // Get consonant cluster.
    const consonantCluser = strArr.slice(0, firstVowelIndex)
    // Slice all consonants before firstVowelIndex to make base array.
    const wordBaseArr = strArr.slice(firstVowelIndex)
    // Add consonant cluster back, at the end.
    wordBaseArr.push(consonantCluser)
    // Siffix it.
    wordBaseArr.push('ay')

    // Return a string.
    return wordBaseArr.flat().join('')
  }
}

translatePigLatin('eight')
