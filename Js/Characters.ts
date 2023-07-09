enum CharacterStatus {
  Alive = "Vivo",
  Dead = "Morto",
  Missing = "Desaparecido",
}

enum Race {
  Human = "Humano",
  Demon = "Demônio",
  Archangel = "Arcanjo",
  Apocalipsun = "Apocalipsun",
}

class Characters {
  id: number;
  name: string;
  age: number;
  information: string;
  currentStatus: CharacterStatus;
  race: Race;
  profile: string;
  withoutText: string;
  colorTheme: string;

  constructor(
    id: number,
    name: string,
    age: number,
    information: string,
    race: Race,
    currentStatus: CharacterStatus,
    profile: string,
    withoutText: string,
    colorTheme: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.information = information;
    this.race = race;
    this.currentStatus = currentStatus;
    this.profile = profile;
    this.withoutText = withoutText;
    this.colorTheme = colorTheme;
  }
}

const characters: Characters[] = [
  new Characters(
    1,
    "Singer Faksumi",
    17,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Race.Demon,
    CharacterStatus.Alive,
    "sçdf",
    "Css/assets/charactersSection/withoutText/singer withoutText.png",
    "lightblue"
  ),
  new Characters(
    2,
    "Aika'nu Zumiki",
    19,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Race.Demon,
    CharacterStatus.Alive,
    "Css/assets/charactersSection/profile/Aika Profile.png",
    "Css/assets/charactersSection/withoutText/aika withoutText.png",
    "rgb(255, 223, 239)"
  ),
  new Characters(
    3,
    "Madger Yasáshi",
    17,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Race.Human,
    CharacterStatus.Alive,
    "lsdkfhkljs",
    "Css/assets/charactersSection/withoutText/madger withoutText.png",
    "rgb(186, 235, 186)"
  ),
  // Add more characters here...
];

const characterImages = document.querySelectorAll(
  ".character-image"
) as NodeListOf<HTMLImageElement>;

const charactersContainer = document.querySelectorAll(
  ".singerContainer, .aikaContainer, .madgerContainer, .sanContainer"
) as NodeListOf<HTMLDivElement>;

const bigContainer = document.getElementById("characters") as HTMLDivElement;
const closeButton = document.getElementById("close-button") as HTMLSpanElement;

let validation: Boolean = false;

characterImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    console.log(index);

    if (
      validation === true &&
      charactersContainer[index].classList.contains("true")
    ) {
      changeElementsWhenFalse();
      validation = false;
    } else {
      changeElementsWhenTrue();
      validation = true;
    }
  });

  function changeElementsWhenTrue(): void {
    charactersContainer[index].classList.toggle("true");
    console.log("clicado caralho");

    TweenMax.to(charactersContainer, 0.5, {
      opacity: 0,
      onComplete: () => {
        charactersContainer[index].style.width = "100%";
        bigContainer.style.height = "110vh";
        charactersContainer.forEach((div, i) => {
          if (i !== index) {
            charactersContainer[i].style.display = "none";
          }
        });

        TweenMax.to(charactersContainer[index], 1, {
          opacity: 1,
          onStart: () => {
            charactersContainer[index].innerHTML = `
              <div class="profilePictureDiv">
                <img src="${characters[index].profile}" />
              </div>
              <img
                src="${characters[index].withoutText}"
                alt="Imagem do Singer"
                id="characterSinger"
                class="character-image"
              />
              <h1 id="characterBackgroundText" style="color:${
                characters[index].colorTheme
              }">${characters[index].name.toUpperCase()}</h1>
              <span id="close-button">
                <img src="Css/assets/icons/293657_x_icon (1).png" alt=""/>
              </span>
            `;

            // animating elements when you click in one of the characters
            const characterBackgroundText = document.getElementById(
              "characterBackgroundText"
            ) as HTMLTitleElement;
            if (characterBackgroundText) {
              characterBackgroundText.style.transform = "translateX(-500px)";
              characterBackgroundText.style.opacity = "0";

              const tl = gsap.timeline();
              tl.to(characterBackgroundText, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power1.out",
              });
            }

            const characterImage = charactersContainer[index].querySelector(
              ".character-image"
            ) as HTMLImageElement;
            if (characterImage) {
              characterImage.style.transform = "translateX(500px)";
              characterImage.style.opacity = "0";

              const tl = gsap.timeline();
              tl.to(characterImage, {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power1.out",
              });
            }
            /////////////////////////////////////////////////////////////////////
          },
        });
      },
    });
  }

  function changeElementsWhenFalse(): void {
    closeButton.addEventListener("click", () => {
      charactersContainer.forEach((div, i) => {
        div.style.display = "flex";
        div.style.width = "25%";
        console.log("sledkfjsdjklf");
      });

      validation = false;
    });
  }
});
