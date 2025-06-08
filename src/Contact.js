function Contact() {
    let contact = document.createElement("contact");
    let contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";

    // From Far
    let offSite = document.createElement("article");
    let email = document.createElement("p");
    email.textContent = "You can email us at contat@restaurant.com"
    let mail = document.createElement("p");
    mail.textContent = 
            "You post mail you would like us to see to 00, Happy Lane,"
            + " Queensland, Antartica.";
    let phone = document.createElement("p");
    phone.textContent = "You can call on the number 01234567890";

    offSite.appendChild(email);
    offSite.appendChild(mail);
    offSite.appendChild(phone);

    // In Person
    let onSite = document.createElement("article");
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

    onSite.appendChild(mainBranch);
    onSite.appendChild(firstSubBranch);
    onSite.appendChild(secondSubBranch);

    contact.appendChild(contactHeading);
    contact.appendChild(offSite);
    contact.appendChild(onSite);

    let main = document.getElementsByTagName("main")[0];
    main.appendChild(contact);
}

export default Contact;
