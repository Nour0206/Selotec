

// */
function navigate (e) {
    if (e.target.id == "srvPg") {
      window.location.replace("services/services.html");
    } else if (e.target.id == "prodPg") {
      window.location.replace("produits/produits.html");
    } else if (e.target.id == "ctct") {
      window.location.replace("contact/contact.html");
    }else if (e.target.id == "tal") {
      window.location.replace("Talkie-Walkie/Talkie-Walkie.html");
    }else if (e.target.id == "camera") {
      window.location.replace("camera/camera.html");
    }
    else if (e.target.id == "anti") {
      window.location.replace("anti/anti.html");
    } else if (e.target.id == "surveillance") {
      window.location.replace("surveillance/surveillance.html");
    }
  }





function produits (e) {
    if (e.target.innerText === "PNC360S") {
      window.location.replace("PNC360S/PNC360S.html");
    }
    if (e.target.innerText === "PNC460") {
      window.location.replace("PNC460/PNC460.html");
    }
    if (e.target.innerText === "PNC560") {
      window.location.replace("PNC560/PNC560.html");
    }
    if (e.target.innerText === "MNC360") {
      window.location.replace("MNC360/MNC360.html");
    }
  }


