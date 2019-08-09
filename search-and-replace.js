/* 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

PASS
*/

function myReplace(str, before, after) {
  // If before is uppercase,
  if (before[0] === before[0].toUpperCase()) {
    // make after uppercase.
    after = after[0].toUpperCase() + after.slice(1)
  }

  const re = new RegExp(before, 'g')

  return str.replace(re, after)
}

myReplace('His name is Tom', 'Tom', 'john')
