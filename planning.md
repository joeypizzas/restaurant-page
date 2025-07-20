# Restaurant page planning
## Does your program have a user interface? What will it look like? What functionality will the interface have? 
- UI is header with nav bar. Three buttons, each one loads different page. Nav static on all pages. 
- Initially, home button is highlighted, and that page is loaded. Other buttons highlight on hover. Clicking one of them removes the current page and calls the function to show the new selected page, and leaves the button highlighted. 
- Home page:
    - It has a nice restaurant graphic below nav. 
    - Below that, a brief section with what the restaurant is known for and why it's the best. 
    - Below that, a section outlining the restaurant's hours. 
    - Below that, it's location. 
- Menu: 
    - Menu header, same style as header on home. 
    - Appetizers:
        - Header
        - 2-3 appetizers:
            -  Garlic Knots – Fresh-baked, brushed with garlic butter, served with house red sauce - $6
            - Meatball Plate – Four house-made beef & pork meatballs in marinara, topped with pecorino - $9
            - Arugula Salad – Peppery arugula, shaved parmesan, lemon vinaigrette - $8
    - Pizzas:
        - Header
        - Apizzas (18")
            - Classic Tomato Pie – No cheese, just our signature crushed tomato sauce, garlic, and oregano - $20
            - Mozzarella – Tomato sauce, whole milk mozz, and grated pecorino - $22
            - Pepperoni – Mozzarella, tomato sauce, and cup-and-char pepperoni with crispy edges - $24
    - Drinks section 
        - Header 
        - Drinks:
            - Coke, Diet Coke, Sprite – Ice cold, always classic - $3
            - House Red or White Wine – Served by the glass or carafe - $8 glass / $24 carafe
            - Italian Lemonade – Fresh lemon, sparkling water, sugar, served over ice - $4
- About page:
    - About header, same style as home. 
    - Section describing the history of the restaurant. 
    - Contact info section. 
- Footer:
    - Static on all pages. 
- Color palette of site: 
    - Background: #fff8f0
    - Text: #2e2e2e
    - Buttons: #c0392b with white text (#ffffff)
    - Button Hover / Links: #27ae60
    - Subtle Card / Border Backgrounds: #d7ccc8
- Images for dishes on the menu, maybe some others peppered into the rest of the site? 

## What inputs will your program have? Will the user enter data or will you get input from somewhere else?
- No user inputs or data. 
- The nav and footer will be hardcoded to the HTML. 
- The pages will be written in separate JS files, each one will have a function that creates the page in the DOM. These will be exported to the main JS file and called when there's a click on the relevant button. 
- Main JS will have a function that removes the current page. 

## Given your inputs, what are the steps necessary to return the desired output?

- Nav:
    - Hardcode the nav to the HTML with the relevant styles. 
    - User hover effects from CSS for now, but will remove them and do them via JS later. 
    - Event listeners on the buttons for hover and clicks. 
    - Don't do the hover/click behavior if it's already selected though. Add/remove a class to it when its page is added that controls whether that is possible. 
    - Clicking nav button calls function to remove current page, and then calls the relevant function imported from the modules that adds the new page. 
-Home: 
    - Hardcode first to get the style right, then create it in the JS module before exporting the function that adds it to the main JS file. 
    - Maybe some highlight effects on the non-header sections that are included in the loading function. 
- Menu: 
    - Hardcode first to get the style right, then create it in the JS module before exporting the function that adds it to the main JS file. 
    - Maybe some highlight effects on the non-header sections that are included in the loading function. 
- About: 
    - Hardcode first to get the style right, then create it in the JS module before exporting the function that adds it to the main JS file. 
    - Maybe some highlight effects on the non-header sections that are included in the loading function. 
- Footer:
    - Hardcode via HTML with relevant styles.