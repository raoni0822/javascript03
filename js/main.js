
const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');


const MAIN_SLIDE_NUM = document.querySelector('.num');


//top banner
const TOP_BANNER_CLOSE = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_CLOSE);

const TOP_BANNER_SLIDE_OPTION = {
    loop: true,
    pagination: {
        el: ".dots",
        clickable: true,
    },
}

const TOP_BANNER_SLIDE = new Swiper('.topBanner', TOP_BANNER_SLIDE_OPTION);





//gnb
const HD_WRAP = document.querySelector('#header .hdWap');

const HD_WRAP_HANDLER = () => {
    let SCT = window.scrollY;
    //console.log('스크롤양:', SCT);
    //HD_WRAP.classList.toggle('on');

    // if (SCT > 0) {
    //     HD_WRAP.classList.add('on');
    // } else {
    //     HD_WRAP.classList.remove('on');
    // }
    SCT > 0 ? HD_WRAP.classList.add('on') : HD_WRAP.classList.remove('on');
}

window.addEventListener('scroll', HD_WRAP_HANDLER);





//mainslide





//swiper의 함수 옵션
const MAIN_VISUAL_SLIDE_OPTION = {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    // navigation: {
    //     nextEl: "#mainVisual .arrows>div:nth-child(1)",
    //     prevEl: "#mainVisual .arrows>div:nth-child(2)",
    // },

    //3.페이지 이동을 할 때 idx를 받아서 메뉴바에 on 붙이기
    on: {
        slideChangeTransitionStart: function () {
            console.log(this, this.realIndex, MAIN_SLIDE_NAV_LI);

            let idx = this.realIndex;
            let total = this.slides.length;

            MAIN_SLIDE_NAV_LI.forEach(it => it.classList.remove('on'));
            MAIN_SLIDE_NAV_LI[idx].classList.add('on'); //첫페이지부터 on을 붙인다...

            const A = idx + 1;
            const B = total - 2;
            MAIN_SLIDE_NUM.innerHTML = `<strong>${A < 10 ? 0 : ""}${A}</strong> / <span>${B < 10 ? 0 : ""}${B}</span>`;
        }
    }

}


const MAIN_VISUAL_SLIDE = new Swiper('.mainSlide', MAIN_VISUAL_SLIDE_OPTION);
const MAIN_VISUAL_SLIDE_ARROWS = document.querySelectorAll('#mainVisual .arrows>div');
//console.log(MAIN_VISUAL_SLIDE_ARROWS[0]);




//1.페이지 이동만 하는 함수
MAIN_VISUAL_SLIDE_ARROWS[0].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slidePrev();
})

MAIN_VISUAL_SLIDE_ARROWS[1].addEventListener('click', () => {
    MAIN_VISUAL_SLIDE.slideNext();
})




//<<이벤트의 위임...? e.target>>
//const MAIN_SLIDE_NAV = document.querySelector('#mainVisual .slide_nav');
//const MAIN_SLIDE_NAV_LI = document.querySelectorAll('#mainVisual .slide_nav>li');


//2.메뉴 바안에서 일어나는 함수만....
MAIN_SLIDE_NAV_HANDLER = e => {
    e.preventDefault(); //새로고침 곧 이벤트를 막는 명령어....

    //::on 다 없애기 -> 위에 있는 foreach와 겹침 --> 그래서 삭제!!
    // for (let i = 0; i < MAIN_SLIDE_NAV_LI.length; i++) {
    //     MAIN_SLIDE_NAV_LI[i].classList.remove('on');
    // }

    //::클릭한 이것 on 붙이기 -> 위에 있는 foreach와 겹침 --> 그래서 삭제!!
    //console.log(e.target); //내가 클릭하는 그것... 이벤트의 결과값...
    const TG = e.target.parentElement;
    //console.log(TG);
    //TG.classList.add('on');

    //::클릭한 이것의 index 받아와서 슬라이드 페이지 이동
    const I = [...MAIN_SLIDE_NAV_LI].indexOf(TG); //배열에서 "해당하는 요소의 번호 = ondexOf()" 받아오기
    //console.log([...MAIN_SLIDE_NAV_LI]);
    //console.log(I)
    MAIN_VISUAL_SLIDE.slideTo(I + 1);
}

MAIN_SLIDE_NAV.addEventListener('click', MAIN_SLIDE_NAV_HANDLER);




//slide


const PF_LEFT_SLIDE_OPTION = {
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    //freeMode: true,
    // autoplay: {
    //     delay: 3000,
    // },
}

const PF_LEFT_SLIDE = new Swiper('.pf_left_slide', PF_LEFT_SLIDE_OPTION);


const PF_RIGHT_SLIDE_OPTION = {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,
}

const PF_RIGHT_SLIDE = new Swiper('.pf_right_slide', PF_RIGHT_SLIDE_OPTION);

PF_LEFT_SLIDE.controller.control = PF_RIGHT_SLIDE;
PF_RIGHT_SLIDE.controller.control = PF_LEFT_SLIDE;



