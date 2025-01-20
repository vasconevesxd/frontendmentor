var element = document.getElementById("social-toggle");
var cardFooter = document.getElementsByClassName("card__footer");

function showShare() {
  element.classList.toggle("hide");

  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );

  if (vw < 1440 && !element.classList.contains("hide")) {
    cardFooter[0].style.background = "hsl(217, 19%, 35%)";
    cardFooter[0].style.borderRadius = "0 0 1rem 1rem";
  } else {
    cardFooter[0].style.background = "transparent";
  }

}

function windowSize() {
  var vw = window.outerWidth;

  if (vw < 1440 && !element.classList.contains("hide")) {
    cardFooter[0].style.background = "hsl(217, 19%, 35%)";
    cardFooter[0].style.borderRadius = "0 0 1rem 1rem";
  } else {
    cardFooter[0].style.background = "transparent";
  }
}
