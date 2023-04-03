$(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop()>300){
           $('#scrollUp').fadeIn();
        }else{
           $('#scrollUp').fadeOut();
        }
        if($(window).scrollTop()>100){
            $('#header').addClass('header-act');
        }else{
            $('#header').removeClass('header-act');
        }
     });
     $('.skills').myskillbar({});
});// jQ
const header = document.getElementById('header');
const introHeight = document.getElementById('intro').scrollHeight;
const jeffHeight = document.getElementById('Jeffery').scrollHeight

const trans = document.getElementsByClassName('trans');
trans[0].classList.add('active');
function transPage(n){
    for(let i = 0 ; i < trans.length ; i++){
        trans[i].classList.remove('active');
    };
    trans[n].classList.add('active');
    switch(n){
        case 0 : window.scrollTo({top:0, behavior:'smooth'})
        break;
        case 1 : window.scrollTo({top:introHeight, behavior:'smooth' })
        break;
        case 2 : window.scrollTo({top:introHeight+jeffHeight , behavior:'smooth'})
    }
}
window.addEventListener('scroll', function(){
    if(this.window.scrollY < introHeight-10){
        for(let i = 0 ; i < trans.length ; i++){
            trans[i].classList.remove('active');
        };
        trans[0].classList.add('active');
    }
    else if(this.window.scrollY >= introHeight-10){
        for(let i = 0 ; i < trans.length ; i++){
            trans[i].classList.remove('active');
        };
        trans[1].classList.add('active');
    }
})

function scrollUp(){
    window.scrollTo({top:0, behavior: 'smooth'});
}

function hambOn(){
    const hamb = document.getElementById('hamb');
    hamb.classList.toggle('act');
}