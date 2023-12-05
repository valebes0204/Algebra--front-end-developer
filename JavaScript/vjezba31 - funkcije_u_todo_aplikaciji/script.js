"use strict";

// hoistamo globalne varijable
const forma = document.getElementById("zadatak-forma");
const zadatakInput = document.getElementById("zadatak-input");
const listaZadataka = document.getElementById("zadatak-list");
const filter = document.getElementById("filter");
const brisiSve = document.getElementById("clear");

// ----------------------------------------------------------------------------------------------------

// FUNKCIJE

// funkcija za dodavanje novih zadataka
const dodajZadatak = (e) => {
  e.preventDefault(); // zaustavlja reload stranice u ovom slučaju

  // provjera da li je korisnik ostavio prazno input polje prije submita
  if (zadatakInput.value === "") {
    alert("Molimo Vas unesite podatak!");
    return;
  }

  // kreiramo list item i njegov sadržaj
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(zadatakInput.value));

  // kreiramo button i dodajemo klase na njega
  const delGumb = document.createElement("button");
  delGumb.className = "ukloni-zadatak btn-link";

  // kreiramo ikonu i dodajemo klase na nju
  const ikona = document.createElement("i");
  ikona.className = "fa-solid fa-xmark";

  delGumb.appendChild(ikona);
  li.appendChild(delGumb);

  // kada smo kreirali element, dodajemo ga na listu zadataka
  listaZadataka.appendChild(li);
  provjeriListu();

  // reset input polja na prazan string
  zadatakInput.value = "";
};

// ----------------------------------------------------------------------------------------------------

// funkcija za brisanje pojedinačnog zadatka
const obrisiZadatak = (e) => {
  /* if provjerom provjeravamo da li smo kliknuli na ikonu koja ima parentElement s klasom .ukloni-zadatak (button)
   i u slučaju da ima takav parentElement, petlja prolazi po DOM stablu, te dolazi do list itema 2 puta po parentElementom chainu
    i uklanja ga */
  if (e.target.parentElement.classList.contains("ukloni-zadatak")) {
    // ako e.target (u ovom slučaju ikona), ima parent element s klasom .ukloni-zadatak (button) ->
    e.target.parentElement.parentElement.remove();
    // onda ukloni drugi parent element ikone (prvo je button, a iznad je li) - time se uklanja cijeli list item
  }
  provjeriListu();
};

// ----------------------------------------------------------------------------------------------------

// funkcija za brisanje svih zadataka
const obrisiZadatke = () => {
  listaZadataka.innerHTML = ""; // ovo samo "kozmetički" uklanja zadatak, ne briše ga iz local storagea
  provjeriListu();
};

// ----------------------------------------------------------------------------------------------------

// funkcija za filtriranje zadataka
const filtrirajZadatke = (e) => {
  const zadaci = document.querySelectorAll("li");
  const tekst = e.target.value.toLowerCase(); // svaki uneseni tekst pretvara u mala slova

  zadaci.forEach((zadatak) => {
    const imeZadatka = zadatak.firstChild.textContent.toLowerCase();
    if (imeZadatka.indexOf(tekst) != -1) {
      zadatak.style.display = "flex";
    } else {
      zadatak.style.display = "none";
    }
  });
};

// ----------------------------------------------------------------------------------------------------

// funkcija za prikaz "filter" i "pobriši sve" polja - funkciju pokrećemo nakon svake druge funkcije da provjerimo stanje sa zadacima
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

// ----------------------------------------------------------------------------------------------------

// event listeneri
forma.addEventListener("submit", dodajZadatak);
listaZadataka.addEventListener("click", obrisiZadatak);
brisiSve.addEventListener("click", obrisiZadatke);
filter.addEventListener("input", filtrirajZadatke);

provjeriListu();
