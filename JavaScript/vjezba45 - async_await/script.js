"use strict";

// promise funkcija
const obecanje = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ ime: "Ivan", prezime: "Ivić" });
  }, 300);
});

obecanje.then((data) => console.log(data));

async function dohvatiObecanje() {
  const data = await obecanje;
  console.log(data);
}

dohvatiObecanje();

/* ASYNC/AWAIT METODA
- idejno nastala kako bi asinkorne metode "izgledale" sinkrono i kako bi bile pisane kao sinkroni kod; 
prvo definiramo asinkronu funkciju koja će u response spremiti (s prefixom await) podatke s API-a;
nakon toga će podatke koje dobije (opet s prefixom await) pretvoriti putem JSON metode u objekt */

async function dohvatiUsera() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

dohvatiUsera();

// fetch funkcija
function dohvatiUsera1() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

dohvatiUsera1();

// promise async funkcija
const dohvatiPost = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

dohvatiPost();
