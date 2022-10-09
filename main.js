var myButtom = document.getElementById('goup');

window.onscroll = function () {
    'use strict';
    if (window.pageYOffset >=100) {
        myButtom.style.display = 'block';
    } else {
        myButtom.style.display = 'none';
    }
};

goup.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};