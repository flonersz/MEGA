
var wave1 = document.getElementById('wave1')
var wave1 = document.getElementById('wave2')
var wave1 = document.getElementById('wave3')
var wave1 = document.getElementById('wave4')

window.addEventListener('scroll', function(){
    var scrolling = window.scrollY

    wave1.style.backgroundPositionX = 400 + scrolling * 4 + 'px'
    wave1.style.backgroundPositionX = 300 + scrolling * -4 + 'px'
    wave1.style.backgroundPositionX = 200 + scrolling * 2 + 'px'
    wave1.style.backgroundPositionX = 100 + scrolling * -2 + 'px'
})

var wave2 = document.getElementById('wave5')
var wave2 = document.getElementById('wave6')
var wave2 = document.getElementById('wave7')
var wave2 = document.getElementById('wave8')

window.addEventListener('scroll', function(){
    var scrolling = window.scrollY

    wave2.style.backgroundPositionX = 400 + scrolling * 4 + 'px'
    wave2.style.backgroundPositionX = 300 + scrolling * -4 + 'px'
    wave2.style.backgroundPositionX = 200 + scrolling * 2 + 'px'
    wave2.style.backgroundPositionX = 100 + scrolling * -2 + 'px'
})

var wave3 = document.getElementById('wave9')
var wave3 = document.getElementById('wave10')
var wave3 = document.getElementById('wave11')
var wave3 = document.getElementById('wave12')

window.addEventListener('scroll', function(){
    var scrolling = window.scrollY

    wave3.style.backgroundPositionX = 400 + scrolling * 4 + 'px'
    wave3.style.backgroundPositionX = 300 + scrolling * -4 + 'px'
    wave3.style.backgroundPositionX = 200 + scrolling * 2 + 'px'
    wave3.style.backgroundPositionX = 100 + scrolling * -2 + 'px'
})
