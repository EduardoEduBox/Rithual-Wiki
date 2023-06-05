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

const advice = document.querySelectorAll(
  ".navList li:nth-child(3), .navList li:nth-child(4), .navList2 li:nth-child(3), .navList2 li:nth-child(4)"
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

    // Swal.fire({
    //   title: "Site em Beta :(",
    //   text: "Por conta do site não estar completo, algumas features e sessões não existem ainda",
    //   icon: "error",
    //   confirmButtonText: "Entendi.",
    // });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Header part

const headerBackgroundImages = document.querySelector(
  "#headerBackgroundImages"
);
const headerCharacterImages = document.querySelector("#headerCharacterImages");
const headerBall = document.querySelector(".headerImageBall");

class Images {
  constructor(id, backgroundImage, characterImage, ballColor) {
    this.id = id;
    this.backgroundImage = backgroundImage;
    this.characterImage = characterImage;
    this.ballColor = ballColor;
  }
}

const config1 = new Images(
  1,
  "Css/assets/backgrounds/backgroundHeader.png",
  "Css/assets/characters/demonio_cap_0_site_prototipo.png",
  "rgb(255, 0, 0)"
);

const config2 = new Images(
  2,
  "Css/assets/backgrounds/backgroundHeader2.png",
  "Css/assets/characters/málanus_cap_2_site_prototipo.png",
  "#9400d3"
);

const config3 = new Images(
  3,
  "Css/assets/backgrounds/backgroundHeader3.png",
  "Css/assets/characters/singer_cap_3_site_prototipo.png",
  "rgb(90, 206, 255)"
);

const changeHeaderImages = [config1, config2, config3];

// seting the first object as default when you load the page

headerBackgroundImages.style.backgroundImage = `url('${config1.backgroundImage}')`;
headerCharacterImages.src = config1.characterImage;
headerBall.style.backgroundColor = config1.ballColor;

let i = 1;

setInterval(() => {
  if (i < changeHeaderImages.length) {
    headerBackgroundImages.style.backgroundImage = `url('${changeHeaderImages[i].backgroundImage}')`;
    headerCharacterImages.src = changeHeaderImages[i].characterImage;
    headerBall.style.backgroundColor = changeHeaderImages[i].ballColor;

    i++;
  } else {
    headerBackgroundImages.style.backgroundImage = `url('${changeHeaderImages[0].backgroundImage}')`;
    headerCharacterImages.src = changeHeaderImages[0].characterImage;
    headerBall.style.backgroundColor = changeHeaderImages[0].ballColor;

    i = 1;
  }
}, 10000);

/////////////////////////////////////////////////////////////////////////////////////////////////////
// Chapters section part

const images = document.getElementsByClassName("prePages");
const textElement = document.getElementById("chaptersTitle");
const backgroundTextElement = document.querySelector(".backgroundText");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    switch (i) {
      case 0:
        textElement.textContent = "Cap - 0: Invasão";
        backgroundTextElement.textContent = "Cap - 0: Invasão";
        break;
      case 1:
        textElement.textContent = "Cap - 1: Padaria";
        backgroundTextElement.textContent = "Cap - 1: Padaria";
        break;
      case 2:
        textElement.textContent = "Cap - 2: Pai e irmão";
        backgroundTextElement.textContent = "Cap - 2: Pai e irmão";
        break;
      case 3:
        textElement.textContent = "Cap - 3: Paisagem";
        backgroundTextElement.textContent = "Cap - 3: Paisagem";
        break;
      case 4:
        textElement.textContent = "Cap - 4: Escola";
        backgroundTextElement.textContent = "Cap - 4: Escola";
        break;
      default:
        textElement.textContent = "Capítulos";
        backgroundTextElement.textContent = "Capítulos";
    }
  });

  images[i].addEventListener("mouseout", function () {
    textElement.textContent = "Capítulos";
    backgroundTextElement.textContent = "Capítulos";
  });
}

// okay, here we goooooooooo!!!!

function changeToolTip() {
  // yeeeahhh
}
