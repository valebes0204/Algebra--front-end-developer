const dan = prompt("Koji je danas dan?");

switch (dan) {
  case "ponedjeljak": // u ovom caseu uspoređuje se unos (ono što je došlo kroz varijablu dan) s caseom; dan === "ponedjeljak"
    console.log("Danas je ponedjeljak.");
    console.log("Tek je tjedan počeo.");
    break; // završava izvođenje switcha, inače bi se izvođenje nastavilo s idućim caseom

  case "utorak":
    console.log("Utorak je, još je daleko vikend.");
    break;

  case "srijeda":
    console.log("Srijeda je dan za plac...");
    break;

  case "četvrtak":
    console.log("Mali petak.");
    break;

  case "petak":
    console.log("Petak je.");
    break;

  case "subota":
  case "nedjelja":
    console.log("Vikend je!");
    break;

  default:
    console.log("Niste unijeli dan u tjednu."); // nije potreban break nakon defaulta
}
