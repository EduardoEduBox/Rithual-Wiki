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

const terror = new Images(
  4,
  "Css/assets/backgrounds/tortura.png",
  "Css/assets/characters/iseeyou.png",
  "rgba(255, 0, 0, .7)"
);

const changeHeaderImages = [config1, config2, config3];

// seting the first object as default when you load the page

headerBackgroundImages.style.backgroundImage = `url('${config1.backgroundImage}')`;
headerCharacterImages.src = config1.characterImage;
headerBall.style.backgroundColor = config1.ballColor;

let randomNumber = () => {
  return Math.floor(Math.random() * changeHeaderImages.length);
};

console.log(randomNumber()); // they are different values so it is working :D
console.log(randomNumber());

let i = 1;

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setInterval(() => {
  if (i < changeHeaderImages.length) {
    headerBackgroundImages.style.backgroundImage = `url('${changeHeaderImages[i].backgroundImage}')`;
    headerCharacterImages.src = changeHeaderImages[i].characterImage;
    headerBall.style.backgroundColor = changeHeaderImages[i].ballColor;

    if (i === randomNumber()) {
      setTimeout(() => {
        headerBackgroundImages.style.backgroundImage = `url('${terror.backgroundImage}')`;
        headerCharacterImages.src = terror.characterImage;
        headerBall.style.backgroundColor = terror.ballColor;

        console.log(randomNumber());

        delay(200).then(() => {
          headerBackgroundImages.style.backgroundImage = `url('${
            changeHeaderImages[i - 1].backgroundImage
          }')`;
          headerCharacterImages.src = changeHeaderImages[i - 1].characterImage;
          headerBall.style.backgroundColor =
            changeHeaderImages[i - 1].ballColor;
        });
      }, 200);
    }

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

let currentTooltip = null; // Add this line to declare the currentTooltip variable

let description = ""; // this variable is the description of those tooltips for each chapter
let srcImages = ""; // source for the tooltip images

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    switch (i) {
      case 0:
        textElement.textContent = "Cap - 0: Invasão";
        backgroundTextElement.textContent = "Cap - 0: Invasão";

        description =
          "Uma grande invasão na vila Yasáshi, humanos contra pessoas que se entitulam 'demônios', quem saiu vitorioso?";
        srcImages = "Css/assets/tooltipPages/random1.png";
        break;
      case 1:
        textElement.textContent = "Cap - 1: Padaria";
        backgroundTextElement.textContent = "Cap - 1: Padaria";

        description = "Description for Cap - 1";
        srcImages = "Css/assets/tooltipPages/random2.png";
        break;
      case 2:
        textElement.textContent = "Cap - 2: Pai e irmão";
        backgroundTextElement.textContent = "Cap - 2: Pai e irmão";

        description = "Description for Cap - 2";
        srcImages = "Css/assets/tooltipPages/random3.png";
        break;
      case 3:
        textElement.textContent = "Cap - 3: Paisagem";
        backgroundTextElement.textContent = "Cap - 3: Paisagem";

        description = "Description for Cap - 2";
        srcImages = "Css/assets/tooltipPages/random4.png";
        break;
      case 4:
        textElement.textContent = "Cap - 4: Escola";
        backgroundTextElement.textContent = "Cap - 4: Escola";

        description = "Description for Cap - 2";
        srcImages = "Css/assets/tooltipPages/random5.png";
        break;
      default:
        textElement.textContent = "Capítulos";
        backgroundTextElement.textContent = "Capítulos";

        description = "Description for Cap - 2";
    }

    currentTooltip = changeToolTip(
      srcImages,
      textElement.textContent,
      description
    );
  });

  images[i].addEventListener("mouseout", function () {
    if (currentTooltip) {
      currentTooltip.remove(); // Remove the tooltip element
      currentTooltip = null; // Reset the currentTooltip variable
    }
    textElement.textContent = "Capítulos";
    backgroundTextElement.textContent = "Capítulos";
  });
}

function changeToolTip(imageSrc, title, description) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");

  const image = document.createElement("img");
  image.src = imageSrc;
  image.style.height = "270px"; // Set the image height
  tooltip.appendChild(image);

  const textContainer = document.createElement("div"); // Create a container div for the text elements
  textContainer.classList.add("tooltipInformation");
  tooltip.appendChild(textContainer);

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.style.color = "rgb(224, 108, 108)";
  textContainer.appendChild(titleElement);

  const descElement = document.createElement("p");
  descElement.textContent = description;
  descElement.style.wordWrap = "break-word"; // Set word-wrap property to break long words
  descElement.style.maxWidth = "300px"; // Specify a maximum width for the element

  textContainer.appendChild(descElement);

  document.body.appendChild(tooltip);

  document.addEventListener("mousemove", function (event) {
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    // Calculate the position based on the cursor's coordinates
    let tooltipX = event.clientX + 150; // Add 10px offset to the right of the cursor

    // Check if the tooltip exceeds the right edge of the screen
    if (tooltipX + tooltipWidth > window.innerWidth - 200) {
      tooltipX = event.clientX - tooltipWidth - 100; // Position it to the left of the cursor
    }

    // Set the tooltip position
    tooltip.style.left = tooltipX + "px";
    tooltip.style.top = event.clientY / 5 + tooltipHeight * 4.3 + "px";
  });

  return tooltip;
}
