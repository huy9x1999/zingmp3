//srocll--header
var wrapperScroll = document.querySelector('.main');
function scrollHeader() {
    let wrapperScroll = document.querySelector('.main');
    let nav = document.querySelector('.header-main');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if (wrapperScroll.scrollTop >= 20) {
        nav.classList.add('scroll-header');

    } else {
        nav.classList.remove('scroll-header')
    }
}
wrapperScroll.addEventListener('scroll', scrollHeader);
//banner

const banner = document.getElementById('gallery'),
    bannerItems = banner.querySelectorAll('.gallery__item'),
    btnNextBanner = banner.querySelector('.zm-gallery-next'),
    btnPrevBanner = banner.querySelector('.zm-gallery-prev');
//mảng tên class 
const tenclass = [
    "gallery__item--next", "gallery__item--last", "gallery__item--first", "gallery__item--previous", "gallery__item--selected"
]
//chọn item
function chooseItem(items) {
    items.forEach(element => {
        element.addEventListener('click', () => {
            let getClassName = element.getAttribute("class");
            let className = getClassName.slice(14);
            if (className == "gallery__item--selected") {
                console.log("mở popup");
            }
            else {
                updateClassName(element, className);
            }
        });
        // 
    });
}


function clickButtonNext() {
    let itemNext = banner.querySelector('.gallery__item--next');
    let getClassName = itemNext.getAttribute("class");
    let className = getClassName.slice(14);
    updateClassName(itemNext, className);
}

function clickButtonPrev() {
    let itemPrevious = banner.querySelector('.gallery__item--previous')
    let getClassName = itemPrevious.getAttribute("class");
    let className = getClassName.slice(14);
    updateClassName(itemPrevious, className);
}
function autoNextBanner() {
    setInterval(clickButtonNext, 4000);
}

chooseItem(bannerItems);
btnNextBanner.addEventListener('click', clickButtonNext);
btnPrevBanner.addEventListener('click', clickButtonPrev);
autoNextBanner();

function updateClassName(item, className) {
    let itemNext = banner.querySelector('.gallery__item--next');
    let itemLast = banner.querySelector('.gallery__item--last');
    let itemFirst = banner.querySelector('.gallery__item--first');
    let itemPrevious = banner.querySelector('.gallery__item--previous')
    let itemSelect = banner.querySelector('.gallery__item--selected');
    if (className == "gallery__item--previous") {
        //item next
        itemNext.classList.remove('gallery__item--next');
        itemNext.classList.add('gallery__item--last');

        //itemlast
        itemLast.classList.remove('gallery__item--last');
        itemLast.classList.add('gallery__item--first');

        // itemfirst
        itemFirst.classList.remove('gallery__item--first');
        itemFirst.classList.add('gallery__item--previous');

        //itemselect
        itemSelect.classList.remove('gallery__item--selected');
        itemSelect.classList.add('gallery__item--next');

    }
    else if (className == "gallery__item--next") {
        //itemlast
        itemLast.classList.remove('gallery__item--last');
        itemLast.classList.add('gallery__item--next');

        //itemfirst
        itemFirst.classList.remove('gallery__item--first');
        itemFirst.classList.add('gallery__item--last');

        // itemprivious
        itemPrevious.classList.remove('gallery__item--previous');
        itemPrevious.classList.add('gallery__item--first');

        //itemselect
        itemSelect.classList.remove('gallery__item--selected');
        itemSelect.classList.add('gallery__item--previous');
    }
    else {
        console.log('sai');
    }
    item.classList.remove(className);
    item.classList.add('gallery__item--selected');

    // sử lý gallery nav icon
    let itemNavIcons = banner.querySelectorAll('.gallery-nav-item');
    itemNavIcons.forEach(element => {
        element.classList.remove('nav-item-selected');
    });
    for (let index = 0; index < bannerItems.length; index++) {
        if (bannerItems[index] == item) {
            itemNavIcons[index].classList.add('nav-item-selected');
        }
    }
}



// playlist 

//variable
//-- playlist1
const playList_1 = document.getElementById('play-list-1'),
    itemPlays_1 = playList_1.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_1 = playList_1.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_1 = playList_1.querySelector('.zm-carousel-control-next');
var count_1 = itemPlays_1.length;

//--playList2
const playList_2 = document.getElementById('play-list-2'),
    itemPlays_2 = playList_2.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_2 = playList_2.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_2 = playList_2.querySelector('.zm-carousel-control-next');
var count_2 = itemPlays_2.length;

//--playList3
const playList_3 = document.getElementById('play-list-3'),
    itemPlays_3 = playList_3.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_3 = playList_3.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_3 = playList_3.querySelector('.zm-carousel-control-next');
var count_3 = itemPlays_3.length;

//--playList4
const playList_4 = document.getElementById('play-list-4'),
    itemPlays_4 = playList_4.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_4 = playList_4.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_4 = playList_4.querySelector('.zm-carousel-control-next');
var count_4 = itemPlays_4.length;

//--playList5
const playList_5 = document.getElementById('play-list-5'),
    itemPlays_5 = playList_5.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_5 = playList_5.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_5 = playList_5.querySelector('.zm-carousel-control-next');
var count_5 = itemPlays_5.length;

//--playList6
const playList_6 = document.getElementById('play-list-6'),
    itemPlays_6 = playList_6.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_6 = playList_6.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_6 = playList_6.querySelector('.zm-carousel-control-next');
var count_6 = itemPlays_6.length;

//--playList7
const playList_7 = document.getElementById('play-list-7'),
    itemPlays_7 = playList_7.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_7 = playList_7.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_7 = playList_7.querySelector('.zm-carousel-control-next');
var count_7 = itemPlays_7.length;

//--playList8
const playList_8 = document.getElementById('play-list-8'),
    itemPlays_8 = playList_8.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_8 = playList_8.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_8 = playList_8.querySelector('.zm-carousel-control-next');
var count_8 = itemPlays_8.length;
// singer section
const playList_9 = document.getElementById('zma-section'),
    itemPlays_9 = playList_9.querySelectorAll('.zm-carousel-item'),
    btnPrevPlay_9 = playList_9.querySelector('.zm-carousel-control-prev'),
    btnNextPlay_9 = playList_9.querySelector('.zm-carousel-control-next');
var count_9 = itemPlays_9.length;

//function 

function btnNextPlay(count, playList) {
    let zmCarousel = playList.querySelector('.zm-carousel__container');
    let btnNext = playList.querySelector('.zm-carousel-control-next');
    let listItems = playList.querySelectorAll('.zm-carousel-item');
    let btnPrev = playList.querySelector('.zm-carousel-control-prev');
    let ItemWidth = listItems[1].clientWidth;

    if (count >= 6) {
        count = count - 6;
        if (listItems.length % 6 == 0) {
            if (count > 6) {
                let doDai = (listItems.length - count) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                btnPrev.classList.remove('zm-disabled');
            }
            else {
                let doDai = (listItems.length - 6) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                btnPrev.classList.remove('zm-disabled');
                count = 0;
                if (count == 0) {
                    btnNext.classList.add('zm-disabled');
                }
            }
        }
        else {
            if (count > 6) {
                let doDai = (listItems.length - count) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                btnPrev.classList.remove('zm-disabled');
            }
            else if (count == 6) {
                let doDai = (listItems.length - count - 6) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                btnPrev.classList.remove('zm-disabled');
            }
            else {
                let doDai = (listItems.length - 6) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                btnPrev.classList.remove('zm-disabled');
                count = 0;
                if (count == 0) {
                    btnNext.classList.add('zm-disabled');
                }
            }
        }

    }
    return count;
}

function autoNextPlayList(count, playList) {
    let zmCarousel = playList.querySelector('.zm-carousel__container');
    let btnNext = playList.querySelector('.zm-carousel-control-next');
    let listItems = playList.querySelectorAll('.zm-carousel-item');
    let btnPrev = playList.querySelector('.zm-carousel-control-prev');
    let ItemWidth = listItems[1].clientWidth;
    setInterval(()=>{
        if (count >= 6) {
            count = count - 6;
            if (listItems.length % 6 == 0) {
                if (count > 6) {
                    let doDai = (listItems.length - count) * ItemWidth;
                    zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                    btnPrev.classList.remove('zm-disabled');
                    btnNext.classList.remove('zm-disabled');
                }
                else {
                    let doDai = (listItems.length - 6) * ItemWidth;
                    zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                    btnPrev.classList.remove('zm-disabled');
                    btnNext.classList.add('zm-disabled');
                    count = 0;
                }
            }
            else {
                if (count > 6) {
                    let doDai = (listItems.length - count) * ItemWidth;
                    zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                    btnPrev.classList.remove('zm-disabled');
                }
                else if (count == 6) {
                    let doDai = (listItems.length - count - 6) * ItemWidth;
                    zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                    btnPrev.classList.remove('zm-disabled');
                }
                else {
                    let doDai = (listItems.length - 6) * ItemWidth;
                    zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                    btnPrev.classList.remove('zm-disabled');
                    btnNext.classList.add('zm-disabled');
                    count = listItems.length
                }
            }
    
        }
        return count;
    },5000)
}

function btnPrevPlay(count, playList) {
    let zmCarousel = playList.querySelector('.zm-carousel__container');
    let listItems = playList.querySelectorAll('.zm-carousel-item');
    let btnPrev = playList.querySelector('.zm-carousel-control-prev');
    let btnNext = playList.querySelector('.zm-carousel-control-next');
    let ItemWidth = listItems[1].clientWidth;
    if (count <= listItems.length) {
        count = count + 6;
        if (listItems.length % 6 == 0) {
            if (count > (listItems.length - 6)) {
                zmCarousel.style.transform = "translate3d(-" + 0 + "px ,0px ,0px)";
                count = listItems.length;
                btnPrev.classList.add('zm-disabled');
                btnNext.classList.remove('zm-disabled');
                count = listItems.length;
            }
            else {
                let doDai = (listItems.length - count - 6) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                if (count >= listItems.length) {
                    count = listItems.length;
                }
                btnNext.classList.remove('zm-disabled');
            }
        }
        else {
            if (count > (listItems.length - 6)) {
                zmCarousel.style.transform = "translate3d(-" + 0 + "px ,0px ,0px)";
                count = listItems.length;
                btnPrev.classList.add('zm-disabled');
                btnNext.classList.remove('zm-disabled');
                count = listItems.length;
            }
            else if (count == (listItems.length - 6)) {
                let doDai = (listItems.length - count) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                if (count >= listItems.length) {
                    count = listItems.length;
                }
                btnNext.classList.remove('zm-disabled');
            }
            else {
                let doDai = (listItems.length - count - 6) * ItemWidth;
                zmCarousel.style.transform = "translate3d(-" + doDai + "px ,0px ,0px)";
                if (count >= listItems.length) {
                    count = listItems.length;
                }
                btnNext.classList.remove('zm-disabled');
            }
        }
    }
    return count;
}

//--function-1
function btnNextPlay1() {
    let count = count_1;
    btnNextPlay(count, playList_1);
    count_1 = btnNextPlay(count, playList_1);
}
function btnPrevPlay1() {
    let count = count_1;
    btnPrevPlay(count, playList_1);
    count_1 = btnPrevPlay(count, playList_1);
}

if (itemPlays_1.length <= 6) {
    btnNextPlay_1.classList.add('zm-display-none');
    btnPrevPlay_1.classList.add('zm-display-none');
}
else {
    btnNextPlay_1.addEventListener('click', btnNextPlay1);
    btnPrevPlay_1.addEventListener('click', btnPrevPlay1);
}
//--function-2
function btnNextPlay2() {
    let count = count_2;
    btnNextPlay(count, playList_2);
    count_2 = btnNextPlay(count, playList_2);
}
function btnPrevPlay2() {
    let count = count_2;
    btnPrevPlay(count, playList_2);
    count_2 = btnPrevPlay(count, playList_2);
}

if (itemPlays_2.length <= 6) {
    btnNextPlay_2.classList.add('zm-display-none');
    btnPrevPlay_2.classList.add('zm-display-none');
}
else {
    btnNextPlay_2.addEventListener('click', btnNextPlay2);
    btnPrevPlay_2.addEventListener('click', btnPrevPlay2);
}

//--function-3
function btnNextPlay3() {
    let count = count_3;
    btnNextPlay(count, playList_3);
    count_3 = btnNextPlay(count, playList_3);
}
function btnPrevPlay3() {
    let count = count_3;
    btnPrevPlay(count, playList_3);
    count_3 = btnPrevPlay(count, playList_3);
}

if (itemPlays_3.length <= 6) {
    btnNextPlay_3.classList.add('zm-display-none');
    btnPrevPlay_3.classList.add('zm-display-none');
}
else {
    btnNextPlay_3.addEventListener('click', btnNextPlay3);
    btnPrevPlay_3.addEventListener('click', btnPrevPlay3);
}

//--function-4
function btnNextPlay4() {
    let count = count_4;
    btnNextPlay(count, playList_4);
    count_4 = btnNextPlay(count, playList_4);
}
function btnPrevPlay4() {
    let count = count_4;
    btnPrevPlay(count, playList_4);
    count_4 = btnPrevPlay(count, playList_4);
}

if (itemPlays_4.length <= 6) {
    btnNextPlay_4.classList.add('zm-display-none');
    btnPrevPlay_4.classList.add('zm-display-none');
}
else {
    btnNextPlay_4.addEventListener('click', btnNextPlay4);
    btnPrevPlay_4.addEventListener('click', btnPrevPlay4);
}

//--function-5
function btnNextPlay5() {
    let count = count_5;
    btnNextPlay(count, playList_5);
    count_5 = btnNextPlay(count, playList_5);
}
function btnPrevPlay5() {
    let count = count_5;
    btnPrevPlay(count, playList_5);
    count_5 = btnPrevPlay(count, playList_5);
}

if (itemPlays_5.length <= 6) {
    btnNextPlay_5.classList.add('zm-display-none');
    btnPrevPlay_5.classList.add('zm-display-none');
}
else {
    btnNextPlay_5.addEventListener('click', btnNextPlay5);
    btnPrevPlay_5.addEventListener('click', btnPrevPlay5);
}

//--function-6
function btnNextPlay6() {
    let count = count_6;
    btnNextPlay(count, playList_6);
    count_6 = btnNextPlay(count, playList_6);
}
function btnPrevPlay6() {
    let count = count_6;
    btnPrevPlay(count, playList_6);
    count_6 = btnPrevPlay(count, playList_6);
}

if (itemPlays_6.length <= 6) {
    btnNextPlay_6.classList.add('zm-display-none');
    btnPrevPlay_6.classList.add('zm-display-none');
}
else {
    btnNextPlay_6.addEventListener('click', btnNextPlay6);
    btnPrevPlay_6.addEventListener('click', btnPrevPlay6);
}

//--function-7
function btnNextPlay7() {
    let count = count_7;
    btnNextPlay(count, playList_7);
    count_7 = btnNextPlay(count, playList_7);
}
function btnPrevPlay7() {
    let count = count_7;
    btnPrevPlay(count, playList_7);
    count_7 = btnPrevPlay(count, playList_7);
}

if (itemPlays_7.length <= 6) {
    btnNextPlay_7.classList.add('zm-display-none');
    btnPrevPlay_7.classList.add('zm-display-none');
}
else {
    btnNextPlay_7.addEventListener('click', btnNextPlay7);
    btnPrevPlay_7.addEventListener('click', btnPrevPlay7);
}

//--function-8
function btnNextPlay8() {
    let count = count_8;
    btnNextPlay(count, playList_8);
    count_8 = btnNextPlay(count, playList_8);
}
function btnPrevPlay8() {
    let count = count_8;
    btnPrevPlay(count, playList_8);
    count_8 = btnPrevPlay(count, playList_8);
}

if (itemPlays_8.length <= 6) {
    btnNextPlay_8.classList.add('zm-display-none');
    btnPrevPlay_8.classList.add('zm-display-none');
}
else {
    btnNextPlay_8.addEventListener('click', btnNextPlay8);
    btnPrevPlay_8.addEventListener('click', btnPrevPlay8);
}

//--function-9
function btnNextPlay9() {
    let count = count_9;
    btnNextPlay(count, playList_9);
    count_9 = btnNextPlay(count, playList_9);
}
function btnPrevPlay9() {
    let count = count_9;
    btnPrevPlay(count, playList_9);
    count_9 = btnPrevPlay(count, playList_9);
}
function autoNext9(){
    let count = count_9;
    autoNextPlayList(count, playList_9);
    count_9 = btnPrevPlay(count, playList_9);
}


if (itemPlays_9.length <= 6) {
    btnNextPlay_9.classList.add('zm-display-none');
    btnPrevPlay_9.classList.add('zm-display-none');
}
else {
    btnNextPlay_9.addEventListener('click', btnNextPlay9);
    btnPrevPlay_9.addEventListener('click', btnPrevPlay9);
    autoNext9();
    
}