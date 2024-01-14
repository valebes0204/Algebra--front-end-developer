const fn = require("./testovi");

test("Provjeri da li je 2 + 2 = 4", () => {
  expect(fn.zbrajanje(2, 2)).toBe(4);
});

test("Provjeri 2 + 2 da ne daje 5", () => {
  expect(fn.zbrajanje(2, 2)).not.toBe(5);
});

test("Provjeri vraća li ovo null", () => {
  expect(fn.isNull()).toBeNull();
});

test("Provjeri falsy vrijednosti", () => {
  expect(fn.provjeri(0)).toBeFalsy();
});

test("Provjeri ispravnost objekta", () => {
  expect(fn.objekt()).toEqual({
    ime: "Igor",
    prezime: "Jevremović",
  });
});

test("Igor mora biti u listi", () => {
  listaImena = ["Marija", "Igor", "Luka"];
  expect(listaImena).toContain("Igor");
});

test("Svi objekti u Fetch moraju imati točne vrijednosti za polje 'name'", () => {
  expect.assertions(10);
  return fn.fetchOsoba().then((data) => {
    data.forEach((obj, index) => {
      const expectedName = [
        "Leanne Graham",
        "Ervin Howell",
        "Clementine Bauch",
        "Patricia Lebsack",
        "Chelsey Dietrich",
        "Mrs. Dennis Schulist",
        "Kurtis Weissnat",
        "Nicholas Runolfsdottir V",
        "Glenna Reichert",
        "Clementina DuBuque",
      ][index];

      expect(obj.name).toEqual(expectedName);
    });
  });
});
