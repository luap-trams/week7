let sentence = 'The quick brown fox jumps over the lazy dog'

//change to uppercas3e
sentence = sentence.toUpperCase()

//change to lowercase

sentence = sentence.toLowerCase()

//the length of the str
let strLength = sentence.length

console.log(strLength)
console.log(sentence)

//the first character
let firstChar = sentence[0]
console.log(firstChar)

//the tenth character
let tenthChar = sentence[9]
console.log(tenthChar)

//the character at 25
let char22 = sentence.charAt(22)
console.log(char22)

//add cat to the str
let cat = 'and cat'
let catStr = sentence.concat(cat)

//replace dog with goat
let goatStr = sentence.replace('dog', 'goat')
console.log(goatStr)

//replace all the with that
console.log(sentence.replaceAll('the', 'that'))


//repeat 5 times
console.log(sentence.repeat(5))

//cut out 'some str'
console.log(sentence.slice(0, sentence.indexOf('fox')+3))

//cut from jump to the end of the str
console.log(sentence.slice(sentence.indexOf('jump'),sentence.length))

//convert a str to an array
console.log(sentence.split(''))
  

//convert to str
let num = 255
console.log(num.toString(16))

//does the str contain fox
console.log(sentence.includes('fox'))
console.log(sentence.includes('samuel'))

//whether it start with a particular str
console.log(sentence.startsWith('goat'))

//whether it ends with a particular str
console.log(sentence.endsWith('the'))

