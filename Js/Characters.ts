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
    Race.Demon,
    CharacterStatus.Alive,
    "sçdf",
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

class RenderCharacter {
  // min selector
  static c = (el: string) => document.querySelector(el);
  static charElement: HTMLDivElement;
  static charactersEl: NodeListOf<HTMLImageElement>;

  static styleInformation(el: HTMLDivElement, appeared: boolean) {
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

      // main application
      profilePicture.src = char.profile;
      mainImage.src = char.withoutText;
      charBgText.innerText = char.name;
      characterInformation.innerText = char.information;
      charBgText.style.color = char.colorTheme;

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

            // main application
            profilePicture!.src = "";
            mainImage!.src = "";
            charBgText!.innerText = "";
            characterInformation!.innerText = "";
            charBgText!.style.color = "";

            bigContainer.style.height = "100vh";
            this.styleInformation(characterInformation, char.appeared);

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

const bigContainer = document.getElementById("characters") as HTMLDivElement;

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
        bigContainer.style.height = "110vh";
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
            RenderCharacter.mountStructure(
              c(".character-info")!,
              selectedCharacter!
            );
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
