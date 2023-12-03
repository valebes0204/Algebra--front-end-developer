"use strict";

/* const user = "Valentina";
console.log(user); */

/* IIFE = Imemediately Invoked Function Expression - funkcija koja će se odmah izvršiti nakon što se definira,
nije ju potrebno pozvati.
Sintaksa je malo drugačija - funkciju se postavlja u okrugle zagrade,
a unutar funkcije normalno pišemo kao i ostale funkcije.
Na kraju se dodaje prazna okrugla zagrada koja služi za prosljeđivanje parametara. */

(function (pozdrav) {
  const user = "Valentina";
  console.log(user);
  const ifi = () => console.log(`Ovo je ${pozdrav} iz IFI funkcije.`);
  ifi();
})("pozdrav");
