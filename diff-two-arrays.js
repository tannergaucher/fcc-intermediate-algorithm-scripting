/* 
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.

PASS
*/

function diffArray(arr1, arr2) {
  var newArr = []

  arr1.map(value => {
    if (arr2.indexOf(value) === -1) {
      newArr.push(value)
    }
  })

  arr2.map(value => {
    if (arr1.indexOf(value) === -1) {
      newArr.push(value)
    }
  })

  return newArr
}

diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4])
