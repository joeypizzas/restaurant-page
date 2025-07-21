// Main JS for the restaurant page

// Import CSS
import "./style.css";       

// Import page functions from each module
import { addHomePage } from "./home.js";
import { addMenuPage } from "./menu.js";
import { addAboutPage } from "./about.js";

// Remove current page and deselect previously selected button
function removeCurrentPage() {
    const currentPage = document.querySelector(".page");
    if (currentPage) {
        currentPage.remove();
    }
    const currentSelectedButton = document.querySelector(".is-selected");
    if (currentSelectedButton) {
        currentSelectedButton.classList.remove("is-selected");
        currentSelectedButton.style.backgroundColor = "#c0392b";
    }
}

const navButtons = document.querySelectorAll(".nav-button");
navButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "#27ae60";
    });
    button.addEventListener("mouseout", () => {
        if (!button.classList.contains("is-selected")) {
            button.style.backgroundColor = "#c0392b";
        }
    });
});

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("mousedown", () => {
    if (!homeButton.classList.contains("is-selected")) {
        homeButton.style.backgroundColor = "#c0392b";
    }
});
homeButton.addEventListener("mouseup", () => {
    homeButton.style.backgroundColor = "#27ae60";
    removeCurrentPage();
    addHomePage();
});

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("mousedown", () => {
    if (!menuButton.classList.contains("is-selected")) {
        menuButton.style.backgroundColor = "#c0392b";
    }
});
menuButton.addEventListener("mouseup", () => {
    menuButton.style.backgroundColor = "#27ae60";
    removeCurrentPage();
    addMenuPage();
});

const aboutButton = document.querySelector("#about-button");
aboutButton.addEventListener("mousedown", () => {
    if (!aboutButton.classList.contains("is-selected")) {
        aboutButton.style.backgroundColor = "#c0392b";
    }
});
aboutButton.addEventListener("mouseup", () => {
    aboutButton.style.backgroundColor = "#27ae60";
    removeCurrentPage();
    addAboutPage();
});

addHomePage();

