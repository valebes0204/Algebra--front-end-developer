const axios = require("axios");

const funkcije = {
  zbrajanje: (broj1, broj2) => broj1 + broj2,
  isNull: () => null,
  provjeri: (x) => x,
  objekt: () => {
    const osoba = { ime: "Igor", prezime: "Jevremović" };
    return osoba;
  },
  fetchOsoba: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.data),
};

module.exports = funkcije;
