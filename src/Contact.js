function Contact() {
    let contact = document.createElement("contact");
    let contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";

    // From Far
    let online = document.createElement("article");
    let onlineHeading = document.createElement("h3");
    onlineHeading.textContent = "Online Contact"
    let email = document.createElement("p");
    email.textContent = "You can email us at contat@restaurant.com"
    let mail = document.createElement("p");
    mail.textContent = 
            "You post mail you would like us to see to 00, Happy Lane,"
            + " Queensland, Antartica.";
    let phone = document.createElement("p");
    phone.textContent = "You can call on the number 01234567890";

    online.appendChild(email);
    online.appendChild(mail);
    online.appendChild(phone);

    // In Person
    let inPerson = document.createElement("article");
    let mainBranch = document.createElement("p");
    mainBranch.textContent =
            "You can visit our main branch at 00, Happy Lane, Queensland,"
            + " Antartica.";
    let firstSubBranch = document.createElement("p");
    firstSubBranch.textContent =
        "You can visit our first sub branch at 00, Happy Lane, Queensland,"
            + " Antartica.";
    let secondSubBranch = document.createElement("p");
    secondSubBranch.textContent =
        "You can visit our first sub branch at 00, Happy Lane, Queensland,"
            + " Antartica.";

    inPerson.appendChild(mainBranch);
    inPerson.appendChild(firstSubBranch);
    inPerson.appendChild(secondSubBranch);

    // Social
    let social = document.createElement("article");
    let socialHeading = document.createElement("h3");
    socialHeading.textContent = "Social Media";
    let socialText = document.createElement("p");
    socialText.textContent =
            "You can follow us on the following social media websites:"
    let socialList = document.createElement("ul");
    let socialFacebook = document.createElement("li");
    socialFacebook.textContent = "Facebook";
    let socialTwitter = document.createElement("li");
    socialTwitter.textContent = "Twitter";
    let socialInstragram = document.createElement("li");
    socialInstragram.textContent = "Instagram";
    let socialSnapchat = document.createElement("li");
    socialSnapchat.textContent = "Snapchat";
    socialList.appendChild(socialFacebook)
                .appendChild(socialTwitter)
                .appendChild(socialInstragram)
                .appendChild(socialSnapchat);
    social.appendChild(socialHeading);
    social.appendChild(socialText);
    social.appendChild(socialList);

    contact.appendChild(contactHeading);
    contact.appendChild(online);
    contact.appendChild(inPerson);
    contact.appendChild(social);

    let main = document.getElementsByTagName("main")[0];
    main.appendChild(contact);
}

export default Contact;
