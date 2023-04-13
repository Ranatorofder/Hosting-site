let nev = document.querySelector(".nevbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {

        nav.classList.add("header-scrolled ");
    }

    else {
        nav.classList.remove("header-scrolled ");
    }
}