var allButtons;

function enableCookies() {
    localStorage.setItem("hasCookies", true);
    hideBanner();
    showYouTubeVideo();
}

function disableCookies() {
    localStorage.setItem("hasCookies", false);
    hideBanner();
}

function hideBanner() {
    var banner = document.getElementById("cookieBannerID");
    banner.style.display = 'none';
}

function showBanner() {
    var banner = document.getElementById("cookieBannerID");
    banner.style.display = 'block';
}

function showYouTubeVideo() {
    var video = document.getElementById("youTubeVideoID");
    video.style.display = 'block';
}

function hideCookieNotifier(){
    var notifier = document.getElementById("cookieNotifierID");
    notifier.style.display = 'none';
}

function checkCookiesAccepted() {
    if (localStorage.getItem("hasCookies") == "true") {
        showYouTubeVideo();
        hideBanner();
        hideCookieNotifier();
    }
    else {
        showBanner();
    }
}

function toggleMenu() {
    var nav = document.getElementById("topnavID");
    allButtons = nav.firstElementChild.firstElementChild.getElementsByTagName("li");
    if (nav.className === "topnav") {
        nav.classList.add("responsive", true);
        animate();
    }
    else
        nav.className = "topnav";
}

function animate() {
    for (var i = 0; i < allButtons.length - 1; i++) {
        allButtons[i].style.opacity = "0";
        allButtons[i].style.transitionDuration = "unset";
        allButtons[i].style.transitionDelay = "unset";
    }

    sleep(60).then(() => {
        for (var i = 0; i < allButtons.length - 1; i++) {
            allButtons[i].style.transitionDelay = String((i + 1) * 0.05) + "s";
            allButtons[i].style.transitionDuration = "0.5s";
            allButtons[i].style.opacity = "1";
        }
    });
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));

};









