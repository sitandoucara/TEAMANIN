//filtre
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".item").show("1000");
    } else {
      $(".item")
        .not("." + value)
        .hide("1000");
      $(".item")
        .filter("." + value)
        .show("1000");
    }
  });

  //ajout de la classe active et selection du filtre
  $(".list").click(function () {
    $(this).addClass("activefilter").siblings().removeClass("activefilter");
  });
});

/*const searche = window.location.search;
const urlSearchParams = new URLSearchParams(searche);
const filter = urlSearchParams.get("filter");
console.log("filter", filter);
if (filter) {
  $(".item2")
    .not("." + filter)
    .hide("1000");
  $(".item2")
    .filter("." + filter)
    .show("1000");
}*/
