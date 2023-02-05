//navbar

const navLinks = document.querySelector(".nav_links");
const menuHamburger = document.querySelector(".menu_burger");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile_menu");
});

//filtre
$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".cristal").show("1000");
    } else {
      $(".cristal")
        .not("." + value)
        .hide("1000");
      $(".cristal")
        .filter("." + value)
        .show("1000");
    }
  });

  //ajout de la classe active et selection du chakra
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

const searche = window.location.search;
const urlSearchParams = new URLSearchParams(searche);
const filter = urlSearchParams.get("filter");
console.log("filter", filter);
if (filter) {
  $(".cristal")
    .not("." + filter)
    .hide("1000");
  $(".cristal")
    .filter("." + filter)
    .show("1000");
}
