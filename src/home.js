// JS for restaurant home page

function addHomePage() {
    const content = document.getElementById("content");

    const homePage = document.createElement("div");
    homePage.id = "home-page";

    const homePageHeader = document.createElement("div");
    homePageHeader.id = "home-page-header";
    homePage.appendChild(homePageHeader);

    const homePageHeaderText = document.createElement("div");
    homePageHeaderText.id = "home-page-header-text";
    homePageHeaderText.textContent = "Joey's Pizzas";
    homePageHeader.appendChild(homePageHeaderText);

    const homePageIntro = document.createElement("div");
    homePageIntro.id = "home-page-intro";
    homePageIntro.classList = "page-section";
    homePage.appendChild(homePageIntro);

    const introHeader = document.createElement("div");
    introHeader.id = "intro-header";
    introHeader.classList = "page-section-header";
    homePageIntro.appendChild(introHeader);

    const introHeaderText = document.createElement("div");
    introHeaderText.id = "intro-header-text";
    introHeaderText.classList = "page-section-header-text";
    introHeaderText.textContent = "Why Joey's Pizzas?";
    introHeader.appendChild(introHeaderText);

    const svgNS = "http://www.w3.org/2000/svg";
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
    pizzaSVG.setAttribute("id", "pizza-svg");
    const paths = [
        "m12 14-1 1",
        "m13.75 18.25-1.25 1.42",
        "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12",
        "M18.8 9.3a1 1 0 0 0 2.1 7.7",
        "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
    ];
    paths.forEach(d => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        pizzaSVG.appendChild(path);
    });
    introHeader.appendChild(pizzaSVG);

    const introText = document.createElement("div");
    introText.id = "intro-text";
    introText.classList = "page-section-text";
    introText.textContent = "For over 25 years, Joey's Pizzas has brought the legendary New Haven apizza style to the heart of New York City. Inspired by the coal-fired classics of Wooster Street, we're proud to serve up thin, charred crusts, bold tomato sauce, and just the right amount of cheese—crafted with tradition, served with attitude. Whether you're a die-hard apizza fan or trying it for the first time, Joey's is where NYC meets New Haven.";
    homePageIntro.appendChild(introText);

    const homePageHours = document.createElement("div");
    //start here tomorrow for hours section
}
