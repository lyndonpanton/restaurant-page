function Home() {
    let home = document.createElement("section");
    let homeHeading = document.createElement("h2");
    homeHeading.textContent = "Lyn's Restaurant";
    let homeIntroduction = document.createElement("p");
    homeIntroduction.textContent =
            "Come to our restaurant to have some delicious food, see some"
            + " amazing views, and a fantastic time!";

    let about = document.createElement("article");
    let aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About Our Restaurant";
    let aboutText = document.createElement("p");
    aboutText.textContent =
            "This restaurant has been open for 100 years and counting! We are"
            + " located at a lovely venue in the middle of the city with a view"
            + " of the seaside, three volcanoes, and a desert! At this"
            + " establishment you can feast on a variety of dishes from across"
            + " the globe, from the Efo Riro of Nigeria and the Pakoras of"
            + " India to the Rouladen of Germany and the Farofa of Brazil!";

    about.appendChild(aboutHeader);
    about.appendChild(aboutText);

    let hours = document.createElement("article");
    let hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Opening Hours";
    let hoursText = document.createElement("p");
    hoursText.textContent =
            "You can come visit us or order from us during the following"
            + " hours:";
    let hoursList = document.createElement("ul");
    let hoursMonday = document.createElement("li");
    hoursMonday.textContent = "Monday: 08:00 - 19:00";
    let hoursTuesday = document.createElement("li");
    hoursTuesday.textContent = "Tuesday: 08:00 - 19:00";
    let hoursWednesday = document.createElement("li");
    hoursWednesday.textContent = "Wednesday: 08:00 - 19:00";
    let hoursThursday = document.createElement("li");
    hoursThursday.textContent = "Thursday: 08:00 - 19:00";
    let hoursFriday = document.createElement("li");
    hoursFriday.textContent = "Friday: 08:00 - 19:00";
    let hoursSaturday = document.createElement("li");
    hoursSaturday.textContent = "Saturday: 08:00 - 19:00";
    let hoursSunday = document.createElement("li");
    hoursSunday.textContent = "Sunday: 08:00 - 19:00";

    hoursList.appendChild(hoursMonday)
                .appendChild(hoursTuesday)
                .appendChild(hoursWednesday)
                .appendChild(hoursThursday)
                .appendChild(hoursFriday)
                .appendChild(hoursSaturday)
                .appendChild(hoursSunday);

    hours.appendChild(hoursHeading);
    hours.appendChild(hoursText);
    hours.appendChild(hoursList);


    let orders = document.createElement("article");
    let ordersHeading = document.createElement("h2");
    ordersHeading.textContent = "Receiving Your Meal";
    let ordersAddress = document.createElement("p");
    ordersAddress.textContent =
            "You can visit us in person at 00, Happy Lane, Queensland,"
            + " Antartica.";
    let ordersServices = document.createElement("p");
    ordersServices.textContent =
            "We also deliver via Uber Eats, Deliveroo, and Just Eat!";

    home.appendChild(homeHeading);
    home.appendChild(homeIntroduction);
    home.appendChild(about);
    home.appendChild(hours);
    home.appendChild(orders);
    
    
    let main = document.getElementsByTagName("main")[0];
    main.appendChild(home);
}

export default Home;
