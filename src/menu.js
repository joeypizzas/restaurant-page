// JS for restaurant menu 

import garlicKnotsImage from "./assets/garlic_knots.png";
import meatballsImage from "./assets/meatballs.png";
import arugulaSaladImage from "./assets/arugula_salad.png";
import tomatoPieImage from "./assets/tomato_pie.png";
import mozzarellaImage from "./assets/mozz_pie.png";
import pepperoniImage from "./assets/pepperoni_pie.png";

export function addMenuPage() {
    const element = document.getElementById("content");

    const menuPage = document.createElement("div");
    menuPage.id = "menu-page";
    menuPage.classList = "page";

    const menuPageHeader = document.createElement("div");
    menuPageHeader.id = "menu-page-header";
    menuPageHeader.classList = "page-header";
    menuPage.appendChild(menuPageHeader);

    const menuPageHeaderText = document.createElement("div");
    menuPageHeaderText.id = "menu-page-header-text";
    menuPageHeaderText.classList = "page-header-text";
    menuPageHeaderText.textContent = "Joey's Pizzas";
    menuPageHeader.appendChild(menuPageHeaderText);

    const menuIntro = document.createElement("div");
    menuIntro.id = "menu-intro";
    menuIntro.classList = "page-section";
    menuPage.appendChild(menuIntro);

    const menuIntroHeader = document.createElement("div");
    menuIntroHeader.id = "menu-intro-header";
    menuIntroHeader.classList = "page-section-header";
    menuIntro.appendChild(menuIntroHeader);

    const menuIntroHeaderText = document.createElement("div");
    menuIntroHeaderText.id = "menu-intro-header-text";
    menuIntroHeaderText.classList = "page-section-header-text";
    menuIntroHeaderText.textContent = "Menu";
    menuIntroHeader.appendChild(menuIntroHeaderText);

    const svgNS = "http://www.w3.org/2000/svg";
    const menuSVG = document.createElementNS(svgNS, "svg");
    menuSVG.setAttribute("xmlns", svgNS);
    menuSVG.setAttribute("width", "30");
    menuSVG.setAttribute("height", "30");
    menuSVG.setAttribute("viewBox", "0 0 24 24");
    menuSVG.setAttribute("fill", "none");
    menuSVG.setAttribute("stroke", "#c0392b");
    menuSVG.setAttribute("stroke-width", "2");
    menuSVG.setAttribute("stroke-linecap", "round");
    menuSVG.setAttribute("stroke-linejoin", "round");
    menuSVG.setAttribute("class", "menu-svg");
    const paths = [
        "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
        "M7 2v20",
        "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
    ];
    paths.forEach(d => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        menuSVG.appendChild(path);
    });
    menuIntroHeader.appendChild(menuSVG);

    const menuIntroText = document.createElement("div");
    menuIntroText.id = "menu-intro-text";
    menuIntroText.classList = "page-section-text";
    menuIntroText.textContent = "Joey's menu keeps it simple and bold—classic apizza favorites made with top-shelf ingredients and no shortcuts.";
    menuIntro.appendChild(menuIntroText);

    const menuAppetizers = document.createElement("div");
    menuAppetizers.id = "menu-appetizers";
    menuAppetizers.classList = "page-section";
    menuPage.appendChild(menuAppetizers);

    const appetizersHeader = document.createElement("div");
    appetizersHeader.id = "appetizers-header";
    appetizersHeader.classList = "page-section-header";
    menuAppetizers.appendChild(appetizersHeader);

    const appetizersHeaderText = document.createElement("div");
    appetizersHeaderText.id = "appetizers-header-text";
    appetizersHeaderText.classList = "page-section-header-text";
    appetizersHeaderText.textContent = "Appetizers";
    appetizersHeader.appendChild(appetizersHeaderText);

    const appetizersSVG = document.createElementNS(svgNS, "svg");
    appetizersSVG.setAttribute("xmlns", svgNS);
    appetizersSVG.setAttribute("width", "30");
    appetizersSVG.setAttribute("height", "30");
    appetizersSVG.setAttribute("viewBox", "0 0 24 24");
    appetizersSVG.setAttribute("fill", "none");
    appetizersSVG.setAttribute("stroke", "#c0392b");
    appetizersSVG.setAttribute("stroke-width", "2");
    appetizersSVG.setAttribute("stroke-linecap", "round");
    appetizersSVG.setAttribute("stroke-linejoin", "round");
    appetizersSVG.setAttribute("class", "appetizers-svg");
    const appetizersPaths = [
        "M7 21h10",
        "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",
        "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
        "m13 12 4-4",
        "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
    ];
    appetizersPaths.forEach(d => {
        const path1 = document.createElementNS(svgNS, "path");
        path1.setAttribute("d", d);
        appetizersSVG.appendChild(path1);
    });
    appetizersHeader.appendChild(appetizersSVG);

    const appetizersGarlicKnots = document.createElement("div");
    appetizersGarlicKnots.id = "appetizers-garlic-knots";
    appetizersGarlicKnots.classList = "menu-item";
    menuAppetizers.appendChild(appetizersGarlicKnots);

    const appetizersGarlicKnotsName = document.createElement("div");
    appetizersGarlicKnotsName.id = "appetizers-garlic-knots-name";
    appetizersGarlicKnotsName.classList = "page-section-text";
    appetizersGarlicKnotsName.textContent = " ";
    const garlicKnotsStrong = document.createElement("strong");
    garlicKnotsStrong.textContent = "Garlic Knots - ";
    const garlicKnotsNormalText = document.createTextNode("Fresh-baked, brushed with garlic butter, served with house red sauce - $6");
    appetizersGarlicKnotsName.appendChild(garlicKnotsStrong);
    appetizersGarlicKnotsName.appendChild(garlicKnotsNormalText);
    appetizersGarlicKnots.appendChild(appetizersGarlicKnotsName);

    const appetizersGarlicKnotsImage = document.createElement("img");
    appetizersGarlicKnotsImage.id = "appetizers-garlic-knots-image";
    appetizersGarlicKnotsImage.classList = "menu-item-image";
    appetizersGarlicKnotsImage.src = garlicKnotsImage;
    appetizersGarlicKnotsImage.alt = "Garlic Knots";
    appetizersGarlicKnots.appendChild(appetizersGarlicKnotsImage);


}