// min selector
const c = (el) => document.querySelector(el);

// Header part

const headerBackgroundImages = c("#headerBackgroundImages");
const headerCharacterImages = c("#headerCharacterImages");
const headerBall = c(".headerImageBall");

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

// console.log("printing the first value: ", randomNumber()); // they are different values so it is working :D
// console.log("printing the second value: ", randomNumber());

let i = 1;

// the variable to link the dom to the header text elements
const headerTitle = c(".headerTitle");
const headerParagraph = c(".headerParagraph");
const headerKnowmore = c(".headerKnowMore");
const headerButton = c(".headerButton");

// sets a variable to true when the entire process of changing the images complete
let checker = false;
// console.log(checker);

setTimeout(() => {
  checker = true;
}, 30000);

setInterval(() => {
  if (changeHeaderImages[i]) {
    headerBackgroundImages.style.backgroundImage = `url('${changeHeaderImages[i].backgroundImage}')`;
    headerCharacterImages.src = changeHeaderImages[i].characterImage;
    headerBall.style.backgroundColor = changeHeaderImages[i].ballColor;

    if (i === randomNumber() && checker === true) {
      headerBackgroundImages.style.backgroundImage = `url('${terror.backgroundImage}')`;
      headerCharacterImages.src = terror.characterImage;
      headerBall.style.backgroundColor = terror.ballColor;

      // setting the transition to 0ms so it goes faster

      headerBackgroundImages.style.transition = "0ms";
      headerCharacterImages.style.transition = "0ms";
      headerBall.style.transition = "0ms";

      // console.log(randomNumber());

      // setting the custom font and message
      headerTitle.innerHTML = "Eu vejo você";
      headerParagraph.style.fontFamily = "Dialeto Ancestral";
      headerParagraph.innerHTML = `e todos eles ergueram suas cabecas ao ceu com um olhar explicito de terror, 
        temendo o que encontrariam em seus futuros. repentinamente, 
        a escuridao da morte os consumiu em seu abraço cruel.`;

      headerKnowmore.innerHTML = "HAHAHAHAHAHAHAHAHAHA";
      headerButton.innerHTML = "Sofra";

      setTimeout(() => {
        i - 1;
        headerBackgroundImages.style.backgroundImage = `url('${
          changeHeaderImages[i - 1].backgroundImage
        }')`;
        headerCharacterImages.src = changeHeaderImages[i - 1].characterImage;
        headerBall.style.backgroundColor = changeHeaderImages[i - 1].ballColor;

        // setting the transition to normal when its done

        headerBackgroundImages.style.transition = "500ms";
        headerCharacterImages.style.transition = "500ms";
        headerBall.style.transition = "500ms";

        // setting the font family and content inside to normal

        headerTitle.innerHTML = "Bem vindos ao <br /> (૨¡Ƭષαℓ";
        headerParagraph.style.fontFamily = "Outfit";
        headerParagraph.innerHTML = `(૨¡Ƭષαℓ é um mangá brasileiro sobre um mundo que presencia
          conflitos sangrentos entre humanos e demônios que disputam
          influência sobre a sociedade. Nesta história você irá acompanhar a
          vida de
          <strong>Singer</strong>, um garoto tímido e bastante sorridente
          que está descobrindo o mundo pela primeira vez ao lado de seus
          amigos <strong>Aika</strong>, <strong>San</strong> e
          <strong>Madger</strong>`;

        headerKnowmore.innerHTML = "Conheça mais esse universo!";
        headerButton.innerHTML = "Capítulos";
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
