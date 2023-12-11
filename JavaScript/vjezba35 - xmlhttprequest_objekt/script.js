/* HyperText Transfer Protocol je klijent/server protokol za slanje i primanje podataka na webu;
zahtjev inicijalizira klijent, a server reagira s odgovorom koji može biti HTML/CSS/JS/JSON/XML... 

HTTP metode:

1. GET - traži podatke sa servera
2. POST - šalje podatke na server
3. PUT&PATCH - update podataka na serveru (EDIT)
4. DELETE - brisanje podataka na serveru

HTTP status kodovi:

100 - continue

200 - uspjeh, uspješna konekcija
201 - uspješno kreiranje
204 - uspjeh, bez sadržaja

300 - redirect
301 - trajni redirect
302 - privremeni redirect

400 - error kod klijenta (bad request)
401 - neautoriziran zahtjev
403 - zabranjeni zahtjev
404 - zahtjev za nečim što ne postoji više (not found)

500 - greške na serveru

XMLHttpRequest je objekt ugrađen u browseru koji nam omogućava da napravimo zahtjev prema serveru preko AJAX enginea, što nam
na kraju omogućava dinamično ponašanje stranice gdje ćemo dohvatiti podatke bez refresha stranice */

// ----------------------------------------------------------------------------------------------------

// kada kreiramo novi HTTPRequest moramo kreirati novi objekt iz XMLHTTPRequesta te moramo definirati metodu i url/lokaciju
const xhr = new XMLHttpRequest(); // new radi novi objekt koji se sprema u varijablu
const metoda = "GET";
const url = "./imena.json";

// s metodom .open inicijaliziramo HTTP zahtjev - ta metoda daje 2 parametra (metoda i url/lokacija)
xhr.open(metoda, url);

// sada pozivamo event handler .onreadystatechange kojim možemo upravljati ReadyState svojstvom koji sadrži status u kojem se XMLHttpRequest nalazi
xhr.onreadystatechange = function () {
  /* console.log(this.readyState);
  console.log(this.status); */

  // nakon što smo utvrdili da je uspješno prošla konekcija, pišemo if petlju kojom ćemo se osigurati da radimo s 4 & 200 statusom
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((osoba) => {
      const li = document.createElement("li");
      li.innerHTML = `${osoba.ime} ${osoba.prezime} ima ${osoba.godina} godina.`;
      document.querySelector("#imena").appendChild(li);
    });
  }
};

xhr.send();

// ----------------------------------------------------------------------------------------------------

/* 
za razliku od statusa, ReadyState ima 5 mogućih ishoda:
0: zahtjev nije inicijaliziran
1: server konekcija je uspostavljena
2: zahtjev je zaprimljen
3: zahtjev se procesuira
4: zahtjev je završio i odgovor je spreman
*/

/* istu stvar prema online resursu, konkretno prema GitHub API-u */
const url2 = "https://api.github.com/users";

xhr.open(metoda, url2);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.response);
    data.forEach((osoba) => {
      const li = document.createElement("li");
      li.innerHTML = osoba.login;
      document.querySelector("#imena").appendChild(li);
    });
  }
};

xhr.send();
