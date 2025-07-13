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
    homePageHours.id = "home-page-hours";
    homePageHours.classList = "page-section";
    homePage.appendChild(homePageHours);

    const hoursHeader = document.createElement("div");
    hoursHeader.id = "hours-header";
    hoursHeader.classList = "page-section-header";
    homePageHours.appendChild(hoursHeader);

    const hoursHeaderText = document.createElement("div");
    hoursHeaderText.id = "hours-header-text";
    hoursHeaderText.classList = "page-section-header-text";
    hoursHeaderText.textContent = "Our hours";
    hoursHeader.appendChild(hoursHeaderText);
    
    const hoursSVG = document.createElementNS(svgNS, "svg");
    hoursSVG.setAttribute("xmlns", svgNS);
    hoursSVG.setAttribute("width", "30");
    hoursSVG.setAttribute("height", "30");
    hoursSVG.setAttribute("viewBox", "0 0 24 24");
    hoursSVG.setAttribute("fill", "none");
    hoursSVG.setAttribute("stroke", "#c0392b");
    hoursSVG.setAttribute("stroke-width", "2");
    hoursSVG.setAttribute("stroke-linecap", "round");
    hoursSVG.setAttribute("stroke-linejoin", "round");
    hoursSVG.setAttribute("id", "clock-svg");
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", "M12 6v6l4 2");
    hoursSVG.appendChild(path);
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", "12");
    circle.setAttribute("cy", "12");
    circle.setAttribute("r", "10");
    hoursSVG.appendChild(circle);
    hoursHeader.appendChild(hoursSVG);
    
    const hoursText = document.createElement("ul");
    hoursText.id = "hours-text";
    hoursText.classList = "page-section-text";
    const hoursTextItems = [
        "Monday – Thursday: 11:00 AM – 10:00 PM",
        "Friday – Saturday: 11:00 AM – 2:00 AM",
        "Sunday: 12:00 AM – 9:00 PM"
    ];
    hoursTextItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        hoursText.appendChild(li);
    });
    homePageHours.appendChild(hoursText);

    const homePageLocation = document.createElement("div");
    homePageLocation.id = "home-page-location";
    homePageLocation.classList = "page-section";
    homePage.appendChild(homePageLocation);

    const locationHeader = document.createElement("div");
    locationHeader.id = "location-header";
    locationHeader.classList = "page-section-header";
    homePageLocation.appendChild(locationHeader);

    const locationHeaderText = document.createElement("div");
    locationHeaderText.id = "location-header-text";
    locationHeaderText.classList = "page-section-header-text";
    locationHeaderText.textContent = "Location";
    locationHeader.appendChild(locationHeaderText);

    const locationSVG = document.createElementNS(svgNS, "svg");
    locationSVG.setAttribute("xmlns", svgNS);
    locationSVG.setAttribute("width", "30");
    locationSVG.setAttribute("height", "30");
    locationSVG.setAttribute("viewBox", "0 0 24 24");
    locationSVG.setAttribute("fill", "none");
    locationSVG.setAttribute("stroke", "#c0392b");
    locationSVG.setAttribute("stroke-width", "2");
    locationSVG.setAttribute("stroke-linecap", "round");
    locationSVG.setAttribute("stroke-linejoin", "round");
    locationSVG.setAttribute("id", "map-svg");
    const locationPaths = [
        "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
        "M15 5.764v15",
        "M9 3.236v15"
    ];
    locationPaths.forEach(d => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        locationSVG.appendChild(path);
    });
    locationHeader.appendChild(locationSVG);

    const locationText = document.createElement("div");
    locationText.id = "location-text";
    locationText.classList = "page-section-text";
    locationText.textContent = "275 Bleecker Street, New York, NY 10014 - Proudly serving the West Village since 1999.";
    homePageLocation.appendChild(locationText);

    content.appendChild(homePage);

    const homePageSections = document.querySelectorAll(".page-section");
    homePageSections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.borderColor = "#27ae60";
        });
        section.addEventListener("mouseout", () => {
            section.style.borderColor = "#c0392b";
        });
    });
}
