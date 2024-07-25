// Applying background color to the page
document.body.style.background = 'yellow'
// Adding a text to the id:mad
const mad = document.getElementById('mad')
mad.textContent = 'This is Mad oooh'
// Selecting the first child element of ol and giving it a text
const qsel = document.querySelector('ol>:nth-of-type(1)')
qsel.textContent = 'getting it small small'

const qsel9 = document.querySelector('ol>:nth-of-type(9)')
qsel9.textContent = 'it looks like im getting it'
// In reference to the parent ol, target the 10 child element and give it a background color of white
const qselA10 = document.querySelectorAll('ol li')
qselA10[9].style.backgroundColor = 'white'
// style background 5,7 using class
const orangeCls = document.getElementsByClassName('orange')
orangeCls[2].style.backgroundColor = 'grey'
orangeCls[3].style.backgroundColor = 'black'
const tag = document.getElementsByTagName('li')
tag[3].textContent = 'This is really working'
const bg_gradient = document.querySelectorAll('ol li')
bg_gradient[9].style.backgroundImage = 'linear-gradient(90deg, green 40%, white 41%, white 65%, Green 66%)'








