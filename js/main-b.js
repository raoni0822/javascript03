//버튼 on 붙이기
const TOP_BANNER = document.querySelector('.top_banner');
const TOP_BANNER_BTN = document.querySelector('.top_banner i');

const TOP_BANNER_CLOSE = () => {
    TOP_BANNER.classList.add('on');
}

TOP_BANNER_BTN.addEventListener('click', TOP_BANNER_CLOSE);





//tabmenu 만들기
const TAB_MENU = document.querySelectorAll('.tab_menu>li');
const TAB_CONTENT = document.querySelectorAll('.tab_content>li')
//유사배열로 html을 선택하였음.
//console.log(TAB_MENU);

// TAB_MENU[0].addEventListener('click', function () {
//     TAB_CONTENT[0].classList.add('on');
//     TAB_CONTENT[1].classList.remove('on');
//     TAB_CONTENT[2].classList.remove('on');
// })
// TAB_MENU[1].addEventListener('click', function () {
//     TAB_CONTENT[1].classList.add('on');
//     TAB_CONTENT[0].classList.remove('on');
//     TAB_CONTENT[2].classList.remove('on');
// })
// TAB_MENU[2].addEventListener('click', function () {
//     TAB_CONTENT[2].classList.add('on');
//     TAB_CONTENT[1].classList.remove('on');
//     TAB_CONTENT[0].classList.remove('on');
// })

TAB_MENU.forEach((it, idx) => {
    it.addEventListener('click', () => {
        TAB_MENU.forEach(it => {
            it.classList.remove('on');
        })
        TAB_MENU[idx].classList.add('on');


        // for (i = 0; i < TAB_CONTENT.length; i++) {
        //     TAB_CONTENT[i].classList.remove('on');
        // }
        //foreach로 쓰면,,,
        TAB_CONTENT.forEach(it => {
            it.classList.remove('on');
        })
        TAB_CONTENT[idx].classList.add('on');
    })
    //console.log(it, idx);
})







//swipe 기능 구현
new Swiper('.mainVisual', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

const SUB_TEXT = ['제품01', '제품02', '제품03', '제품04', '제품05'];

const SUB_SLIDE = new Swiper('.subslide', {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".dots",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' bb">' + SUB_TEXT[index] + "</span>";
        },
    },
})

const LEFT_ARROW = document.querySelector('.xi-arrow-left');
const RIGHT_ARROW = document.querySelector('.xi-arrow-right');

LEFT_ARROW.addEventListener('click', () => {
    SUB_SLIDE.slidePrev(4000, console.log(111));
})

