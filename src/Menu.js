function Menu() {
    let menu = document.createElement("section");
    let menuHeading = document.createElement("h2");
    menuHeading.textContent = "Our Menu";
    let menuIntroduction = document.createElement("p");
    menuIntroduction.textContent =
            "Come try our spectacular food from all around the world!";

    // Starters
    let starters = document.createElement("article");
    let startersHeading = document.createElement("h3");
    startersHeading.textContent = "Starters";

    let firstStarter = document.createElement("p");
    firstStarter.textContent = "Nkwobi";
    let secondStarter = document.createElement("p");
    secondStarter.textContent = "Tandoori Chicken Momos";
    let thirdStarter = document.createElement("p");
    thirdStarter.textContent = "Geräucherter Lachs";
    let fourthStarter = document.createElement("p");
    fourthStarter.textContent = "Split Pea Soup";
    let fifthStarter = document.createElement("p");
    fifthStarter.textContent = "Toroī";
    let sixthStarter = document.createElement("p");
    sixthStarter.textContent = "Acarajé";
    
    starters.appendChild(startersHeading);

    starters.appendChild(firstStarter);
    starters.appendChild(secondStarter);
    starters.appendChild(thirdStarter);
    starters.appendChild(fourthStarter);
    starters.appendChild(fifthStarter);
    starters.appendChild(sixthStarter);


    // Mains
    let mains = document.createElement("article");
    let mainsHeading = document.createElement("h3")
    mainsHeading.textContent = "Mains";

    let firstMain = document.createElement("article");
    let firstMainTitle = document.createElement("h4");
    firstMainTitle.textContent = "Jollof Rice with Fried Plantain";
    let firstMainDescription = document.createElement("p");
    firstMainDescription.textContent =
            "A Nigerian variant of the classic western African dish. Rice, tomatoes,"
            + " onions, peppers, and chillis served with fried plantain and a chicken"
            + " thigh.";
    firstMain.appendChild(firstMainTitle);
    firstMain.appendChild(firstMainDescription);

    let secondMain = document.createElement("article");
    let secondMainTitle = document.createElement("h4");
    secondMainTitle.textContent = "Prawn Curry";
    let secondMainDescription = document.createElement("p");
    secondMainDescription.textContent =
            "Prawns cooked in masala made from onions, tomatoes, and indian"
            + " herbs and spices. Served with naan bread and steamed rice.";
    secondMain.appendChild(secondMainTitle);
    secondMain.appendChild(secondMainDescription);

    let thirdMain = document.createElement("article");
    let thirdMainTitle = document.createElement("h4");
    thirdMainTitle.textContent = "Bayrische Schweinshaxe";
    let thirdMainDescription = document.createElement("p");
    thirdMainDescription.textContent =
            "Ham that has been marinated for several days and roaszted at a low"
            + " temperature. Served with potato dumplings.";
    thirdMain.appendChild(thirdMainTitle);
    thirdMain.appendChild(thirdMainDescription);

    let fourthMain = document.createElement("article");
    let fourthMainTitle = document.createElement("h4");
    fourthMainTitle.textContent = "Pulled Mushroom Chilli";
    let fourthMainDescription = document.createElement("p");
    fourthMainDescription.textContent =
            "A mixture of portobellow, shiitake and closed-cup mushrooms served"
            + " with rice and topped with spring onions.";
    fourthMain.appendChild(fourthMainTitle);
    fourthMain.appendChild(fourthMainDescription);

    let fifthMain = document.createElement("article");
    let fifthMainTitle = document.createElement("h4");
    fifthMainTitle.textContent = "Hāngī";
    let fifthMainDescription = document.createElement("p");
    fifthMainDescription.textContent =
            "Lamb, potato, sweet potato (kūmara), pumpkins, and cabbage heated"
            + " in an underground pit oven for several hours.";
    fifthMain.appendChild(fifthMainTitle);
    fifthMain.appendChild(fifthMainDescription);

    let sixthMain = document.createElement("article");
    let sixthMainTitle = document.createElement("h4");
    sixthMainTitle.textContent = "Hāngī";
    let sixthMainDescription = document.createElement("p");
    sixthMainDescription.textContent =
            "Raw cassava flour toasted with butter, salt, bacon, onions, garlic"
            + " sauage and olives until golden brown.";
    sixthMain.appendChild(sixthMainTitle);
    sixthMain.appendChild(sixthMainDescription);

    mains.appendChild(mainsHeading);
    
    mains.appendChild(mainsHeading);
    mains.appendChild(firstMain);
    mains.appendChild(secondMain);
    mains.appendChild(thirdMain);
    mains.appendChild(fourthMain);
    mains.appendChild(fifthMain);
    mains.appendChild(sixthMain);

    // Desserts
    let desserts = document.createElement("article");
    let dessertsHeading = document.createElement("h3")
    dessertsHeading.textContent = "Desserts";

    let firstDessert = document.createElement("p");
    firstDessert.textContent = "Coconut Rice Pudding";
    let secondDessert = document.createElement("p");
    secondDessert.textContent = "Kala Jaam";
    let thirdDessert = document.createElement("p");
    thirdDessert.textContent = "Apr Ikosen-Quarkst Rudel";
    let fourthDessert = document.createElement("p");
    fourthDessert.textContent = "Pumpkin Pie";
    let fifthDessert = document.createElement("p");
    fifthDessert.textContent = "Chocolate Fish";
    let sixthDessert = document.createElement("p");
    sixthDessert.textContent = "Guava Jam Pastel";

    desserts.appendChild(dessertsHeading);
    
    desserts.appendChild(dessertsHeading);
    desserts.appendChild(firstDessert);
    desserts.appendChild(secondDessert);
    desserts.appendChild(thirdDessert);
    desserts.appendChild(fourthDessert);
    desserts.appendChild(fifthDessert);

    // Sides
    let sides = document.createElement("article");
    let sidesHeading = document.createElement("h3")
    sidesHeading.textContent = "Sides";

    let firstSide = document.createElement("p");
    firstSide.textContent = "Pounded Yam";
    let secondSide = document.createElement("p");
    secondSide.textContent = "Murgh Hazrat Mahal";
    let thirdSide = document.createElement("p");
    thirdSide.textContent = "Flammekuchen";
    let fourthSide = document.createElement("p");
    fourthSide.textContent = "Battered Cheese Curds";
    let fifthSide = document.createElement("p");
    fifthSide.textContent = "Kiwi Onion Dip";
    let sixthSide = document.createElement("p");
    sixthMain.textContent = "Bolinho de Bacalhau";

    sides.appendChild(sidesHeading);
    
    sides.appendChild(sidesHeading);
    sides.appendChild(firstSide);
    sides.appendChild(secondSide);
    sides.appendChild(thirdSide);
    sides.appendChild(fourthSide);
    sides.appendChild(fifthSide);
    sides.appendChild(sixthSide);

    // Beverages
    let beverages = document.createElement("article");
    let beveragesHeading = document.createElement("h3")
    beveragesHeading.textContent = "Beverages";

    let firstBeverage = document.createElement("p");
    firstBeverage.textContent = "Chapman";
    let secondBeverage = document.createElement("p");
    secondBeverage.textContent = "Lassi";
    let thirdBeverage = document.createElement("p");
    thirdBeverage.textContent = "Flensburger Lager";
    let fourthBeverage = document.createElement("p");
    fourthBeverage.textContent = "Caesar";
    let fifthBeverage = document.createElement("p");
    fifthBeverage.textContent = "Instant Coffee";
    let sixthBeverage = document.createElement("p");
    sixthMain.textContent = "Cachaça";

    beverages.appendChild(beveragesHeading);
    
    beverages.appendChild(beveragesHeading);
    beverages.appendChild(firstBeverage);
    beverages.appendChild(secondBeverage);
    beverages.appendChild(thirdBeverage);
    beverages.appendChild(fourthBeverage);
    beverages.appendChild(fifthBeverage);
    beverages.appendChild(sixthBeverage);

    menu.appendChild(starters);
    menu.appendChild(mains);
    menu.appendChild(desserts);
    menu.appendChild(sides);
    menu.appendChild(beverages);

    let main = document.getElementsByTagName("main")[0];
    main.appendChild(menu);
}

export default Menu;
