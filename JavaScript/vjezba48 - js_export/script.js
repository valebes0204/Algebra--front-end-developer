"use strict";

import { kosarica, dodajProizvode } from "./cart.js"; // destrukturiranje
/* import * as cart from "./cart.js";

cart.dodajProizvode("pašteta", 4);
cart.dodajProizvode("mlijeko", 2);
cart.dodajProizvode("kruh", 1); - ako importamo cijeli js file, onda moramo pozivati taj file prije*/

console.log(kosarica);

dodajProizvode("pašteta", 4);
dodajProizvode("mlijeko", 2);
dodajProizvode("kruh", 1);

console.log(kosarica);
