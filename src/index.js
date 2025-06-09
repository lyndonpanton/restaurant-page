import "./styles.css";

import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import Footer from "./Footer";

function emptyTab() {
    let main = document.getElementsByTagName("main")[0];
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function setTabStyling(e) {
    let tabButtons = document.getElementsByClassName("tab-button");

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("tab-button-selected");
    }

    e.target.classList.add("tab-button-selected");
}

function showHomeTab(e) {
    emptyTab();
    setTabStyling(e);
    Home();
}

function showMenuTab(e) {
    emptyTab();
    setTabStyling(e);
    Menu();
}

function showContactTab(e) {
    emptyTab();
    setTabStyling(e);
    Contact();
}

let homeTabButton = document.getElementsByClassName("tab-button")[0];
let menuTabButton = document.getElementsByClassName("tab-button")[1];
let contactTabButton = document.getElementsByClassName("tab-button")[2];

homeTabButton.addEventListener("click", showHomeTab);
menuTabButton.addEventListener("click", showMenuTab);
contactTabButton.addEventListener("click", showContactTab);

const click = new Event("click");
homeTabButton.dispatchEvent(click);

Footer();

console.log("Webpack has been configured successfully");
