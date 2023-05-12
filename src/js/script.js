const themeOpen = document.getElementById('theme-opener');
const body = document.getElementsByTagName('body');

themeOpen.addEventListener('click', function () {
    document.body.style.setProperty('--mainColor', 'var(--purple)');

})