import "./styles.css";

import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";

function emptyTab() {
    let main = document.getElementsByTagName("main")[0];
    
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function showHomeTab() {
    emptyTab();
    Home();
}

function showMenuTab() {
    emptyTab();
    Menu();
}

function showContactTab() {
    emptyTab();
    Contact();
}

let homeTabButton = document.getElementsByClassName("tab-button")[0];
let menuTabButton = document.getElementsByClassName("tab-button")[1];
let contactTabButton = document.getElementsByClassName("tab-button")[2];

homeTabButton.addEventListener("click", showHomeTab);
menuTabButton.addEventListener("click", showMenuTab);
contactTabButton.addEventListener("click", showContactTab);

showHomeTab();

console.log("Webpack has been configured successfully");
