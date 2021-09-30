let cafe = document.getElementById('cafe')
let bootcamp = document.getElementById('bootcamp')
let flexbox = document.getElementById('flexbox')
let cafebut = document.getElementById('cafebut')
let bootbut = document.getElementById('bootbut')
let flexbut = document.getElementById('flexbut')

cafe.style.height = '50px'
flexbox.style.height = '50px'
bootcamp.style.height = '50px'

let reveal = function(e) { 
         if (e.style.height === '50px') {
             e.style.height = '300px'}
         else {
             e.style.height = '50px'
         }
     };

cafebut.addEventListener('click', e =>{reveal(cafe)})
bootbut.addEventListener('click', e =>{reveal(bootcamp)})
flexbut.addEventListener('click', e =>{reveal(flexbox)})
