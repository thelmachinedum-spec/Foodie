// window.alert('welcome')

let header = document.querySelector('#header');
window.addEventListener('scroll', function(){
    if(scrollY > 10){
        header.style.backgroundColor = 'orange';
        header.classList.add('animate__fadeInDown')
    }else{
        header.style.backgroundColor = 'white';
        header.classList.remove('animate__fadeInDown')
    }
})

let moon = document.querySelector('#moon');
let bright = document.querySelector('#bright');
let sec1 = document.querySelector('#sec1')
let sec2 = document.querySelector('#sec2')
let sec3 = document.querySelector('#sec3')
let sec4 = document.querySelector('#sec4')
let sec5 = document.querySelector('#sec5')
let sec6 = document.querySelector('#sec6')
let sec7 = document.querySelector('#sec7')
let sec8 = document.querySelector('#sec8')
let sec9 = document.querySelector('#sec9')
let sec10 = document.querySelector('#sec10')
let sec11 = document.querySelector('#sec11')
let sec12 = document.querySelector('#sec12')

if(bright){
    bright.addEventListener('click', function(){
        bright.style.display = 'none';
        moon.style.display = 'block';
       

    })
}
if(moon){
    moon.addEventListener('click', function(){
        moon.style.display = 'none';
        bright.style.display = 'block';
    })
}