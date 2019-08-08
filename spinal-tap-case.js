/* 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // iterate string, starting from 1, not 0
  // replace spaces, uppercase letters, unserscores with a dash
  for (let i = 1; i < str.length; i++) {
    if (str[i] === '_' || str[i] === str[i].toUpperCase()) {
      str.replace(str[i], '-')
    }
  }
}

spinalCase('AllThe-small Things')
