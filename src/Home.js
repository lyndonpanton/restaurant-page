function Home() {
    let home = document.createElement("section");
    let homeHeading = document.createElement("h2");
    homeHeading.textContent = "Welcome!";
    let homeIntroduction = document.createElement("p");
    homeIntroduction.classList.add("home-text");
    homeIntroduction.textContent =
            "Come to our restaurant to eat some delicious food, see some"
            + " amazing views, and have a fantastic time!";

    let about = document.createElement("article");
    let aboutHeader = document.createElement("h2");
    aboutHeader.textContent = "About Our Restaurant";
    let aboutText = document.createElement("p");
    aboutText.classList.add("home-text");
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
    hoursText.setAttribute("id", "opening-hours-text");
    hoursText.classList.add("home-text");
    hoursText.textContent =
            "You can come visit us or order from us during the following"
            + " hours:";
    let hoursList = document.createElement("ul");
    hoursList.setAttribute("id", "opening-hours-list");
    let hoursMonday = document.createElement("li");
    hoursMonday.textContent = "Monday: 9am - 7pm";
    let hoursTuesday = document.createElement("li");
    hoursTuesday.textContent = "Tuesday: 9am - 7pm";
    let hoursWednesday = document.createElement("li");
    hoursWednesday.textContent = "Wednesday: 9am - 5pm";
    let hoursThursday = document.createElement("li");
    hoursThursday.textContent = "Thursday: 9am - 7pm";
    let hoursFriday = document.createElement("li");
    hoursFriday.textContent = "Friday: 9am - 10pm";
    let hoursSaturday = document.createElement("li");
    hoursSaturday.textContent = "Saturday: 8am - 10pm";
    let hoursSunday = document.createElement("li");
    hoursSunday.textContent = "Sunday: 10am - 4pm";

    hoursList.appendChild(hoursMonday);
    hoursList.appendChild(hoursTuesday);
    hoursList.appendChild(hoursWednesday);
    hoursList.appendChild(hoursThursday);
    hoursList.appendChild(hoursFriday);
    hoursList.appendChild(hoursSaturday);
    hoursList.appendChild(hoursSunday);

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
