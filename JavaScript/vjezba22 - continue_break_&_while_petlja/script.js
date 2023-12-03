"use strict";

const godine = [1989, 2005, 1999, 2001];
const dob = [];

for (let i = 0; i < godine.length; i++) {
  /* dob[i] = 2023 - godine[i]; */ // jedna metoda
  dob.push(2023 - godine[i]); // push metoda
}

console.log(dob); // [ 0:34, 1:18, 2:24, 3:22 ]

// ----------------------------------------------------------------------------------------------------

/* break loop - zaustavlja izvođenje iteracije kada se ispuni određeni uvjet */
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("STOP");
    break;
  }
  console.log(i); // 1 2 3 4 5 6 7 8 9 STOP
}

// ----------------------------------------------------------------------------------------------------

/* continue loop - u trenutku kada se ispuni uvjet, continue odrađuje ono što je napisano i nastavlja s prvim idućim članom liste */
for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("Umjesto 10, ispiši deset.");
    continue;
  }
  console.log(i); // 1 2 3 4 5 6 7 8 9 Umjesto 10, ispiši deset. 11 12 13 14 15 16 17 18 19 20
}

// PRIMJER

const user = [
  "Ivan",
  "Ivić",
  2023 - 2000,
  "Soboslikar",
  ["Marko", "Josip", "Marija"],
];

// break ispisuje sve redom dok ne dođe do broja, onda kompletno zaustavlja izvođenje for petlje i ne ispisuje ništa nakon što naleti na broj
for (let i = 0; i < user.length; i++) {
  if (typeof user[i] === "number") break;
  console.log(user[i], typeof user[i]); // Ivan string, Ivić string
}

for (let i = 0; i < user.length; i++) {
  if (typeof user[i] !== "string") continue;
  console.log(user[i], typeof user[i]); // Ivan string, Ivić string, Soboslikar string
}

// for petlja od zadnjeg prema prvom članu liste
for (let i = user.length - 1; i >= 0; i--) {
  console.log(user[i]); // ['Marko', 'Josip', 'Marija'], Soboslikar, 23, Ivić, Ivan
}

// ----------------------------------------------------------------------------------------------------

/* WHILE PETLJA - koristi se za situacije kada ne znamo koliko puta se treba odvrtjeti */

for (let i = 1; i <= 10; i++) {
  console.log(`ispis ${i}`);
}

let x = 1;
while (x <= 10) {
  console.log(`ispis ${x}`);
  x++;
}

let kocka = Math.floor(Math.random() * 6 + 1);

while (kocka !== 6) {
  console.log(`Dobio si ${kocka}!`);
  kocka = Math.floor(Math.random() * 6 + 1);
  if (kocka === 6) {
    console.log(`Dobio si ${kocka}!`);
  }
}
