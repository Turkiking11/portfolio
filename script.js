function animateName() {
  const name = document.querySelector(".name");

  name.style.transition = "0.5s";
  name.style.transform = "scale(1.2)";

  setTimeout(() => {
    name.style.transform = "scale(1)";
  }, 500);
}
