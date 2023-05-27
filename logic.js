// Nav bar part

const hamburguerIcon = document.querySelector("#menuIcon");
const navList = document.querySelector(".navList");

hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle("hamburguerToggled");

  if (hamburguerIcon.classList.contains("hamburguerToggled")) {
    hamburguerIcon.src = "Css/assets/logoChanged.png";

    // here is the code to make the list appear when you click

    //......
  } else {
    hamburguerIcon.src = "Css/assets/icon.png";
  }
});
