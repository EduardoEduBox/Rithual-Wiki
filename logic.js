// Nav bar part

const hamburguerIcon = document.querySelector("#menuIcon");
const navElements = document.createElement("div");

hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle("hamburguerToggled");

  if (hamburguerIcon.classList.contains("hamburguerToggled")) {
    hamburguerIcon.src = "Css/assets/logoChanged.png";

    // Code to make the list appear when you click
    navElements.classList.add("navMediaQuery");
    navElements.innerHTML = `
      <ul class="navList2">
        <li><a href="#header">Home</a></li>
        <li><a href="#chapters">Capítulos</a></li>
        <li><a href="">Personagens</a></li>
        <li><a href="">Sobre mim</a></li>
        <li><hr></li> 
      </ul>`;

    document.body.appendChild(navElements);

    setTimeout(() => {
      navElements.style.right = "0";
    }, 0);

    console.log("if");
  } else {
    hamburguerIcon.src = "Css/assets/icon.png";

    navElements.style.right = `calc(-${navElements.offsetWidth}px - 1.5rem)`;

    console.log("else");
  }
});

function handleResize() {
  if (window.innerWidth > 1279) {
    // Remove navElements from the document.body
    navElements.remove();
  }
}

window.addEventListener("resize", handleResize);
