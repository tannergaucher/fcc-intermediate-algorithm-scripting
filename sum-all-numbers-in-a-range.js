/* 
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. 

PASS
*/

function sumAll(arr) {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  let sum = 0

  for (let i = min; i <= max; i++) {
    sum += i
  }

  return sum
}

sumAll([4, 1])
