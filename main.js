const toggleBtn = document.querySelector('.navbar-toggle')
const menu = document.querySelector('.navbar-menu');
const icons = document.querySelector('.navbar-icons');

toggleBtn.addEventListener('click', ( ) =>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});






