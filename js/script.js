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

    $('#hamb').click(function(){
        $('#ham-gnb').fadeToggle(300);
    })
    $('#ham-gnb>li>a').click(function(){
        $('#ham-gnb').fadeToggle(300);
    })

    $('.skills').myskillbar({});

});// jQ


// 버튼누르면 해당구역으로 슬라이드 pc/태블릿 버전
const header = document.getElementById('header');
const jeffTop = document.getElementById('Jeffery').offsetTop;
const portTop = document.getElementById('portfolio').offsetTop;
const contTop = document.getElementById('contact').offsetTop;
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
        case 1 : window.scrollTo({top:jeffTop, behavior:'smooth' })
        break;
        case 2 : window.scrollTo({top:portTop , behavior:'smooth'})
        break;
        case 3 : window.scrollTo({top:contTop , behavior:'smooth'})
    }
}

// 버튼 누르면 해당구역으로 슬라이드 모바일버전
function transMoPage(n){
    switch(n){
        case 0 : window.scrollTo({top:0, behavior:'smooth'})
        break;
        case 1 : window.scrollTo({top:jeffTop, behavior:'smooth' })
        break;
        case 2 : window.scrollTo({top:portTop , behavior:'smooth'})
        break;
        case 3 : window.scrollTo({top:contTop , behavior:'smooth'})
    }
    hamb.classList.toggle('act');
}

window.addEventListener('scroll', function(){
    if(this.window.scrollY < jeffTop){
        for(let i = 0 ; i < trans.length ; i++){
            trans[i].classList.remove('active');
        };
        trans[0].classList.add('active');
    }
    else if(jeffTop <= this.window.scrollY && this.window.scrollY < portTop){
        for(let i = 0 ; i < trans.length ; i++){
            trans[i].classList.remove('active');
        };
        trans[1].classList.add('active');
    }
    else if(portTop <= this.window.scrollY && this.window.scrollY < contTop){
        for(let i = 0 ; i < trans.length ; i++){
            trans[i].classList.remove('active');
        };
        trans[2].classList.add('active');
    }
    else if(contTop <= this.window.scrollY){
        for(let i = 0 ; i < trans.length ; i++){
            trans[i].classList.remove('active');
        };
        trans[3].classList.add('active');
    }
})

function scrollUp(){
    window.scrollTo({top:0, behavior: 'smooth'});
}

const hamb = document.getElementById('hamb');
function hambOn(){
    
    hamb.classList.toggle('act');
}