// const openNav = () => {
//     document.getElementById('sidenav').setAttribute("style", "width:200px; z-index:10; transition: 0.5s;");
// }
// const closeNav = () => {
//     document.getElementById('sidenav').setAttribute("style", "width:0px; z-index:-1; transition: 0.5s;");
// }

const openDesc = () => {
    document.getElementById('desc').style.display = "block";
    document.getElementById('showAns').style.display = "none";
    document.getElementById('hideAns').style.display = "block";
}
const closeDesc = () => {
    document.getElementById('desc').style.display = "none";
    document.getElementById('hideAns').style.display = "none";
    document.getElementById('showAns').style.display = "block";
}
// const openReport = () => {
//     document.getElementById('reportPopup').classList.add("open_popup");
// }
// const closePopup = () => {
//     document.getElementById('reportPopup').classList.remove("open_popup");
// }

function navShow() {
    var show = document.getElementById('subMenu');
    var arr = document.getElementById('iconArr');
    if (show.style.display === 'none') {
        show.style.display = 'block';
        arr.style.transform = 'rotate(180deg)';
    } else {
        show.style.display = 'none';
        arr.style.transform = 'rotate(0deg)';
    }
}

