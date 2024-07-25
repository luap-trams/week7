// Applying background color to the page
document.body.style.background = 'lime'
// Adding a text to the id:mad
const mad = document.getElementById('mad')
mad.textContent = 'Samuel'
// Selecting the first child element of ol and giving it a text
const qsel = document.querySelector('ol>:nth-of-type(1)')
qsel.textContent = 'Genesis'

const qsel9 = document.querySelector('ol>:nth-of-type(9)')
qsel9.textContent = 'Clara'
// In reference to the parent ol, target the 10 child element and give it a background color of white
const qselA10 = document.querySelectorAll('ol li')
qselA10[9].style.backgroundColor = 'white'
// style background 5,7 using class
const orangeCls = document.getElementsByClassName('orange')
orangeCls[2].style.backgroundColor = 'grey'
orangeCls[3].style.backgroundColor = 'black'
const tag = document.getElementsByTagName('li')
tag[3].textContent = 'Kamso'
// Styling gradient for the 9th element of ol
const bg_gradient = document.querySelectorAll('ol li')
bg_gradient[9].style.backgroundImage = 'linear-gradient(90deg, green 40%, white 41%, white 65%, Green 66%)'








