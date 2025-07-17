// JS for restaurant menu 

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
}