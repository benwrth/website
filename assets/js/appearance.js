// JavaScript which controls whether the page displays in light or dark mode
// By standard, uses localStorage or matches system (however can be changed on more menu)
// (C) Ben Worthington

if ("appearance" in localStorage) {
    console.log ("Key found")
    if (localStorage.getItem("appearance") === "light") {
        document.body.classList.toggle("light")
    }
    if (localStorage.getItem("appearance") === "dark") {
        document.body.classList.reset
    }
} else {
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', event => {
    document.body.classList.toggle("light");
    });
}

function setLightMode() {
    document.body.classList.add("light");
    localStorage.appearance = "light";
    console.log("Light Mode Only")
}

function setDarkMode() {
    document.body.classList.remove("light");
    localStorage.appearance = "dark";
    console.log("Dark Mode Only")
}

function setMatchSystem() {
    delete localStorage.appearance;
    sessionStorage.openOptns = true;
    location.reload()
    console.log("Matching System")
}