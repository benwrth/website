// JavaScript which is required globally across the whole site
// I AM NOT A PRO JS CODER - Some of these may not be the most efficient way of doing things, but it works (most of the time)
// (C) Ben Worthington

// Selects random header image + saves for session
window.onload = selectImg;

var images = new Array("assets/img/house-lake.jpg", "assets/img/city.jpg", "assets/img/rocky-beach.jpg", "assets/img/trees-lake.jpg", "assets/img/valley.jpg", "assets/img/trees-sea.jpg", "assets/img/mainland-sea.jpg");

function selectImg() {
    if ("headerImage" in sessionStorage) {
        document.getElementById('headerImage').style.backgroundImage="url(" + sessionStorage.getItem("headerImage") + ")";
    } else {
        let selector = Math.floor(Math.random() * images.length);
        sessionStorage.headerImage = images[selector];
        document.getElementById('headerImage').style.backgroundImage="url(" + sessionStorage.getItem("headerImage") + ")";
    }

    if (sessionStorage.openOptns == "true") {
        options.style.display = "block";
        sessionStorage.removeItem("openOptns");
    }
}

function resetImg() {
    sessionStorage.removeItem("headerImage");
    let selector = Math.floor(Math.random() * images.length);
    sessionStorage.headerImage = images[selector];
    document.getElementById('headerImage').style.backgroundImage="url(" + sessionStorage.getItem("headerImage") + ")";
    document.getElementById('headerImage').innerText = '';
}


// Sends user to correct maps app depending on OS
function mapsSelector() {

var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod']

  if 
    ((macosPlatforms.indexOf(platform) !== -1) || 
    (iosPlatforms.indexOf(platform) !== -1))
    window.open("https://maps.apple.com/?address=Winsford,%20Cheshire%20West%20and%20Chester,%20England&auid=9277515448203726663&ll=53.192542,-2.531306&lsp=6489&q=Winsford&_ext=Ch8KBQgEEOEBCgQIBRADCgQIBhADCgQIChALCgQIVRAJEiYp1srfGF2VSkAx6jtkb859BMA5GbuOgvGaSkBBpepoZnfSA8BQAg%3D%3D&t=h");
    else
    window.open("https://maps.google.com/maps/place/Winsford/@53.189393,-2.5549344,13z/&amp;ll=");
}