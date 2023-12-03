/* npr. 5 + 6 je expression jer će proizvesti određenu vrijednost, 2000 je isto expression, true i false isto expression

IF ELSE, switch... direktno ne proizvode vrijednost, nisu expressioni nego statementi,
oni su sekvence akcije, a tek te akcije mogu dati vrijednost (expression) */

const godine = 23;
let punoljetanX;

if (godine >= 18) {
  console.log("Možeš polagati vozački.");
  punoljetanX = "Možeš polagati vozački.";
} else {
  console.log("Ne možeš polagati vozački.");
  punoljetanX = "Ne možeš polagati vozački";
}

// ----------------------------------------------------------------------------------------------------

/* ternary operator (trojni operator) - drugačiji način pisanja IF ELSE upita,
"?" je isto kao što i "if", tj. da je to uvjet koji se mora ispuniti;
nakon upita prvo dolazi kod koji će se izvrtjeti ako je upit istinit (true),
a ono što dolazi nakon dvotočke izvrtit će se ako je upit neistinit (false) */

godine >= 18
  ? console.log("Možeš polagati vozački.")
  : console.log("Ne možeš polagati vozački.");

// ternary operator može se odmah ubaciti u neku varijablu
const punoljetan =
  godine >= 18 ? "Možeš polagati vozački." : "Ne možeš polagati vozački.";

console.log(punoljetan);

// za razliku od if else petlje, koja je deklaracija, ternary operator daje vrijednost pa se može ubaciti u template literal
console.log(`Imaš li više od 18 godina? ${godine >= 18 ? "Imam." : "Nemam."}`);

/* još jedan primjer: */

const auth = true;

// if else pristup

let redirect;

if (auth) {
  alert("Autorizacija je prošla!");
  redirect = "/dashboard";
} else {
  alert("Autorizacija nije prošla!");
  redirect = "/login";
}

console.log(redirect);

// ternary operator pristup

const redirect2 = auth
  ? (alert("Autorizacija je prošla."), "./dashboard")
  : (alert("Autorizacija nije prošla!"), "./login");

auth && console.log("Autorizacija je prošla!"); // provjera da li je nešto true, ili ako ne želimo ništa napraviti ako je false na lijevoj strani
