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
  id: string;
  name: string;
  age: number;
  information: string;
  currentStatus: CharacterStatus;
  race: Race;
  profile: string;
  withoutText: string;
  withText: string;
  colorTheme: string;
  appeared: boolean;

  constructor(
    id: string,
    name: string,
    age: number,
    information: string,
    race: Race,
    currentStatus: CharacterStatus,
    profile: string,
    withoutText: string,
    withText: string,
    colorTheme: string,
    appeared: boolean
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.information = information;
    this.race = race;
    this.currentStatus = currentStatus;
    this.profile = profile;
    this.withoutText = withoutText;
    this.withText = withText;
    this.colorTheme = colorTheme;
    this.appeared = appeared;
  }
}

const characters: Characters[] = [
  new Characters(
    "characterSinger",
    "Singer Faksumi",
    17,
    "um jovem aventureiro que nasceu no vilarejo Uxclavasa e sonha em conhecer o mundo e as maravilhas do reino de Belgadina e Ázuma!",
    Race.Human,
    CharacterStatus.Alive,
    "Css/assets/charactersSection/profile/Singer Profile.png",
    "Css/assets/charactersSection/withoutText/singer withoutText.png",
    "Css/assets/charactersSection/Singer corpo completo.png",
    "lightblue",
    true
  ),
  new Characters(
    "characterAika",
    "Aika'nu Zumiki",
    19,
    `Ainda sem registros...`,
    Race.Demon,
    CharacterStatus.Alive,
    "Css/assets/charactersSection/profile/Aika Profile.png",
    "Css/assets/charactersSection/withoutText/aika withoutText.png",
    "Css/assets/charactersSection/Aika corpo completo.png",
    "rgb(255, 223, 239)",
    false
  ),
  new Characters(
    "characterMadger",
    "Madger Yasáshi",
    17,
    "Artista marcial nascido na vila Yasáshi, após uma batalha curta e sangrenta, Madger perdeu pessoas preciosas quando ainda era criança, agora, ele busca honrar aqueles que lutaram por ele em sua antiga vila!",
    Race.Human,
    CharacterStatus.Alive,
    "lsdkfhkljs",
    "Css/assets/charactersSection/withoutText/madger withoutText.png",
    "Css/assets/charactersSection/Madger corpo completo.png",
    "rgb(186, 235, 186)",
    true
  ),
  new Characters(
    "characterSan",
    "San Majutsu-shi",
    19,
    `Ainda sem registros...`,
    Race.Human,
    CharacterStatus.Alive,
    "lsdkfhkljs",
    "Css/assets/charactersSection/withoutText/san withoutText.png",
    "Css/assets/charactersSection/San corpo completo.png",
    "rgb(255, 223, 164)",
    false
  ),
  // Add more characters here...
];

const bigContainer = document.getElementById("characters") as HTMLDivElement;
const contentRemover = document.querySelector(
  ".contentRemover"
) as HTMLDivElement;

// this part here is to load for mobile application

const body = document.querySelector("body") as HTMLBodyElement;

if (body.clientWidth <= 1279) {
  contentRemover.innerHTML = "";
  console.log(`body widht: ${body.clientWidth}`);

  // so lets reassign the values to get the right template for mobile!

  contentRemover.innerHTML = `
     <section id="characters">
        <div id="mobileSidewaysBar"></div>
        <div class="mobileTitleContainer">
          <h1 id="charactersTitle">Personagens</h1>
          <strong class="backgroundText">Personagens</strong>
        </div>

        <div id="charactersContainer">
          <div class="character-info">
            <img src="" alt="" class="character-image" />
            <div id="informationContainer">
              <h1 id="characterBackgroundText"></h1>
              <div id="informationOrganizator">
                <div id="ageAndStatus">
                  <div>
                    <h3 id="characterAge"></h3>
                    <span class="ageColor"></span>
                  </div>
                  <div>
                    <h3 id="characterStatus"></h3>
                    <span class="statusColor"></span>
                  </div>
                  <div>
                    <h3 id="characterRace"></h3>
                    <span class="raceColor"></span>
                  </div>
                </div>
              </div>
            </div>
            <span id="close-button">
              <img src="Css/assets/icons/293657_x_icon (1).png" alt="" />
            </span>
          </div>

          <div class="singerContainer character">
            <img
              src="Css/assets/charactersSection/Singer corpo completo.png"
              alt="Imagem do Singer"
              id="characterSinger"
              class="character-image"
            />
          </div>
          <div class="aikaContainer character">
            <img
              src="Css/assets/charactersSection/Aika corpo completo.png"
              alt="Imagem da Aika"
              id="characterAika"
              class="character-image"
            />
          </div>
          <div class="madgerContainer character">
            <img
              src="Css/assets/charactersSection/Madger corpo completo.png"
              alt="Imagem do Madger"
              id="characterMadger"
              class="character-image"
            />
          </div>
          <div class="sanContainer character">
            <img
              src="Css/assets/charactersSection/San corpo completo.png"
              alt="Imagem do San Majutsu-shi"
              id="characterSan"
              class="character-image"
            />
          </div>
        </div>

        <div class="imageAndInformation">
          <div class="profilePictureDiv">
            <img src="" />
          </div>
          <p id="characterInformation"></p>
        </div>
      </section>
  `;
}

class RenderCharacter {
  // min selector
  static c = (el: string) => document.querySelector(el);
  static charElement: HTMLDivElement;
  static charactersEl: NodeListOf<HTMLImageElement>;

  static styleInformation(el: HTMLDivElement, appeared: boolean) {
    // this condition here checks if the character selected appeared, if false, change the color to gray

    if (!appeared) {
      el.style.color = "gray";
      el.style.fontWeight = "1000";
    } else {
      el.style.color = "white";
      el.style.fontWeight = "400";
    }
  }

  static mountStructure(charElement: HTMLDivElement, char: Characters) {
    this.charElement = charElement;

    if (charElement) {
      let profilePicture = this.c(".profilePictureDiv img") as HTMLImageElement;
      let mainImage = this.c(".character-image") as HTMLImageElement;
      let charBgText = this.c("#characterBackgroundText") as HTMLDivElement;
      let characterInformation = this.c(
        "#characterInformation"
      ) as HTMLDivElement;
      let characterAge = this.c("#characterAge") as HTMLHeadingElement;
      let characterStatus = this.c("#characterStatus") as HTMLHeadingElement;
      let characterRace = this.c("#characterRace") as HTMLHeadingElement;

      const changeSpanColor = () => {
        let ageColor = this.c(".ageColor") as HTMLSpanElement;
        let statusColor = this.c(".statusColor") as HTMLSpanElement;
        let raceColor = this.c(".raceColor") as HTMLSpanElement;

        if (char.appeared) {
          // setting the color and content to the span's value
          ageColor.innerHTML = `${char.age}`;
          ageColor.style.color = char.colorTheme;

          // this condition sets the color and the content of the status

          statusColor.innerHTML = char.currentStatus;

          switch (char.currentStatus) {
            case "Desaparecido":
              statusColor.style.color = "yellow";
              break;

            case "Morto":
              statusColor.style.color = "red";
              break;

            case "Vivo":
              statusColor.style.color = "lightgreen";
              break;

            default:
              throw new Error("Invalid status value");
          }

          // this condition sets the color of the race

          raceColor.innerHTML = char.race;

          switch (char.race) {
            case "Humano":
              raceColor.style.color = "lightgreen";
              break;

            case "Demônio":
              raceColor.style.color = "#ff79ff";
              break;

            case "Apocalipsun":
              raceColor.style.color = "red";
              break;

            case "Arcanjo":
              raceColor.style.color = "yellow";
              break;

            default:
              throw new Error("Invalid race value");
          }
        } else {
          ageColor.innerHTML = "?";
          statusColor.innerHTML = "?";
          raceColor.innerHTML = "?";
          ageColor.style.color = "gray";
          raceColor.style.color = "gray";
          statusColor.style.color = "gray";
        }
      };

      // main application
      profilePicture.src = char.profile;
      mainImage.src = char.withoutText;
      charBgText.innerText = char.name;
      characterInformation.innerText = char.information;
      charBgText.style.color = char.colorTheme;
      characterAge.innerHTML += `Idade:`;
      characterStatus.innerHTML += `Status:`;
      characterRace.innerHTML += `Raça:`;

      changeSpanColor();

      // secondary application
      this.styleInformation(characterInformation, char.appeared);

      gsap.fromTo(charElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    } else {
      throw new Error("Invalid classname or not empty");
    }
  }

  static renderAnimation(
    charElement: HTMLDivElement,
    charactersEl: NodeListOf<HTMLImageElement>,
    char: Characters
  ) {
    // animating elements when you click and validate
    const characterBackgroundText = this.c(
      "#characterBackgroundText"
    ) as HTMLTitleElement;

    if (characterBackgroundText) {
      const characterImage = this.charElement.querySelector(
        ".character-image"
      ) as HTMLImageElement;

      let bgTextAnimation = gsap.to(characterBackgroundText, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power1.out",
      });
      let charImageAnimation = gsap.to(characterImage, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        ease: "power1.out",
      });

      document.querySelector("#close-button")?.addEventListener("click", () => {
        gsap.to(charElement, {
          opacity: 0,
          onComplete: () => {
            let profilePicture = this.c(
              ".profilePictureDiv img"
            ) as HTMLImageElement;
            let mainImage = this.c(".character-image") as HTMLImageElement;
            let charBgText = this.c(
              "#characterBackgroundText"
            ) as HTMLDivElement;
            let characterInformation = this.c(
              "#characterInformation"
            ) as HTMLDivElement;
            let characterAge = this.c("#characterAge") as HTMLHeadingElement;
            let characterStatus = this.c(
              "#characterStatus"
            ) as HTMLHeadingElement;
            let characterRace = this.c("#characterRace") as HTMLHeadingElement;
            let ageColor = this.c(".ageColor") as HTMLSpanElement;
            let statusColor = this.c(".statusColor") as HTMLSpanElement;
            let raceColor = this.c(".raceColor") as HTMLSpanElement;
            let characterInfo = this.c(".character-info") as HTMLDivElement;

            // main application
            profilePicture!.src = "";
            mainImage!.src = "";
            charBgText!.innerText = "";
            characterInformation!.innerText = "";
            charBgText!.style.color = "";
            characterAge!.textContent = "";
            characterStatus!.textContent = "";
            characterRace!.textContent = "";
            ageColor.textContent = "";
            statusColor.textContent = "";
            raceColor.textContent = "";

            bigContainer.style.height = "100vh";
            this.styleInformation(characterInformation, char.appeared);

            if (body.clientWidth <= 1279) {
              characterInfo.style.display = "none";
            }

            bgTextAnimation.revert();
            charImageAnimation.revert();

            gsap.to(charactersEl, { display: "flex", opacity: 1 });
          },
        });
      });
    }
  }
}

const characterImages = document.querySelectorAll(
  "#characterSinger, #characterAika, #characterMadger, #characterSan"
) as NodeListOf<HTMLImageElement>;

const charactersContainer = document.querySelectorAll(
  ".singerContainer, .aikaContainer, .madgerContainer, .sanContainer"
) as NodeListOf<HTMLDivElement>;

let validation: Boolean = false;

charactersContainer.forEach((el, index) => {
  // if the character wasn't previously selected
  el.addEventListener("click", () => {
    if (!el.classList.contains("activated")) {
      validation !== true && changeElementsWhenTrue();
    }
  });

  // animate character
  function changeElementsWhenTrue(): void {
    gsap.to(charactersContainer, {
      duration: 0.5,
      opacity: 0,
      onComplete: () => {
        let characterInfo = document.querySelector(
          ".character-info"
        ) as HTMLDivElement;

        if (window.innerWidth > 1279) {
          bigContainer.style.height = "110vh";
        } else if (body.clientWidth <= 1279) {
          characterInfo.style.display = "flex";
        }

        charactersContainer.forEach((div, i) => {
          charactersContainer[i].style.display = "none";
        });

        let charImageEl = charactersContainer[index].firstElementChild;
        let currentChar: string = charImageEl!.id;
        let selectedCharacter = characters.find((el) => {
          return el.id === currentChar;
        });

        //min selector
        let c = (el: string) => document.querySelector(el) as HTMLDivElement;

        gsap.to(el, {
          onStart: () => {
            RenderCharacter.mountStructure(characterInfo!, selectedCharacter!);
            RenderCharacter.renderAnimation(
              c(".character-info")!,
              document.querySelectorAll(".character"),
              selectedCharacter!
            );
          },
        });
      },
    });
  }
});
