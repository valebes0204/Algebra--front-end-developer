"use strict";

document.getElementById("povuci").addEventListener("click", povuciTekst);

function povuciTekst() {
  fetch("./uzorak.txt")
    .then((res) => res.text())
    .then((data) => (document.getElementById("ispisi").innerHTML = data))
    .catch((error) => console.log(error));
}

document.getElementById("lokalni_json").addEventListener("click", povuciJSON);

function povuciJSON() {
  fetch("users.json")
    .then((response) => response.json())
    .then((data) => {
      let ispis = `<h2>Korisnici</h2>`;
      data.forEach((user) => {
        ispis += `<ul>
        <li>ID: ${user.id}</li>
        <li>Ime: ${user.ime}</li>
        <li>Prezime: ${user.prezime}</li>
        </ul>
        `;
      });
      document.getElementById("ispisi").innerHTML = ispis;
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

document.getElementById("vanjski_json").addEventListener("click", povuciAPI);

// kako povući i ispisati podatke s linka : https://jsonplaceholder.typicode.com/posts (kao i s lokalnog JSON-a)
function povuciAPI() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      data.map((val) => {
        const p = document.createElement("p");
        p.innerHTML = `ID: ${val.id} <br>
                          Title: ${val.title} <br>
                          Body: ${val.body}`;
        document.getElementById("ispisi").appendChild(p);
      })
    )
    .catch((error) => console.log(error));
}

// ubacivanje novog posta u typicode API putem forme pomoću metode "post"
document.getElementById("post").addEventListener("submit", dodajPost);

function dodajPost(e) {
  e.preventDefault();

  let naslov = document.getElementById("title").value;
  let tekst = document.getElementById("body").value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: naslov, body: tekst }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
