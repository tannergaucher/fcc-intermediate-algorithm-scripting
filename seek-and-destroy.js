/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object.

PASS
*/

function destroyer(arr) {
  for (let i = 1; i < arguments.length; i++) {
    const currentDestroyer = arguments[i]
    arguments[0] = arguments[0].filter(num => num !== currentDestroyer)
  }

  return arr
}

destroyer([2, 3, 2, 3], 2, 3)
