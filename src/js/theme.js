const themeOpen = document.getElementById('theme-opener');
const themeClose = document.getElementById('theme-closer')
const body = document.querySelector('body');
const themeMenu = document.querySelector('.themes-container');
const toggler = document.querySelector('.toggler');
const indicator = document.getElementById('indicator');
const colorPicker = document.querySelectorAll('.color-btn');



const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    body.classList.add(savedTheme);
    indicator.classList.toggle('active');
}

const savedColor = localStorage.getItem('color');
if(savedColor){
    document.querySelector(':root').style.setProperty('--mainColor', savedColor);
}


toggler.addEventListener('click', function () {
    body.classList.toggle('light-theme');
    indicator.classList.toggle('active');

    const currentTheme = body.classList.contains('light-theme')? 'light-theme' : '';
    localStorage.setItem('theme', currentTheme);
})


// ********** Color picker **********

colorPicker.forEach(color => {
    color.addEventListener('click', function(){

        const dataColor = this.getAttribute('data-color');       

        document.querySelector(':root').style.setProperty('--mainColor', dataColor);

        localStorage.setItem('color', dataColor);
    })
})
   
    


// ********** Close and open theme container **********


themeOpen.addEventListener('click', function () {   
    var width = document.body.clientWidth; 
    themeMenu.classList.add('active');

    if(width >600){
        body.style.paddingRight = '300px';
    }    
})


 themeClose.addEventListener('click', function () {
    themeMenu.classList.remove('active');
    body.style.paddingRight = '0px';
 })