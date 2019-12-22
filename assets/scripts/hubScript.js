var progression = 1;
var highlightColor = 'rgba(255, 216, 0, 0.75)'
var popUpBGColor = 'rgba(0, 0, 0, 1)'

function open_PopUp(clickbox, episode) {
    if (episode <= progression)
    {
        highlight_box(clickbox);
        create_episodePopUp(String(episode));
    }
}

function highlight_box(clickbox) {
    clickbox.style.transitionDuration = '1s';
    clickbox.style.backgroundColor = highlightColor;
}

function create_episodePopUp(episodeStr)
{
    var popUp = document.getElementById('popUpBackground');
    popUp.style.transitionDuration = '1s'
    popUp.style.transitionDelay = '2s';
    popUp.style.backgroundColor = popUpBGColor;
    setTimeout(load_txtFile(episodeStr, document.getElementById('popUpBox')), 5000);
}

function check_Keyword(word) {
    if (word = 'example')
        progression++;
}

function load_txtFile(episodeStr, target) {
    var txtFile = new XMLHttpRequest();
    txtFile.open("GET", "assets/txt/episode"+episodeStr+".txt", true);
    txtFile.onreadystatechange = function () {
        if (txtFile.readyState === 4 && txtFile.status == 200) {
            content = txtFile.responseText;
        }
        target.innerHTML = content;
        target.classList.toggle("openBox");
    }
    txtFile.send(null);
}

function sleep()
{
    //coming soon
}

function check_searchBar() {
    progression++;
}