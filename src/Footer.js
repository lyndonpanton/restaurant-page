function Footer() {
    let footer = document.getElementsByTagName("footer")[0];

    let copyright = document.createElement("p");
    copyright.setAttribute("id", "footer-copyright");

    let copyrightSymbol = document.createTextNode("\u00a9");
    
    let copyrightYear = document.createElement("span");
    copyrightYear.setAttribute("id", "footer-copyright-year");
    copyrightYear.textContent = " " + new Date().getFullYear();

    let copyrightAuthor = document.createTextNode(" Lyndon Mykal Panton");

    let copyrightRights = document.createTextNode(" | All Rights Reserved");

    copyright.appendChild(copyrightSymbol);
    copyright.appendChild(copyrightYear);
    copyright.appendChild(copyrightAuthor);
    copyright.appendChild(copyrightRights);

    footer.appendChild(copyright);
}

export default Footer;
