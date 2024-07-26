// Applying background color to the page
document.body.style.background = 'orange'
// Adding a text to the id:mad
const mad = document.getElementById('mad')
mad.textContent = 'Samuel'
// Selecting the first child element of ol and giving it a text
const qsel = document.querySelector('ol>:nth-of-type(1)')
qsel.textContent = 'Genesis'
// Select the ninth child element of ol and give it a text
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
bg_gradient[9].style.backgroundImage = 'linear-gradient(90deg, green 33.33%, white 33.33%, white 66.67%, Green 66.67%)'








