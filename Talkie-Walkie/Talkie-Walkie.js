function navigate(e) {
    if (e.target.id == "acac") {
        window.location.replace("../acceuil.html");
    } else if (e.target.id == "prodPg") {
        window.location.replace("../produits/produits.html");
    } else if (e.target.id == "srvPg") {
        window.location.replace("../services/services.html");
    }
    else if (e.target.id == "ctct") {
        window.location.replace("../contact/contact.html");
    }
    else if (e.target.id == "pnc3") {
        window.location.replace("../PNC360S/PNC360S.html");
    }
    else if (e.target.id == "pnc4") {
        window.location.replace("../PNC460/PNC460.html");
    }
    else if (e.target.id == "pnc5") {
        window.location.replace("../PNC560/PNC560.html");
    }
    else if (e.target.id == "mnc3") {
        window.location.replace("../MNC360/MNC360.html");
    }
}