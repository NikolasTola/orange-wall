const html = document.querySelector('html');
const botaoDarkMode = document.querySelector('#checkbox__botaoDarkMode');

botaoDarkMode.addEventListener('change', function(){
    html.classList.toggle('light-mode');
});