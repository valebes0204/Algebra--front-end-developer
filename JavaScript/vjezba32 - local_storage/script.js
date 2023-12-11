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

// funkcija koja učitava zadatke iz localStoragea prilikom uploadanja DOM-a
const prikaziZadatkeLocalStoragea = () => {
  const zadaciSpremiste = dohvatiLocalStorage();
  zadaciSpremiste.forEach((zadatak) => kreirajZadatak(zadatak));
  provjeriListu();
};

// funkcija za dodavanje novih zadataka
const dodajZadatak = (e) => {
  e.preventDefault();

  // moramo inicijalizirati varijablu da nam bude dostupna u ovoj provjeri, ali i nakon toga
  const noviZadatak = zadatakInput.value.trim(); // trimom ne dopuštamo da se u inputu računaju prazni razmaci

  if (noviZadatak === "") {
    alert("Molimo Vas unesite podatak");
    return;
  }

  kreirajZadatak(noviZadatak);
  provjeriListu();

  // ovdje pozivamo localStorage funkciju kada kreiramo zadatak, a kao parametar prosljeđujemo string tj. vrijednost iz inputa
  dodajLocalStorage(zadatakInput.value);

  zadatakInput.value = "";
};

// funkcija za kreiranje elemenata izvučena iz funkcije dodajZadatak (potrebna je još za localStorage pa radimo jednu funkciju za oba mjesta)
const kreirajZadatak = (noviZadatak) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(noviZadatak));

  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);
  listaZadataka.appendChild(li);

  // funkcija za pozivanje iz localStoragea
  const dodajLocalStorage = (zadatakInput) => {
    const zadaciSpremiste = dohvatiLocalStorage();

    zadaciSpremiste.push(zadatakInput); // novi zadatak se pusha u spremiste
    localStorage.setItem("kljuc", JSON.stringify(zadaciSpremiste)); // na kraju se zapisuje u localStorage
  };
};

// funkcija za dohvaćanje iz localStoragea
const dohvatiLocalStorage = () => {
  let zadaciSpremiste;

  /* provjeravamo imamo li spremljeno nešto u local storageu - ako ne, onda se stvara prazna lista,
  ako da, svi elementi s local storagea (koji su stringovi) prebacuju se u listu */
  if (localStorage.getItem("kljuc") === null) {
    zadaciSpremiste = [];
  } else {
    zadaciSpremiste = JSON.parse(localStorage.getItem("kljuc"));
  }

  return zadaciSpremiste;
};

// funkcija za pripremu brisanja pojedinačnog zadatka - stavljamo selekciju zadatka kojeg smo kliknuli....
const obrisiZadatak = (e) => {
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    ukloniZadatak(e.target.parentElement.parentElement);
  }
  provjeriListu();
};

// funkcija za brisanje podatka iz DOM-a i LS-a
const ukloniZadatak = (zadatakIzDOM) => {
  zadatakIzDOM.remove();
  obrisiIzLS(zadatakIzDOM.textContent);
  provjeriListu;
};

// funkcija za slaganje logike brisanja iz LS-a
const obrisiIzLS = (tekstZadatka) => {
  let zadatakIzStoragea = dohvatiLocalStorage();
  zadatakIzStoragea = zadatakIzStoragea.filter((z) => z !== tekstZadatka);
  localStorage.setItem("kljuc", JSON.stringify(zadatakIzStoragea));
};

// funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  listaZadataka.innerHTML = "";
  localStorage.removeItem("kljuc");
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
document.addEventListener("DOMContentLoaded", prikaziZadatkeLocalStoragea);

provjeriListu();
