// JS for about page 

// Add about page to content via DOM manipulation
export function addAboutPage() {
    const content = document.getElementById("content");

    const aboutPage = document.createElement("div");
    aboutPage.id = "about-page";
    aboutPage.classList = "page";
    
    const aboutPageHeader = document.createElement("div");
    aboutPageHeader.id = "about-page-header";
    aboutPageHeader.classList = "page-header";
    aboutPage.appendChild(aboutPageHeader);

    const aboutPageHeaderText = document.createElement("div");
    aboutPageHeaderText.id = "about-page-header-text";
    aboutPageHeaderText.classList = "page-header-text";
    aboutPageHeaderText.textContent = "Joey's Pizzas";
    aboutPageHeader.appendChild(aboutPageHeaderText);

    const aboutPageIntro = document.createElement("div");
    aboutPageIntro.id = "about-page-intro";
    aboutPageIntro.classList = "page-section";
    aboutPage.appendChild(aboutPageIntro);

    const aboutIntroHeader = document.createElement("div");
    aboutIntroHeader.id = "about-intro-header";
    aboutIntroHeader.classList = "page-section-header";
    aboutPageIntro.appendChild(aboutIntroHeader);

    const aboutIntroHeaderText = document.createElement("div");
    aboutIntroHeaderText.id = "about-intro-header-text";
    aboutIntroHeaderText.classList = "page-section-header-text";
    aboutIntroHeaderText.textContent = "About";
    aboutIntroHeader.appendChild(aboutIntroHeaderText);

    const svgNS = "http://www.w3.org/2000/svg";
    const albumSVG = document.createElementNS(svgNS, "svg");
    albumSVG.setAttribute("xmlns", svgNS);
    albumSVG.setAttribute("width", "30");
    albumSVG.setAttribute("height", "30");
    albumSVG.setAttribute("viewBox", "0 0 24 24");
    albumSVG.setAttribute("fill", "none");
    albumSVG.setAttribute("stroke", "#c0392b");
    albumSVG.setAttribute("stroke-width", "2");
    albumSVG.setAttribute("stroke-linecap", "round");
    albumSVG.setAttribute("stroke-linejoin", "round");
    albumSVG.setAttribute("class", "album-svg");
    aboutIntroHeader.appendChild(albumSVG);
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "18");
    rect.setAttribute("height", "18");
    rect.setAttribute("x", "3");
    rect.setAttribute("y", "3");
    rect.setAttribute("rx", "2");
    rect.setAttribute("ry", "2");
    albumSVG.appendChild(rect);
    const polyline = document.createElementNS(svgNS, "polyline");
    polyline.setAttribute("points", "11 3 11 11 14 8 17 11 17 3");
    albumSVG.appendChild(polyline);
    aboutIntroHeader.appendChild(albumSVG);

    const aboutIntroText = document.createElement("div");
    aboutIntroText.id = "about-intro-text";
    aboutIntroText.classList = "page-section-text";
    aboutIntroText.textContent = "For more than 25 years, Joey's Pizzas has proudly brought the authentic New Haven apizza tradition to New York City. Founded by Joey Pizza, a lifelong pizza enthusiast who grew up savoring the iconic coal-fired pies of Wooster Street, the restaurant was born from a simple mission: to share those bold, crispy, and soulful flavors with his new hometown.";
    aboutIntroText.appendChild(document.createElement("br"));
    aboutIntroText.appendChild(document.createElement("br"));
    aboutIntroText.appendChild(document.createTextNode("Joey's crafts every pie with respect for time-tested techniques and the freshest ingredients. Whether you're a longtime apizza lover or new to the style, Joey's offers a genuine taste experience that honors its Connecticut roots while celebrating the energy of the city."));
    aboutPageIntro.appendChild(aboutIntroText);

    const aboutPageContact = document.createElement("div");
    aboutPageContact.id = "about-page-contact";
    aboutPageContact.classList = "page-section";
    aboutPage.appendChild(aboutPageContact);

    const contactHeader = document.createElement("div");
    contactHeader.id = "contact-header";
    contactHeader.classList = "page-section-header";
    aboutPageContact.appendChild(contactHeader);

    const contactHeaderText = document.createElement("div");
    contactHeaderText.id = "contact-header-text";
    contactHeaderText.classList = "page-section-header-text";
    contactHeaderText.textContent = "Contact";
    contactHeader.appendChild(contactHeaderText);

    const phoneSVG = document.createElementNS(svgNS, "svg");
    phoneSVG.setAttribute("xmlns", svgNS);
    phoneSVG.setAttribute("width", "30");
    phoneSVG.setAttribute("height", "30");
    phoneSVG.setAttribute("viewBox", "0 0 24 24");
    phoneSVG.setAttribute("fill", "none");
    phoneSVG.setAttribute("stroke", "#c0392b");
    phoneSVG.setAttribute("stroke-width", "2");
    phoneSVG.setAttribute("stroke-linecap", "round");
    phoneSVG.setAttribute("stroke-linejoin", "round");
    phoneSVG.setAttribute("class", "phone-svg");
    contactHeader.appendChild(phoneSVG);
    const phonePaths = [
        "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    ];
    phonePaths.forEach(d => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        phoneSVG.appendChild(path);
    });
    contactHeader.appendChild(phoneSVG);

    const contactText = document.createElement("ul");
    contactText.id = "contact-text";
    contactText.classList = "page-section-text";
    aboutPageContact.appendChild(contactText);

    const addressLI = document.createElement("li");
    addressLI.textContent = "Address: 275 Bleecker Street, New York, NY 10014";
    contactText.appendChild(addressLI);
    const phoneLI = document.createElement("li");
    phoneLI.textContent = "Phone: (212) 123-4567";
    contactText.appendChild(phoneLI);
    const emailLI = document.createElement("li");
    emailLI.textContent = "Email: joey@joeypizzas.com";
    contactText.appendChild(emailLI);

    content.appendChild(aboutPage);

    const aboutPageSections = document.querySelectorAll(".page-section");
    aboutPageSections.forEach(section => {
        section.addEventListener("mouseover", () => {
            section.style.borderColor = "#27ae60";
            const svg = section.querySelector("svg");
            svg.style.stroke = "#27ae60";
        });
        section.addEventListener("mouseout", () => {
            section.style.borderColor = "#c0392b";
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

    const aboutButton = document.querySelector("#about-button");
    aboutButton.classList.add("is-selected");
    aboutButton.style.backgroundColor = "#27ae60";
}