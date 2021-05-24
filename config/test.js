/*
Hello everyone, here is my solution for Challenge 8, it was quite hard to discover :X

||I broke the code into an Object with each frequency of appearance, and then I got the most common number from this object.

function turnIntoObj(array) {
  let obj = {}
  for (let item of array) obj[item] = 0
  return obj
}

function findMostCommon(frequencyObj) {
  let result = Math.max(...Object.keys(frequencyObj))
  let max = Math.max(...Object.values(frequencyObj))

  for (let [key, val] of Object.entries(frequencyObj)) {
    if (val === max && Number(key) <= result) result = key
  }
  return result
}

function mostCommon(array) {
  if(array.length === 0) return undefined

  let frequencyObj = turnIntoObj(array)
  for (let item of array) frequencyObj[item] += 1

  return findMostCommon(frequencyObj)
}
||

// { '1': 2, '2': 1, '3': 1, '4': 3 }
// { '0': 2, '3': 1, '8': 1, '-1': 2 }


console.log(mostCommon([1, 2, 3, 4, 4, 4, 1])) // expected: 4
console.log(mostCommon([-1, -1, 0, 3, 8, 0, -10, -10, -200,-200 ])) // expected: -1
console.log(mostCommon([])) // expected undefined
*/

/*
Write a function formatNumber
formatNumber has one parameter n, a number
formatNumber should return the number formatted as a readable string, inserting a comma (",") as a thousands separator. If the number n is an integer, add .0 to the formatted string, otherwise, print the decimals as they are.

Example:


// function addZero(stringNum) {
//   console.log(stringNum[stringNum.length - 2])
//   return stringNum[stringNum.length - 2] !== '.' 
//     ? `${stringNum}.0`: stringNum
// }

// And here is my solution for Challenge 9

|| function addZero(lastNum) {
  return lastNum ? lastNum : '0'
}

function formatNumber(num) {
  let splitNumber =  String(num).split('.')
  let reverseNumber = splitNumber[0].split('').reverse()

  let firstNumber = reverseNumber.map((item, index, array) => {
    if (index === array.length - 1) return item

    return (index + 1) % 3 === 0 ? `,${item}` : item 
  }).reverse().join('')

  return `${firstNumber}.${addZero(splitNumber[1])}`
} 

// I noticed that if you put a huge number, JS will round it to a smaller number, for example:
// formatNumber(22222222222222222.222)) //
// The expected is "22,222,222,222,222,222.222"
// But the result will be "22,222,222,222,222,224.0"

// this happens because there is a limit of integers that Js can work with, well at least this was what I found on google about this problem 
// this link has more information about it: https://stackoverflow.com/questions/23706933/javascript-tostring-limits
||


console.log(formatNumber(1)) //Expected "1.0"
console.log(formatNumber(1000.23)) //Expected "1,000.23"
console.log(formatNumber(23082342.3285)) //Expected 23,082,342.3285
console.log(formatNumber(230845452342)) //Expected 23,082,342.3285
console.log(formatNumber(230845455642.2133)) //Expected 23,082,342.3285
console.log(formatNumber(22222222222222222.222)) //Expected 23,082,342.3285
Hello everyone, I'm a little late, but here's my attempt to challenge 14
A lovely Sunday to everyone!

||function dropRepeats(array) {
  return array.filter((item, i, arr) => item !== arr[i - 1])
}||  

console.log(dropRepeats([1, 1, 2, 3, 3, 2, 1]) )
// returns [1, 2, 3, 2, 1]
console.log(dropRepeats(['hi', 'there', 'there', 2, 1, 1, 'hi']))
// returns ['hi', 'there', 2, 1, 'hi']
console.log(dropRepeats([]))
// returns []

Write a function printInBox which takes an array of strings.
printInBox returns undefined.
printInBox should log each element of the string to the console, with all the words surrounded by a box. The box should leave at least 2 spaces between the edge of the box and the longest word. The words should all be left-aligned.

Example:
printInBox(['hello', 'there', 'my', 'friend']);
Should log:


Hello everyone, here's my attempt to challenge 17
Challenge :one: :eight: (Thursday, May 20): 

Write a function squareDigits that accepts one parameters n, a number.

Return the number that results from concatenating the square of every digit of n

----------------------------------------------------------------------------------------
Hello everyone, here's my attempt to challenge 18

||function squareDigits(number) {
  return `${number}`.split('').reduce((acc, item) => {
    return acc.concat(item**2)
  }, '')
}||


*/

let a = 20;  
let b = a;  
a = 10; 
console.log(a, b)


