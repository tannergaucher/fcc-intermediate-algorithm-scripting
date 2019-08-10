/* 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

PASS
*/

function pairElement(str) {
  const pairsArr = []
  const pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }

  // Iterate string. Push an array of current letter and it's pair to pairs array.
  for (let letter in str) {
    const currentLetter = str[letter]
    const pairLetter = pairs[letter]

    pairsArr.push(currentLetter, pairLetter)
  }

  return pairsArr
}

pairElement('ATCGA')
