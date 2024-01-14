"use strict";

let x;
let y;
let z;

/* date će nam biti objekt koji sadržava vrijeme */
x = new Date();
console.log(x, typeof x);

// može se pretvoriti i u string
x = x.toString();
console.log(x, typeof x);

// možemo mu definirati fiksno vrijeme na više načina
x = new Date("2023-12-12T19:30:00");
console.log(x, typeof x);
y = new Date("12/10/2023 19:30:00");
console.log(y, typeof y);

z = new Date();

// vrijeme prikazano u milisekundama od 01.01.1970. - također zvano timestamp
z = z.getTime();
console.log(z, typeof z);
z = y.valueOf();
console.log(z, typeof z);

z = new Date();

// kako dohvatiti godinu iz datuma
y = z.getFullYear();
console.log(y, typeof y);

// kako dohvatiti mjesec iz datuma
y = z.getMonth() + 1;
console.log(y, typeof y);

// kako dohvatiti dan iz datuma - nedjelja će biti 0 a ne 7!
y = z.getDay();
console.log(y, typeof y);

// kako dohvatiti sat iz datuma
y = z.getHours();
console.log(y, typeof y);

// kako dohvatiti minute iz datuma
y = z.getMinutes();
console.log(y, typeof y);

y = Intl.DateTimeFormat("hr-HR").format(z);
console.log(y);
