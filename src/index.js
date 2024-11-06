import "./styles.css"
import createHomePage from "./home";
import createMenuPage from "./menu";
import createAboutPage from "./about";

createHomePage();

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener('click', () => {
    clearContent();
    createHomePage();
})
menu.addEventListener('click', () => {
    clearContent();
    createMenuPage();
})
about.addEventListener('click', () => {
    clearContent();
    createAboutPage();
})

function clearContent() {
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content")
    if (pageContent) {
        content.removeChild(pageContent);
    }
}