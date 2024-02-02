var lupaAb = document.querySelector('.lupa-abrir')
var lupa = document.querySelector('.lupa-bar')
var logoh = document.querySelector('.logo-header h1')
var itemsCont = document.querySelector('.items-container')
function abrirLupa(){
    if(lupaAb = lupa.style.display = 'flex'){
        logoh.style.display = 'none'
        itemsCont.style.display ='none'
    }
}
lupaAb.addEventListener('click',abrirLupa)



const slider2 = document.querySelectorAll('.slider2')
const next2 = document.getElementById('next-btn2')


let currentSlide2 = 0

function hideSlider2(){
   slider2.forEach(item => item.classList.remove('on2'))
}

function showSlider2(){
   slider2[currentSlide2].classList.add('on2')
}

function nextSlider2(){
   hideSlider2()
   if(currentSlide2 == slider2.length -1){
       currentSlide2 = 0
   }else{
       currentSlide2++
   }
   showSlider2()
}

next2.addEventListener('click',nextSlider2)

var form = document.querySelector('.form')
var libera = document.querySelector('.LiberaLogin')

function AbrirLogin(){
    if(libera = form.style.display = 'flex'){
    }
}
libera.addEventListener('click', AbrirLogin)