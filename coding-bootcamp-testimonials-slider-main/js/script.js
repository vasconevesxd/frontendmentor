var testimonial__content = document.getElementsByClassName(
  "testimonial__content"
);
var img = document.getElementsByClassName("img");

testimonial__content[1].classList.add("hidden");
img[1].classList.add("hidden");

function previewButton() {
  if (testimonial__content[0].classList.contains("hidden")) {
    testimonial__content[0].classList.remove("hidden");
    img[0].classList.remove("hidden");

    testimonial__content[1].classList.add("hidden");
    img[1].classList.add("hidden");
  }
}

function nextButton() {
  if (testimonial__content[1].classList.contains("hidden")) {
    testimonial__content[0].classList.add("hidden");
    img[0].classList.add("hidden");

    testimonial__content[1].classList.remove("hidden");
    img[1].classList.remove("hidden");
  }
}
