if (true) {
  console.log("Ova tvrdnja je istinita i ispisat će se.");
}

if (false) {
  console.log("Ova tvrdnja je neistinita i neće se ispisati");
}

/* if će se ispisati ako je upit true, a else ako je false. */

const godina = 19;
const punoljetan = godina >= 18;

if (punoljetan) {
  console.log("Punoljetan si, možeš voziti.");
}

// skraćeni oblik pisanja istog upita

if (godina >= 18) {
  console.log("Punoljetan si, možeš voziti.");
}

const godinaManja = 15;

if (godinaManja >= 18) {
  console.log("Punoljetan si, možeš voziti.");
} else {
  const godineDoVozacke = 18 - godinaManja;
  console.log(
    `Nisi punoljetan, ne možeš voziti. Moći ćeš voziti za ${godineDoVozacke} godina/e.`
  );
}

// ----------------------------------------------------------------------------------------------------

/* let i const su block scoped varijable što znači da su ograničene na upotrebu unutar bloka (objektne varijable);
  ako ju definiramo unutar IF-ELSE blokova, one neće biti dostupne van tih blokova.
  Ali kada bismo koristili var unutar bloka, umjesto const i let, za definiranje varijable,
  onda bi te varijable bile dostupne van bloka jer var nije ograničen blokovima.) */

const godRodjena = 1983;

/* if (godRodjena >= 2000) {
  let stoljece = "21.";
} else {
  let stoljece = "20.";
  console.log(stoljece);
}

console.log(stoljece); - ne lovi let i const van petlje */

/* ISPRAVAN način pisanja gornjeg primjera: */

let stoljece;

if (godRodjena >= 2000) {
  stoljece = "21.";
} else {
  stoljece = "20.";
}

console.log(stoljece);

/* vježba IF-ELSE:

definiraj varijablu "prosjek" i pomoću IF-ELSE petlje provjeri imamo li više od 5m stanovnika;
ako imamo definiraj "prosjek" s rečenicom "Hrvatska ima (izračun koliko iznad prosjeka) stanovnika.",
a ako nemamo definiraj "prosjek" s rečenicom "Hrvatska ima (izračun koliko ispod prosjeka) stanovnika
ispod prosjeka". Na kraju "prosjek" ispiši u konzolu. */

const hrvatska = 3.8e6;
let prosjek;

if (hrvatska >= 5e6) {
  prosjek = `Hrvatska ima ${hrvatska - 5e6} stanovnika iznad prosjeka.`;
} else {
  prosjek = `Hrvatska ima ${5e6 - hrvatska} stanovnika ispod prosjeka.`;
}

console.log(prosjek);
