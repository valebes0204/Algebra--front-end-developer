"use strict";

/* funkcije - laički, stroj u kojeg ubacimo komponente i dobijemo novi proizvod */

// deklariranje funkcije
function logger() {
  console.log("Hello world!");
}

// calling / running / invoking / executing / ili na hrvatskom, pokretanje funkcije
logger();
logger();
logger();
logger(); // kolko puta pozovemo funkciju, toliko puta će se izvršiti

// ----------------------------------------------------------------------------------------------------

/* prilikom deklariranja funkcije postavljeni su parametri jabuke i narance
- parametri služe kao prijalazne vrijednosti koje ulaze u fuknciju
putem vrijednosti koje smo definirali kada smo pokrenuli funkciju */

function nutriBullet(jabuke, narance) {
  console.log(jabuke, narance);
  const sok = `Sok smo napravili od ${jabuke} komada jabuke i od ${narance} komada naranče.`;
  return sok; // return završava izvođenje funkcije i zapisuje vrijednost koju funkcija vraća
  console.log("Ovo se neće ispisati."); // return označava kraj funkcije pa sve nakon se neće ispisati
}

/* vrijednosti 5, 1 su parametri koji tek sada dobivaju konkretnu vrijednost
- kada bi postojala još jedna funckija s istim parametrima, to ne bi bio problem jer se funkcija drugačije zove
pa samim time ne može doći do konflikta zato što se koriste ista imena za parametre */
nutriBullet(5, 1);

// deklariranje funkcije, tj. zapisivanje rezultata u varijablu

const sokOdJabuke = nutriBullet(5, 0);
const sokOdNarance = nutriBullet(0, 5);
console.log(sokOdJabuke, sokOdNarance);

// ----------------------------------------------------------------------------------------------------

/* arrow funkcija  - još jedan izraz funkcije kao i ova napisana dolje, no može se brže i čišće napisati
- arrow se događa implicitno za razliku od normalne funkcije koje se mora pisati eksplicitno
(kod arrow se ne mora pisati return ako je samo jedna linija u funkciji) */

const godRodjena = function (godina) {
  return 2023 - godina;
};

const godRodjena2 = (godina) => 2023 - godina;

const Jura = godRodjena(2000);
const Pavle = godRodjena2(2001);

console.log(Jura, Pavle);

const godDoMirovine = (godina, ime) => {
  const starost = 2023 - godina;
  const mirovina = 65 - starost;
  if (mirovina > 0) {
    console.log(`${ime} će se umiroviti za ${mirovina} godina`);
    return mirovina;
  } else {
    return;
  }
};

console.log(godineDoMirovine(2000, "Igor"));

// ----------------------------------------------------------------------------------------------------

/* lokalno možemo definirati varijablu pod istim nazivom koju smo već globalno zadali
jer su varijable unutar funkcije ograničene samom funkcijom i nisu dostupne van funkcije (vrijedi za const, let i var).
Ako je varijabla globalno definirana, ona će biti dostupna unutar funkcije i možemo upotrijebiti njenu vrijednost,
ako nemamo definiranu varijablu istog naziva unutar funkcije.
Ako postoji identična varijabla unutar funkcije s drugim vrijednostima, ta (lokalna) varijabla ima prednost
te će funkcija koristiti njenu vrijednost. */

const x = 100;

function lokalna() {
  const y = 50;
  const x = 30;
  var z = 40;
  console.log(x, y);
}

lokalna();

function komadiVoca(voce) {
  return voce * 4;
}

function nutriBulletPrimjer(jabuke, kruske) {
  const komadiJabuke = komadiVoca(jabuke);
  const komadiKruske = komadiVoce(kruske);

  const sok = `Sok od ${komadiJabuke} dijelova jabuka i ${komadiKruske} dijelova kruške.`;
  return sok;
}

console.log(nutriBulletPrimjer(2, 3));
