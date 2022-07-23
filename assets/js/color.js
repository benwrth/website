// JavaScript which controls and selects the accent color of the page
// (C) Ben Worthington

window.onload = setColor();

function setColor() {
    let r = document.querySelector(':root');
    if ("color" in localStorage) {
        r.style.setProperty('--accent', "#" + localStorage.color);
        if (window.location.pathname == '/') {
            let x = document.getElementById('SAImage');
            x.src = "https://simpleanalyticsbadges.com/benwrth.com?mode=dark&radius=10&logo=" + localStorage.color + "&text=" + localStorage.color + "&background=none";
        }
    }
}

// Control the change of accent color around the site.
var r = document.querySelector(':root');

// Setting color in options
function setAccentBlue() {
    r.style.setProperty('--accent', '#0d6efd');
    console.log("Accent Blue Set");
    localStorage.color = "0d6efd";
    setColor()
}

function setAccentGreen() {
    r.style.setProperty('--accent', '#198754');
    console.log("Accent Green Set")
    localStorage.color = "198754";
    setColor()
}

function setAccentRed() {
    r.style.setProperty('--accent', '#dc3545');
    console.log("Accent Red Set")
    localStorage.color = "dc3545";
    setColor()
}

function setAccentOrange() {
    r.style.setProperty('--accent', '#fd7e14');
    console.log("Accent Orange Set")
    localStorage.color = "fd7e14";
    setColor()
}

function setAccentYellow() {
    r.style.setProperty('--accent', '#ffc107');
    console.log("Accent Yellow Set")
    localStorage.color = "ffc107";
    setColor()
}