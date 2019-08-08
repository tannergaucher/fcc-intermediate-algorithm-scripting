/* 
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

PASS
*/

function translatePigLatin(str) {
  const strArr = str.split('')

  //  find the index of the first vowel
  const firstVowelIndex = strArr.findIndex(
    el => el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u'
  )

  // handle no vowels
  if (firstVowelIndex === -1) return `${str}ay`

  //   if str starts with a vowel
  if (firstVowelIndex === 0) {
    strArr.push('way')
    const answer = strArr.join('')

    return answer
  } else {
    // slice all consonants before firstVowelIndex
    const consonantCluser = strArr.slice(0, firstVowelIndex)
    const base = strArr.slice(firstVowelIndex)
    base.push(consonantCluser)
    base.push('ay')
    const answer = base.flat().join('')

    return answer
  }
}

translatePigLatin('eight')
