function Menu() {
    let menu = document.createElement("section");
    let menuHeading = document.createElement("h2");
    menuHeading.textContent = "Our Menu";
    let menuIntroduction = document.createElement("p");
    menuIntroduction.textContent = "...";

    // Starters
    let starters = document.createElement("article");
    let startersHeading = document.createElement("h3");
    startersHeading.textContent = "Starters";

    starters.appendChild(startersHeading);

    // Mains
    let mains = document.createElement("article");
    let mainsHeading = document.createElement("h3")
    mainsHeading.textContent = "Mains";

    mains.appendChild(mainsHeading);

    // Sides
    let sides = document.createElement("article");
    let sidesHeading = document.createElement("h3")
    sidesHeading.textContent = "Sides";

    sides.appendChild(sidesHeading);

    // Desserts
    let desserts = document.createElement("article");
    let dessertsHeading = document.createElement("h3")
    dessertsHeading.textContent = "Desserts";

    desserts.appendChild(dessertsHeading);

    // Beverages
    let beverages = document.createElement("article");
    let beveragesHeading = document.createElement("h3")
    beveragesHeading.textContent = "Beverages";

    beverages.appendChild(beveragesHeading);

    menu.appendChild(menuHeading);
    menu.appendChild(menuIntroduction);
    menu.appendChild(starters);
    menu.appendChild(mains);
    menu.appendChild(sides);
    menu.appendChild(desserts);
    menu.appendChild(beverages);

    let main = document.getElementsByTagName("main")[0];
    main.appendChild(menu);
}

export default Menu;
