const toggle = document.getElementById('toggle');
const body = document.getElementsByTagName('body');

toggle.addEventListener('click', function () {
    document.body.style.setProperty('--mainColor', 'var(--purple)');

})