//top banner
const TOP_BANNER = document.querySelector('#header .topBanner');
const TOP_BANNER_BTN = document.querySelector('#header i');

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