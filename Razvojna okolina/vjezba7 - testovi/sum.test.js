const sum = require("./sum");

test("Zbrajanje 1 i 2 moraju dati 3", () => {
  expect(sum(1, 2)).toBe(3);
});
