"use strict";

// PRIMJER callback hell-a

/* function getData(putanja, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", putanja);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.response));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 500) + 100);
}

getData("./filmovi.json", (filmovi) => {
  console.log(filmovi);
  getData("./glumci.json", (glumci) => {
    console.log(glumci);
    getData("./redatelji.json", (redatelji) => {
      console.log(redatelji);
    });
  });
}); */

// ----------------------------------------------------------------------------------------------------

// PRIMJER promise funkcije (napravljena od gornje)

/* function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject("Dogodila se greška");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 500) + 100);
  });
}

getData("./filmovi.json")
  .then((filmovi) => {
    console.log(filmovi);
    return getData("./glumci.json");
  })
  .then((glumci) => {
    console.log(glumci);
    return getData("./redatelji.json");
  })
  .then((redatelji) => {
    console.log(redatelji);
  })
  .catch((greska) => {
    console.log(greska);
  }); */

// ----------------------------------------------------------------------------------------------------

// promise.all metoda

function getData(putanja) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", putanja);

    xhr.onreadystatechange = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.response));
        } else {
          reject("Dogodila se greška.");
        }
      }
    };

    setTimeout(() => {
      xhr.send();
    }, Math.floor(Math.random() * 500) + 100);
  });
}

const filmovi = getData("./filmovi.json");
const glumci = getData("./glumci.json");
const redatelji = getData("./redatelji.json");

//ovim pristupom možemo chainat nove stvari u LISTU promise-a
const recenica = new Promise((resolve, reject) => {
  resolve("Hello world!");
});

Promise.all([filmovi, glumci, redatelji, recenica])
  .then((podaci) => {
    console.log(podaci);
  })
  .catch((greska) => {
    console.log(greska);
  });
