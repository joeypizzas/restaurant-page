// JS for restaurant menu 

import garlicKnotsImage from "./assets/garlic_knots.png";
import meatballsImage from "./assets/meatballs.png";
import arugulaSaladImage from "./assets/arugula_salad.png";
import tomatoPieImage from "./assets/tomato_pie.png";
import mozzarellaImage from "./assets/mozz_pie.png";
import pepperoniImage from "./assets/pepperoni_pie.png";

export function addMenuPage() {
    const content = document.getElementById("content");

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

    const appetizersMeatballPlate = document.createElement("div");
    appetizersMeatballPlate.id = "appetizers-meatball-plate";
    appetizersMeatballPlate.classList = "menu-item page-section-divider";
    menuAppetizers.appendChild(appetizersMeatballPlate);

    const appetizersMeatballPlateName = document.createElement("div");
    appetizersMeatballPlateName.id = "appetizers-meatball-plate-name";
    appetizersMeatballPlateName.classList = "page-section-text";
    appetizersMeatballPlateName.textContent = " ";
    const meatballStrong = document.createElement("strong");
    meatballStrong.textContent = "Meatball Plate - ";
    const meatballNormalText = document.createTextNode("Four house-made beef & pork meatballs in marinara, topped with pecorino - $9");
    appetizersMeatballPlateName.appendChild(meatballStrong);
    appetizersMeatballPlateName.appendChild(meatballNormalText);
    appetizersMeatballPlate.appendChild(appetizersMeatballPlateName);

    const appetizersMeatballPlateImage = document.createElement("img");
    appetizersMeatballPlateImage.id = "appetizers-meatball-plate-image";
    appetizersMeatballPlateImage.classList = "menu-item-image";
    appetizersMeatballPlateImage.src = meatballsImage;
    appetizersMeatballPlateImage.alt = "Meatball Plate";
    appetizersMeatballPlate.appendChild(appetizersMeatballPlateImage);

    const appetizersArugulaSalad = document.createElement("div");
    appetizersArugulaSalad.id = "appetizers-arugula-salad";
    appetizersArugulaSalad.classList = "menu-item page-section-divider";
    menuAppetizers.appendChild(appetizersArugulaSalad);

    const appetizersArugulaSaladName = document.createElement("div");
    appetizersArugulaSaladName.id = "appetizers-arugula-salad-name";
    appetizersArugulaSaladName.classList = "page-section-text";
    appetizersArugulaSaladName.textContent = " ";
    const arugulaStrong = document.createElement("strong");
    arugulaStrong.textContent = "Arugula Salad - ";
    const arugulaNormalText = document.createTextNode("Peppery arugula, shaved parmesan, lemon vinaigrette - $8");
    appetizersArugulaSaladName.appendChild(arugulaStrong);
    appetizersArugulaSaladName.appendChild(arugulaNormalText);
    appetizersArugulaSalad.appendChild(appetizersArugulaSaladName);

    const appetizersArugulaSaladImage = document.createElement("img");
    appetizersArugulaSaladImage.id = "appetizers-arugula-salad-image";
    appetizersArugulaSaladImage.classList = "menu-item-image";
    appetizersArugulaSaladImage.src = arugulaSaladImage;
    appetizersArugulaSaladImage.alt = "Arugula Salad";
    appetizersArugulaSalad.appendChild(appetizersArugulaSaladImage);

    const menuPizzas = document.createElement("div");
    menuPizzas.id = "menu-pizzas";
    menuPizzas.classList = "page-section";
    menuPage.appendChild(menuPizzas);

    const pizzasHeader = document.createElement("div");
    pizzasHeader.id = "pizzas-header";
    pizzasHeader.classList = "page-section-header";
    menuPizzas.appendChild(pizzasHeader);

    const pizzasHeaderText = document.createElement("div");
    pizzasHeaderText.id = "pizzas-header-text";
    pizzasHeaderText.classList = "page-section-header-text";
    pizzasHeaderText.textContent = "Pizzas";
    pizzasHeader.appendChild(pizzasHeaderText);

    const pizzaSVG = document.createElementNS(svgNS, "svg");
    pizzaSVG.setAttribute("xmlns", svgNS);
    pizzaSVG.setAttribute("width", "30");
    pizzaSVG.setAttribute("height", "30");
    pizzaSVG.setAttribute("viewBox", "0 0 24 24");
    pizzaSVG.setAttribute("fill", "none");
    pizzaSVG.setAttribute("stroke", "#c0392b");
    pizzaSVG.setAttribute("stroke-width", "2");
    pizzaSVG.setAttribute("stroke-linecap", "round");
    pizzaSVG.setAttribute("stroke-linejoin", "round");
    pizzaSVG.setAttribute("class", "pizza-svg");
    const pizzaPaths = [
        "m12 14-1 1",
        "m13.75 18.25-1.25 1.42",
        "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",
        "M18.8 9.3a1 1 0 0 0 2.1 7.7",
        "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
    ];
    pizzaPaths.forEach(d => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        pizzaSVG.appendChild(path);
    });
    pizzasHeader.appendChild(pizzaSVG);

    const pizzasTomatoPie = document.createElement("div");
    pizzasTomatoPie.id = "pizzas-tomato-pie";
    pizzasTomatoPie.classList = "menu-item";
    menuPizzas.appendChild(pizzasTomatoPie);

    const pizzasTomatoPieName = document.createElement("div");
    pizzasTomatoPieName.id = "pizzas-tomato-pie-name";
    pizzasTomatoPieName.classList = "page-section-text";
    pizzasTomatoPieName.textContent = " ";
    const tomatoPieStrong = document.createElement("strong");
    tomatoPieStrong.textContent = "Classic Tomato Pie - ";
    const tomatoPieNormalText = document.createTextNode("No cheese, just our signature crushed tomato sauce, garlic, and oregano - $20");
    pizzasTomatoPieName.appendChild(tomatoPieStrong);
    pizzasTomatoPieName.appendChild(tomatoPieNormalText);
    pizzasTomatoPie.appendChild(pizzasTomatoPieName);

    const pizzasTomatoPieImage = document.createElement("img");
    pizzasTomatoPieImage.id = "pizzas-tomato-pie-image";
    pizzasTomatoPieImage.classList = "menu-item-image";
    pizzasTomatoPieImage.src = tomatoPieImage;
    pizzasTomatoPieImage.alt = "Classic Tomato Pie";
    pizzasTomatoPie.appendChild(pizzasTomatoPieImage);

    const pizzasMozzarella = document.createElement("div");
    pizzasMozzarella.id = "pizzas-mozzarella";
    pizzasMozzarella.classList = "menu-item page-section-divider";
    menuPizzas.appendChild(pizzasMozzarella);

    const pizzasMozzarellaName = document.createElement("div");
    pizzasMozzarellaName.id = "pizzas-mozzarella-name";
    pizzasMozzarellaName.classList = "page-section-text";
    pizzasMozzarellaName.textContent = " ";
    const mozzarellaStrong = document.createElement("strong");
    mozzarellaStrong.textContent = "Mozzarella - ";
    const mozzarellaNormalText = document.createTextNode("Tomato sauce, whole milk mozz, and grated pecorino - $22");   
    pizzasMozzarellaName.appendChild(mozzarellaStrong);
    pizzasMozzarellaName.appendChild(mozzarellaNormalText);
    pizzasMozzarella.appendChild(pizzasMozzarellaName);

    const pizzasMozzarellaImage = document.createElement("img");
    pizzasMozzarellaImage.id = "pizzas-mozzarella-image";
    pizzasMozzarellaImage.classList = "menu-item-image";
    pizzasMozzarellaImage.src = mozzarellaImage;
    pizzasMozzarellaImage.alt = "Mozzarella Pie";
    pizzasMozzarella.appendChild(pizzasMozzarellaImage);

    const pizzasPepperoni = document.createElement("div");
    pizzasPepperoni.id = "pizzas-pepperoni";
    pizzasPepperoni.classList = "menu-item page-section-divider";
    menuPizzas.appendChild(pizzasPepperoni);

    const pizzasPepperoniName = document.createElement("div");
    pizzasPepperoniName.id = "pizzas-pepperoni-name";
    pizzasPepperoniName.classList = "page-section-text";
    pizzasPepperoniName.textContent = " ";
    const pepperoniStrong = document.createElement("strong");
    pepperoniStrong.textContent = "Pepperoni - ";
    const pepperoniNormalText = document.createTextNode("Mozzarella, tomato sauce, and cup-and-char pepperoni with crispy edges - $24");
    pizzasPepperoniName.appendChild(pepperoniStrong);
    pizzasPepperoniName.appendChild(pepperoniNormalText);
    pizzasPepperoni.appendChild(pizzasPepperoniName);

    const pizzasPepperoniImage = document.createElement("img");
    pizzasPepperoniImage.id = "pizzas-pepperoni-image";
    pizzasPepperoniImage.classList = "menu-item-image";
    pizzasPepperoniImage.src = pepperoniImage;
    pizzasPepperoniImage.alt = "Pepperoni Pie"; 
    pizzasPepperoni.appendChild(pizzasPepperoniImage);

    const menuDrinks = document.createElement("div");
    menuDrinks.id = "menu-drinks";
    menuDrinks.classList = "page-section";
    menuPage.appendChild(menuDrinks);
    
    const drinksHeader = document.createElement("div");
    drinksHeader.id = "drinks-header";
    drinksHeader.classList = "page-section-header";
    menuDrinks.appendChild(drinksHeader);

    const drinksHeaderText = document.createElement("div");
    drinksHeaderText.id = "drinks-header-text";
    drinksHeaderText.classList = "page-section-header-text";
    drinksHeaderText.textContent = "Drinks";
    drinksHeader.appendChild(drinksHeaderText);

    const drinksSVG = document.createElementNS(svgNS, "svg");
    drinksSVG.setAttribute("xmlns", svgNS);
    drinksSVG.setAttribute("width", "30");
    drinksSVG.setAttribute("height", "30");
    drinksSVG.setAttribute("viewBox", "0 0 24 24");
    drinksSVG.setAttribute("fill", "none");
    drinksSVG.setAttribute("stroke", "#c0392b");
    drinksSVG.setAttribute("stroke-width", "2");
    drinksSVG.setAttribute("stroke-linecap", "round");
    drinksSVG.setAttribute("stroke-linejoin", "round");
    drinksSVG.setAttribute("class", "drinks-svg");
    const drinksPaths = [
        "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
        "M5 8h14",
        "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",
        "m12 8 1-6h2"
    ];
    drinksPaths.forEach(d => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        drinksSVG.appendChild(path);
    });
    drinksHeader.appendChild(drinksSVG);

    const drinksCoke = document.createElement("div");
    drinksCoke.id = "drinks-coke";
    drinksCoke.classList = "menu-item";
    menuDrinks.appendChild(drinksCoke);

    const drinksCokeName = document.createElement("div");
    drinksCokeName.id = "drinks-coke-name";
    drinksCokeName.classList = "page-section-text";
    drinksCokeName.textContent = " ";
    const drinksCokeStrong = document.createElement("strong");
    drinksCokeStrong.textContent = "Coke, Diet Coke, Sprite – ";
    const drinksCokeNormalText = document.createTextNode("Ice cold, always classic - $3");
    drinksCokeName.appendChild(drinksCokeStrong);
    drinksCokeName.appendChild(drinksCokeNormalText);
    drinksCoke.appendChild(drinksCokeName);

    const drinksWine = document.createElement("div");
    drinksWine.id = "drinks-wine";
    drinksWine.classList = "menu-item page-section-divider";
    menuDrinks.appendChild(drinksWine);

    const drinksWineName = document.createElement("div");
    drinksWineName.id = "drinks-wine-name";
    drinksWineName.classList = "page-section-text";
    drinksWineName.textContent = " ";
    const drinksWineStrong = document.createElement("strong");
    drinksWineStrong.textContent = "House Red or White Wine – ";
    const drinksWineNormalText = document.createTextNode("Served by the glass or carafe - $8 glass / $24 carafe");
    drinksWineName.appendChild(drinksWineStrong);
    drinksWineName.appendChild(drinksWineNormalText);
    drinksWine.appendChild(drinksWineName);

    const drinksLemonade = document.createElement("div");
    drinksLemonade.id = "drinks-lemonade";
    drinksLemonade.classList = "menu-item page-section-divider";
    menuDrinks.appendChild(drinksLemonade);

    const drinksLemonadeName = document.createElement("div");
    drinksLemonadeName.id = "drinks-lemonade-name";
    drinksLemonadeName.classList = "page-section-text";
    drinksLemonadeName.textContent = " ";
    const drinksLemonadeStrong = document.createElement("strong");
    drinksLemonadeStrong.textContent = "Italian Lemonade – ";
    const drinksLemonadeNormalText = document.createTextNode("Fresh lemon, sparkling water, sugar, served over ice - $4");
    drinksLemonadeName.appendChild(drinksLemonadeStrong);
    drinksLemonadeName.appendChild(drinksLemonadeNormalText);
    drinksLemonade.appendChild(drinksLemonadeName);
    
    content.appendChild(menuPage);

    const menuPageSections = document.querySelectorAll(".page-section");
    menuPageSections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.borderColor = "#27ae60";
            const dividers = section.querySelectorAll(".page-section-divider");
            dividers.forEach(divider => {
                divider.style.borderColor = "#27ae60";
            });
            const svg = section.querySelector("svg");
            svg.style.stroke = "#27ae60";
        });
        section.addEventListener("mouseout", () => {
            section.style.borderColor = "#c0392b";
            const dividers = section.querySelectorAll(".page-section-divider");
            dividers.forEach(divider => {
                divider.style.borderColor = "#c0392b";
            });
            const svg = section.querySelector("svg");
            svg.style.stroke = "#c0392b";
        });
    });

    const pageHeaderText = document.querySelector(".page-header-text");
    pageHeaderText.addEventListener("mouseover", () => {
        pageHeaderText.style.borderColor = "#27ae60";
    });
    pageHeaderText.addEventListener("mouseout", () => {
        pageHeaderText.style.borderColor = "#c0392b";
    });
}