function navigate (e) {
    if (e.target.id == "acac") {
      window.location.replace("../acceuil.html");
    } else if (e.target.id == "prodPg") {
      window.location.replace("../produits/produits.html");
    } else if (e.target.id == "ctct") {
      window.location.replace("../contact/contact.html");
    } else if (e.target.id == "services") {
      window.location.replace("../services/services.html");
    }
  }