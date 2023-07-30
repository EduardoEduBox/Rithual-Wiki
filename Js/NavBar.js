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
        <li class="charactersMedia"><a href="">Personagens</a></li>
        <li class="aboutMedia"><a href="">Sobre mim</a></li>
        <li><hr></li> 
      </ul>`;

    document.body.appendChild(navElements);

    setTimeout(() => {
      navElements.style.right = "0";
    }, 0);
  } else {
    hamburguerIcon.src = "Css/assets/icon.png";

    navElements.style.right = `calc(-${navElements.offsetWidth}px - 1.5rem)`;
  }
});

function handleResize() {
  if (window.innerWidth > 1279) {
    // Remove navElements from the document.body
    navElements.remove();
  }
}

window.addEventListener("resize", handleResize);

const advice = document.querySelectorAll(
  ".navList li:nth-child(4), .navList2 li:nth-child(4)"
);

advice.forEach(function (li) {
  li.addEventListener("click", function () {
    Swal.fire({
      title: "DEU RUIM!",
      text: "Tá em beta o site, sendo assim existem coisas aqui que só estão por aqui por questão de organização, essas sessões irão aparecer no futuro, CONFIA!",
      imageUrl:
        "https://cdn.discordapp.com/attachments/421344962303623189/1113987029550764052/image.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "eeee agua eeeee agua",
    });
  });
});
