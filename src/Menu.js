function Menu() {
    let menu = document.createElement("section");
    menu.setAttribute("id", "menu");
    let menuHeading = document.createElement("h2");
    menuHeading.textContent = "Our Menu";
    let menuIntroduction = document.createElement("p");
    menuIntroduction.textContent =
            "Come try our spectacular food from all around the world!";

    let menuList = document.createElement("article");
    menuList.setAttribute("id", "menu-list");

    // Starters
    let starters = document.createElement("article");
    let startersHeading = document.createElement("h3");;
    startersHeading.classList.add("menu-section-heading");
    startersHeading.textContent = "Starters";

    let firstStarter = document.createElement("article");
    firstStarter.classList.add("menu-item");

    let firstStarterTitle = document.createElement("h4");
    firstStarterTitle.textContent = "Nkwobi";
    let firstStarterDescription = document.createElement("p");
    firstStarterDescription.textContent =
            "A soup delicacy made with cow feet, palm oil, ehuru seeds, utazi"
            + " leaves and spices. Served with crayfish seasoned with nutmeg"
            + " and ground pepper";
    firstStarter.appendChild(firstStarterTitle);
    firstStarter.appendChild(firstStarterDescription);

    let secondStarter = document.createElement("article");
    secondStarter.classList.add("menu-item");

    let secondStarterTitle = document.createElement("h4");
    secondStarterTitle.textContent = "Tandoori Chicken Momos";
    let secondStarterDescription = document.createElement("p");
    secondStarterDescription.textContent =
            "A chicken dumpling that are marinaded with chilli powder, garlic"
            + " puree, chicken puree, cumin and amchoor (dried mango). Filled"
            + " with beef and served with chutney";
    secondStarter.appendChild(secondStarterTitle);
    secondStarter.appendChild(secondStarterDescription);

    let thirdStarter = document.createElement("article");
    thirdStarter.classList.add("menu-item");

    let thirdStarterTitle = document.createElement("h4");
    thirdStarterTitle.textContent = "Geräucherter Lachs";
    let thirdStarterDescription = document.createElement("p");
    thirdStarterDescription.textContent =
            "Small haddock pieces cold smoked in a smokedhouse for two weeks."
            + " Topped with various vegetables.";
    thirdStarter.appendChild(thirdStarterTitle);
    thirdStarter.appendChild(thirdStarterDescription);

    let fourthStarter = document.createElement("article");
    fourthStarter.classList.add("menu-item");

    let fourthStarterTitle = document.createElement("h4");
    fourthStarterTitle.textContent = "Split Pea Soup";
    let fourthStarterDescription = document.createElement("p");
    fourthStarterDescription.textContent =
            "Dried split peas cooked in a soup over two hours and topped with"
            + " parsley and chives.";
    fourthStarter.appendChild(fourthStarterTitle);
    fourthStarter.appendChild(fourthStarterDescription);

    let fifthStarter = document.createElement("article");
    fifthStarter.classList.add("menu-item");

    let fifthStarterTitle = document.createElement("h4");
    fifthStarterTitle.textContent = "Toroī";
    let fifthStarterDescription = document.createElement("p");
    fifthStarterDescription.textContent =
            "A traditional dish made from mussels, pūhā and watercress that are"
            + " cooked together in a borth, stored in jars, and fermented."
            + " Chilli and garlic are used for seasoning during the"
            + " fermentation process";
    fifthStarter.appendChild(fifthStarterTitle);
    fifthStarter.appendChild(fifthStarterDescription);

    let sixthStarter = document.createElement("article");
    sixthStarter.classList.add("menu-item");

    let sixthStarterTitle = document.createElement("h4");
    sixthStarterTitle.textContent = "Acarajé";
    let sixthStarterDescription = document.createElement("p");
    sixthStarterDescription.textContent =
            "Fritters made from black-eyed peas and filled with Vatapá and"
            + " green tomato vinaigrette.";
    sixthStarter.appendChild(sixthStarterTitle);
    sixthStarter.appendChild(sixthStarterDescription);

    
    starters.appendChild(startersHeading);

    starters.appendChild(firstStarter);
    starters.appendChild(secondStarter);
    starters.appendChild(thirdStarter);
    starters.appendChild(fourthStarter);
    starters.appendChild(fifthStarter);
    starters.appendChild(sixthStarter);

    // Mains
    let mains = document.createElement("article");
    let mainsHeading = document.createElement("h3");
    mainsHeading.classList.add("menu-section-heading");
    mainsHeading.textContent = "Mains";

    let firstMain = document.createElement("article");
    firstMain.classList.add("menu-item");
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
    secondMain.classList.add("menu-item");
    let secondMainTitle = document.createElement("h4");
    secondMainTitle.textContent = "Prawn Curry";
    let secondMainDescription = document.createElement("p");
    secondMainDescription.textContent =
            "Prawns cooked in masala made from onions, tomatoes, and indian"
            + " herbs and spices. Served with naan bread and steamed rice.";
    secondMain.appendChild(secondMainTitle);
    secondMain.appendChild(secondMainDescription);

    let thirdMain = document.createElement("article");
    thirdMain.classList.add("menu-item");
    let thirdMainTitle = document.createElement("h4");
    thirdMainTitle.textContent = "Bayrische Schweinshaxe";
    let thirdMainDescription = document.createElement("p");
    thirdMainDescription.textContent =
            "Ham that has been marinated for several days and roaszted at a low"
            + " temperature. Served with potato dumplings.";
    thirdMain.appendChild(thirdMainTitle);
    thirdMain.appendChild(thirdMainDescription);

    let fourthMain = document.createElement("article");
    fourthMain.classList.add("menu-item");
    let fourthMainTitle = document.createElement("h4");
    fourthMainTitle.textContent = "Pulled Mushroom Chilli";
    let fourthMainDescription = document.createElement("p");
    fourthMainDescription.textContent =
            "A mixture of portobellow, shiitake and closed-cup mushrooms served"
            + " with rice and topped with spring onions.";
    fourthMain.appendChild(fourthMainTitle);
    fourthMain.appendChild(fourthMainDescription);

    let fifthMain = document.createElement("article");
    fifthMain.classList.add("menu-item");
    let fifthMainTitle = document.createElement("h4");
    fifthMainTitle.textContent = "Hāngī";
    let fifthMainDescription = document.createElement("p");
    fifthMainDescription.textContent =
            "Lamb, potato, sweet potato (kūmara), pumpkins, and cabbage heated"
            + " in an underground pit oven for several hours.";
    fifthMain.appendChild(fifthMainTitle);
    fifthMain.appendChild(fifthMainDescription);

    let sixthMain = document.createElement("article");
    sixthMain.classList.add("menu-item");
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
    let dessertsHeading = document.createElement("h3");
    dessertsHeading.classList.add("menu-section-heading");
    dessertsHeading.textContent = "Desserts";

    let firstDessert = document.createElement("article");
    firstDessert.classList.add("menu-item");
    let firstDessertHeading = document.createElement("h4");
    firstDessertHeading.textContent = "Coconut Rice Pudding";
    let firstDessertDescription = document.createElement("p");
    firstDessertDescription.textContent =
            "A creamy pudding made from tuwo rice, condensed milk, and coconut"
            + " milk. Topped with strawberries and blueberries.";
    firstDessert.appendChild(firstDessertHeading);
    firstDessert.appendChild(firstDessertDescription);

    let secondDessert = document.createElement("article");
    secondDessert.classList.add("menu-item");
    let secondDessertHeading = document.createElement("h4");
    secondDessertHeading.textContent = "Kala Jaam";
    let secondDessertDescription = document.createElement("p");
    secondDessertDescription.textContent =
            "A darker variation of sweet gulab jamun. Paneer and khoya balls"
            + " are dunked in sugar syrup flavoured with cardamon powder.";
    secondDessert.appendChild(secondDessertHeading);
    secondDessert.appendChild(secondDessertDescription);

    let thirdDessert = document.createElement("article");
    thirdDessert.classList.add("menu-item");
    let thirdDessertHeading = document.createElement("h4");
    thirdDessertHeading.textContent = "Strudel";
    let thirdDessertDescription = document.createElement("p");
    thirdDessertDescription.textContent =
            "A layered pastry filled with apricot, sour cherry, nuts, apricots,"
            + " plums, poppy seeds and raisins.";
    thirdDessert.appendChild(thirdDessertHeading);
    thirdDessert.appendChild(thirdDessertDescription);

    let fourthDessert = document.createElement("article");
    fourthDessert.classList.add("menu-item");
    let fourthDessertHeading = document.createElement("h4");
    fourthDessertHeading.textContent = "Pumpkin Pie";
    let fourthDessertDescription = document.createElement("p");
    fourthDessertDescription.textContent =
            "A pie made from roasted pumpkin pulp and a cinnamon and ginger"
            + " crust. Served with a scope of thick pure heavy cream.";
    fourthDessert.appendChild(fourthDessertHeading);
    fourthDessert.appendChild(fourthDessertDescription);

    let fifthDessert = document.createElement("article");
    fifthDessert.classList.add("menu-item");
    let fifthDessertHeading = document.createElement("h4");
    fifthDessertHeading.textContent = "Chocolate Fish";
    let fifthDessertDescription = document.createElement("p");
    fifthDessertDescription.textContent =
            "A thin layer of chocolate enclosing a pink marshmellow center."
            + " This traditional confectionary typically given as a reward for"
            + " a job well done.";
    fifthDessert.appendChild(fifthDessertHeading);
    fifthDessert.appendChild(fifthDessertDescription);

    let sixthDessert = document.createElement("article");
    sixthDessert.classList.add("menu-item");
    let sixthDessertHeading = document.createElement("h4");
    sixthDessertHeading.textContent = "Pastel Romeu e Julieta";
    let sixthDessertDescription = document.createElement("p");
    sixthDessertDescription.textContent =
            "A sweet and salty pastel made from white cheese and filled with"
            + " guava jam.";
    sixthDessert.appendChild(sixthDessertHeading);
    sixthDessert.appendChild(sixthDessertDescription);

    desserts.appendChild(dessertsHeading);
    
    desserts.appendChild(dessertsHeading);
    desserts.appendChild(firstDessert);
    desserts.appendChild(secondDessert);
    desserts.appendChild(thirdDessert);
    desserts.appendChild(fourthDessert);
    desserts.appendChild(fifthDessert);
    desserts.appendChild(sixthDessert);

    // Sides
    let sides = document.createElement("article");
    let sidesHeading = document.createElement("h3");
    sidesHeading.classList.add("menu-section-heading");
    sidesHeading.textContent = "Sides";

    let firstSide = document.createElement("article");
    firstSide.classList.add("menu-item");
    let firstSideHeading = document.createElement("h4");
    firstSideHeading.textContent = "Pounded Yam";
    let firstSideDescription = document.createElement("p");
    firstSideDescription.textContent =
            "A swallow prepared by pounding boiled yam with a mortat and pestle"
            + " that is heavy in consistency. Served with ewedu (jute leaves)"
            + " soup";
    firstSide.appendChild(firstSideHeading);
    firstSide.appendChild(firstSideDescription);

    let secondSide = document.createElement("article");
    secondSide.classList.add("menu-item");
    let secondSideHeading = document.createElement("h4");
    secondSideHeading.textContent = "Murgh Hazrat Mahal";
    let secondSideDescription = document.createElement("p");
    secondSideDescription.textContent =
            "Boneless chicken chunks marinate with creamy and cheesy tandoori,"
            + " cooked in tandoor and served in skewers.";
    secondSide.appendChild(secondSideHeading);
    secondSide.appendChild(secondSideDescription);

    let thirdSide = document.createElement("article");
    thirdSide.classList.add("menu-item");
    let thirdSideHeading = document.createElement("h4");
    thirdSideHeading.textContent = "Flammkuchen";
    let thirdSideDescription = document.createElement("p");
    thirdSideDescription.textContent =
            "A thin rectangle dough covered with fromage blanc, thinly sliced"
            + " onions and lardons.";
    thirdSide.appendChild(thirdSideHeading);
    thirdSide.appendChild(thirdSideDescription);

    let fourthSide = document.createElement("article");
    fourthSide.classList.add("menu-item");
    let fourthSideHeading = document.createElement("h4");
    fourthSideHeading.textContent = "Cheese and Herb Scones";
    let fourthSideDescription = document.createElement("p");
    fourthSideDescription.textContent =
            "Plant-based scones filled with creamy non-dairy milk and vinegar.";
    fourthSide.appendChild(fourthSideHeading);
    fourthSide.appendChild(fourthSideDescription);

    let fifthSide = document.createElement("article");
    fifthSide.classList.add("menu-item");
    let fifthSideHeading = document.createElement("h4");
    fifthSideHeading.textContent = "Kiwi Onion Dip";
    let fifthSideDescription = document.createElement("p");
    fifthSideDescription.textContent =
            "A dip consisting of powdered onion soup, reduced cream, lemon"
            + " juice, and malt vinegar.";
    fifthSide.appendChild(fifthSideHeading);
    fifthSide.appendChild(fifthSideDescription);

    let sixthSide = document.createElement("article");
    sixthSide.classList.add("menu-item");
    let sixthSideHeading = document.createElement("h4");
    sixthSideHeading.textContent = "Bolinho de Bacalhau";
    let sixthSideDescription = document.createElement("p");
    sixthSideDescription.textContent =
            "Potato croquettes seasoned with garlic, parsley, and onion and"
            + " filled with salt cod.";
    sixthSide.appendChild(sixthSideHeading);
    sixthSide.appendChild(sixthSideDescription);

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
    let beveragesHeading = document.createElement("h3");
    beveragesHeading.classList.add("menu-section-heading");
    beveragesHeading.textContent = "Beverages";

    let firstBeverage = document.createElement("article");
    firstBeverage.classList.add("menu-item");
    let firstBeverageHeading = document.createElement("h4");
    firstBeverageHeading.textContent = "Chapman";
    let firstBeverageDescription = document.createElement("p");
    firstBeverageDescription.textContent = 
            "A red non-alcholic punch made with fanta, sprite, cucumber, lemon,"
            + "grenadine, and angostura bitters.";
    firstBeverage.appendChild(firstBeverageHeading);
    firstBeverage.appendChild(firstBeverageDescription);

    let secondBeverage = document.createElement("article");
    secondBeverage.classList.add("menu-item");
    let secondBeverageHeading = document.createElement("h4");
    secondBeverageHeading.textContent = "Lassi";
    let secondBeverageDescription = document.createElement("p");
    secondBeverageDescription.textContent = 
            "A smoothie-link drink made from buffalo milk yogurt blended with"
            + " cumin and cardamom.";
    secondBeverage.appendChild(secondBeverageHeading);
    secondBeverage.appendChild(secondBeverageDescription);

    let thirdBeverage = document.createElement("article");
    thirdBeverage.classList.add("menu-item");
    let thirdBeverageHeading = document.createElement("h4");
    thirdBeverageHeading.textContent = "Pilsner";
    let thirdBeverageDescription = document.createElement("p");
    thirdBeverageDescription.textContent = 
            "A pale lager that is brewed with malt and saaz hops and has a"
            + " slightly bitter taste.";
    thirdBeverage.appendChild(thirdBeverageHeading);
    thirdBeverage.appendChild(thirdBeverageDescription);

    let fourthBeverage = document.createElement("article");
    fourthBeverage.classList.add("menu-item");
    let fourthBeverageHeading = document.createElement("h4");
    fourthBeverageHeading.textContent = "Caesar";
    let fourthBeverageDescription = document.createElement("p");
    fourthBeverageDescription.textContent = 
            "A cocktail which contains vodka, clamato, hot sauce, and"
            + " worcestershire sauce and served with ice, a celery stalk, and a"
            + " wedge of lime.";
    fourthBeverage.appendChild(fourthBeverageHeading);
    fourthBeverage.appendChild(fourthBeverageDescription);

    let fifthBeverage = document.createElement("article");
    fifthBeverage.classList.add("menu-item");
    let fifthBeverageHeading = document.createElement("h4");
    fifthBeverageHeading.textContent = "Instant Coffee";
    let fifthBeverageDescription = document.createElement("p");
    fifthBeverageDescription.textContent = 
            "A creamy and frothy coffee. Can be made with full cream, light, or"
            + " plant-based milk and optionally sugar to taste.";
    fifthBeverage.appendChild(fifthBeverageHeading);
    fifthBeverage.appendChild(fifthBeverageDescription);

    let sixthBeverage = document.createElement("article");
    sixthBeverage.classList.add("menu-item");
    let sixthBeverageHeading = document.createElement("h4");
    sixthBeverageHeading.textContent = "Cachaça";
    let sixthBeverageDescription = document.createElement("p");
    sixthBeverageDescription.textContent = 
            "A distilled spirit made form fermented sugarcane juice.";
    sixthBeverage.appendChild(sixthBeverageHeading);
    sixthBeverage.appendChild(sixthBeverageDescription);

    let seventhBeverage = document.createElement("article");
    seventhBeverage.classList.add("menu-item");
    let seventhBeverageHeading = document.createElement("h4");
    seventhBeverageHeading.textContent = "Water";
    let seventhBeverageDescription = document.createElement("p");
    seventhBeverageDescription.textContent = 
            "This can be served still or sparkling and cold or warm.";
    seventhBeverage.appendChild(seventhBeverageHeading);
    seventhBeverage.appendChild(seventhBeverageDescription);
    
    beverages.appendChild(beveragesHeading);
    beverages.appendChild(firstBeverage);
    beverages.appendChild(secondBeverage);
    beverages.appendChild(thirdBeverage);
    beverages.appendChild(fourthBeverage);
    beverages.appendChild(fifthBeverage);
    beverages.appendChild(sixthBeverage);
    beverages.appendChild(seventhBeverage);

    menuList.appendChild(starters);
    menuList.appendChild(mains);
    menuList.appendChild(desserts);
    menuList.appendChild(sides);
    menuList.appendChild(beverages);

    menu.appendChild(menuHeading);
    menu.appendChild(menuIntroduction);
    menu.appendChild(menuList);

    let main = document.getElementsByTagName("main")[0];
    main.appendChild(menu);
}

export default Menu;
