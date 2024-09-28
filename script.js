let menu = document.querySelector('#menu');
let headResponsive = document.querySelector('.headResponsive')

menu.addEventListener('click',()=>{
    headResponsive.classList.toggle('translateTransform');
})