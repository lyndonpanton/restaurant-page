function Contact() {
    let contact = document.createElement("section");
    contact.setAttribute("id", "contact");
    let contactHeading = document.createElement("h2");
    contactHeading.textContent = "Contact";

    // From Far
    let online = document.createElement("article");
    online.classList.add("contact");
    let onlineHeading = document.createElement("h3");
    onlineHeading.classList.add("contact-heading");
    onlineHeading.textContent = "Online Contact";
    let email = document.createElement("p");
    email.textContent = "You can email us at ";
    let emailDetail = document.createElement("span");
    emailDetail.classList.add("contact-detail");
    emailDetail.textContent = "contact@restaurant.com";
    email.appendChild(emailDetail);
    let mail = document.createElement("p");
    mail.textContent = 
            "You post mail you would like us to see to ";
    let mailDetail = document.createElement("span");
    mailDetail.classList.add("contact-detail");
    mailDetail.textContent = "00, Happy Lane, Lagos, Brazil";
    mail.appendChild(mailDetail);
    let phone = document.createElement("p");
    phone.textContent = "You can call on the number ";
    let phoneDetail = document.createElement("span");
    phoneDetail.classList.add("contact-detail");
    phoneDetail.textContent = "01234567890";
    phone.appendChild(phoneDetail);

    online.appendChild(onlineHeading);
    online.appendChild(email);
    online.appendChild(mail);
    online.appendChild(phone);

    // In Person
    let inPerson = document.createElement("article");
    inPerson.classList.add("contact");
    let inPersonHeading = document.createElement("h3");
    inPersonHeading.textContent = "Visit Us";
    inPersonHeading.classList.add("contact-heading");
    let mainBranch = document.createElement("p");
    mainBranch.textContent =
            "You can visit our main branch at ";
    let mainBranchDetail = document.createElement("span");
    mainBranchDetail.classList.add("contact-detail");
    mainBranchDetail.textContent = "01, Delighted Street, Dehli, New Zealand";
    mainBranch.appendChild(mainBranchDetail);
    let firstSubBranch = document.createElement("p");
    firstSubBranch.textContent =
            "You can visit our first sub branch at ";
    let firstSubBranchDetail = document.createElement("span");
    firstSubBranchDetail.classList.add("contact-detail");
    firstSubBranchDetail.textContent = "10, Estastic Road, Berlin, Canada";
    firstSubBranch.appendChild(firstSubBranchDetail);
    let secondSubBranch = document.createElement("p");
    secondSubBranch.textContent =
            "You can visit our first sub branch at ";
    let secondSubBranchDetail = document.createElement("span");
    secondSubBranchDetail.classList.add("contact-detail");
    secondSubBranchDetail.textContent = "11, Glad Avenue, Vancouver, Germany";
    secondSubBranch.appendChild(secondSubBranchDetail);

    inPerson.appendChild(inPersonHeading);
    inPerson.appendChild(mainBranch);
    inPerson.appendChild(firstSubBranch);
    inPerson.appendChild(secondSubBranch);

    // Social
    let social = document.createElement("article");
    social.setAttribute("id", "contact-social");
    social.classList.add("contact");
    let socialHeading = document.createElement("h3");
    socialHeading.classList.add("contact-heading");
    socialHeading.textContent = "Social Media";
    // let socialText = document.createElement("p");
    // socialText.textContent =
    //         "You can follow us on the following social media websites:"
    let socialList = document.createElement("ul");
    socialList.classList.add("social-list");
    let socialFacebook = document.createElement("li");
    let socialFacebookLink = document.createElement("a");
    socialFacebookLink.classList.add("social-list-link");
    socialFacebookLink.setAttribute("href", "https://facebook.com");
    socialFacebookLink.setAttribute("target", "_blank");
    socialFacebookLink.textContent = "Facebook";
    socialFacebook.appendChild(socialFacebookLink);
    let socialTwitter = document.createElement("li");
    let socialTwitterLink = document.createElement("a");
    socialTwitterLink.classList.add("social-list-link");
    socialTwitterLink.setAttribute("href", "https://twitter.com");
    socialTwitterLink.setAttribute("target", "_blank");
    socialTwitterLink.textContent = "Twitter";
    socialTwitter.appendChild(socialTwitterLink);
    let socialInstagram = document.createElement("li");
    let socialInstagramLink = document.createElement("a");
    socialInstagramLink.classList.add("social-list-link");
    socialInstagramLink.setAttribute("href", "https://instagram.com");
    socialInstagramLink.setAttribute("target", "_blank");
    socialInstagramLink.textContent = "Instagram";
    socialInstagram.appendChild(socialInstagramLink);
    let socialTiktok = document.createElement("li");
    let socialTiktokLink = document.createElement("a");
    socialTiktokLink.classList.add("social-list-link");
    socialTiktokLink.setAttribute("href", "https://tiktok.com");
    socialTiktokLink.setAttribute("target", "_blank");
    socialTiktokLink.textContent = "Tiktok";
    socialTiktok.appendChild(socialTiktokLink);
    socialList.appendChild(socialFacebook);
    socialList.appendChild(socialTwitter);
    socialList.appendChild(socialInstagram);
    socialList.appendChild(socialTiktok);
    social.appendChild(socialHeading);
    social.appendChild(socialList);

    contact.appendChild(contactHeading);
    contact.appendChild(online);
    contact.appendChild(inPerson);
    contact.appendChild(social);

    let main = document.getElementsByTagName("main")[0];
    main.appendChild(contact);
}

export default Contact;
