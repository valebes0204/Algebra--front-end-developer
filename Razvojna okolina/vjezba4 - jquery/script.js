/* $(function () {
  $("#btn1").hide();
  $("#btn2").hide(2000).show(3000);
  $("#btn3").slideUp(1000).slideDown(1000);
}); */

// delay, fadeIn, fadeOut, toggle (može ga se dodati i kao fadeToggle)

/* može se mijenjati i CSS */
$(function () {
  $(".col-sm-3:first-child").css({ fontWeight: "bold" });
});

/* može se mijenjati i sadržaj HTML-a */
$(function () {
  $("#btn1").html("Gumbić 1");
});

/* mogu se sakriti/otkriti/togglati stvari na klik gumba */
/* $("#btn1").click(function () {
  $(".row").first().toggle();
});

$("#btn2").click(function () {
  $(".row").eq(1).toggle(); // ako želimo dohvatiti drugi red (eq - equal, a računa od 0)
});

$("#btn3").click(function () {
  $(".row").eq(2).toggle();
}); */

/* na "data("panel-class")" atributu koristit ćemo .this te reći: ne znam koji gumb je stisnut,
ali kojigod gumb je stisnut, uzmi vrijednost i konkatenacijom spoji njegov atribut
i klasu kako bi togglao ciljane elemente */

// dodavanje click event handlera na elemente s klasom .btn-info
$(".btn-info").click(function () {
  // dohvaćanje vrijednosti iz atributa data("panel-class") kliknutog elementa
  const panelClass = $(this).data("panel-class");
  // konkantenacijom kreirana ciljana klasa za togglanje pomoći "panelClass" varijable
  $("." + panelClass).toggle();
});
