$(document).ready(function () {
  fetch("https://pokeapi.co/api/v2/pokemon-color/yellow")
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(error);
      }
    })
    .then(function (data) {
      console.log(data);
      const source = $("#pokemon-list").html();
      const template = Handlebars.compile(source);
      const context = {
        pokemon: data.pokemon_species.slice(0, 20),
        tableClass: "table",
      };
      const html = template(context);
      $("#result").html(html);

      addStripes();
      addPopover();
    })
    .catch(function (error) {
      console.log(error);
    });
});

function addStripes() {
  $("tbody tr").removeClass("striped");
  $("tbody tr:nth-child(odd) td").addClass("striped");
}

function addPopover() {
  $('[data-bs-toggle="popover"]').popover();
  $("table th").css("color", "darkBlue");
}
