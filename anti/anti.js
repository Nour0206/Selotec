function navigate(e) {
    if (e.target.id == "acac") {
        window.location.replace("../acceuil.html");
    } else if (e.target.id == "prodPg") {
        window.location.replace("../produits/produits.html");
    } else if (e.target.id == "srvPg") {
        window.location.replace("../services/services.html");
    }
    
}