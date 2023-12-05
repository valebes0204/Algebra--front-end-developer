"use strict";

const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

/* kada koristimo lokalnu memoriju browsera, moramo paziti na to da se u lokalnoj memoriji ne mogu spremati objekti nego stringovi;
kada spremamo podatke u lokalnu memoriju, moramo ih prvo stringify metodom pretvoriti u stringove,
a kada ih iz memorije "vadimo", moramo ih parse metodom pretvoriti nazad u objekte;
postoje 4 bitne metode kod lokalne memorije:

1. localStorage.setItem("kljuc", "vrijednost"); - sprema vrijednost s ključem
2. localStorage.getItem("kljuc"); - dohvaća vrijednost zapisanu na traženom ključu
3. localStorage.removeItem("kljuc"); - briše ključ i vrijednost na traženom ključu
4. localStorage.clear(); - briše sve zapisano u lokalnom storageu
*/

// funkcija za dodavanje novih zadataka
const dodajZadatak = (e) => {
  e.preventDefault();

  if (zadatakInput.value === "") {
    alert("Molimo Vas unesite podatak");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);

  provjeriListu();

  // ovdje pozivamo localStorage funkciju kada kreiramo zadatak, a kao parametar prosljeđujemo string tj. vrijednost iz inputa
  dodajLocalStorage(zadatakInput.value);

  zadatakInput.value = "";
};

// funkcija za dodavanje vrijednosti u localStorage
const dodajLocalStorage = (zadatakInput) => {
  let zadaciSpremiste;

  /* provjeravamo imamo li spremljeno nešto u local storageu - ako ne, onda se stvara prazna lista,
  ako da, svi elementi s local storagea (koji su stringovi) prebacuju se u listu */
  if (localStorage.getItem("kljuc") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
  }

  zadaciSpremiste.push(zadatakInput); // novi zadatak se pusha u spremiste
  localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste)); // na kraju se zapisuje u localStorage
};

// funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    e.target.parentElement.parentElement.remove();
  }
  provjeriListu();
};

// funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  listaZadataka.innerHTML = "";
  provjeriListu();
};

// funkcija za filtriranje zadataka
const filtrirajZadatke = (e) => {
  const zadaci = document.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase();

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// funkcija za prikaz "filter" i "pobriši sve" polja
const provjeriListu = () => {
  const zadaci = document.querySelectorAll("li");

  if (zadaci.length === 0) {
    filter.style.display = "none";
    brisiSve.style.display = "none";
  } else {
    filter.style.display = "block";
    brisiSve.style.display = "block";
  }
};

// event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);

provjeriListu();
