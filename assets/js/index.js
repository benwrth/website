// JavaScript which is only required on the index page
// (C) Ben Worthington

// Powers 'more' button
function moreBtn() {
    let x = document.getElementById('more');
    if (x.style.display == 'none') {
        x.classList.add('fade-in')
        x.style.display = 'block';
    } else {
        x.classList.remove('fade-in')
        x.classList.add('fade-out')
        setTimeout(()=>{
         x.style.display = 'none';
         x.classList.remove('fade-out')
        },500)
    }
}

// Options Modal

function checkOptns() {
    if (sessionStorage.openOptns == "true") {
        options.style.display = "block";
        sessionStorage.removeItem("openOptns");
    }
}

var modal = document.getElementById("options");
var btn = document.getElementById("optionsBtn");
var closeBtn = document.getElementsByClassName("close-options")[0];

// Open Options
btn.onclick = function() {
    options.classList.add('fade-in')
    options.style.display = 'block';
    document.getElementById('more').style.display = 'none';
}

// Close Options
closeBtn.onclick = function() {
    options.classList.add('fade-out')
       setTimeout(()=>{
        options.style.display = 'none';
        options.classList.remove('fade-out')
       },500)
}

// Close when click outside of options
window.onclick = function(event) {
  if (event.target == options) {
    options.classList.add('fade-out')
    setTimeout(()=>{
     options.style.display = 'none';
     options.classList.remove('fade-out')
    },500)
  }
}  

function resetOptions(){
    localStorage.clear();
    location.reload();
}