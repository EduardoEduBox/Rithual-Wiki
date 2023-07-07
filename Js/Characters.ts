// okay, i choose TS instead of JS because Typescript has some options that should help me when building the characters information!
const singerImg = document.getElementById(
  "characterSinger"
) as HTMLImageElement;
const aikaImg = document.getElementById("characterAika") as HTMLImageElement;

// just the default values to put in the currentStatus property
enum CharacterStatus {
  Alive = "Vivo",
  Dead = "Morto",
  Missing = "Desaparecido",
}

enum Race {
  Human = "Humano",
  Demônio = "Demônio",
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

  constructor(
    id: number,
    name: string,
    age: number,
    information: string,
    race: Race,
    currentStatus: CharacterStatus,
    profile: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.information = information;
    this.race = race;
    this.currentStatus = currentStatus;
    this.profile = profile;
  }
}

const characters: Characters[] = [
  new Characters(
    1,
    "Singer",
    25,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Race.Human,
    CharacterStatus.Alive,
    "sçdf"
  ),
  new Characters(
    2,
    "Aika",
    22,
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    Race.Demônio,
    CharacterStatus.Alive,
    "sdlkfjlsdkfj"
  ),
  // Add more characters here...
];

// this is the image for each character
const characterImages = document.querySelectorAll(
  ".character-image"
) as NodeListOf<HTMLImageElement>;

// this is the container that holds those images
const charactersContainer = document.querySelectorAll(
  ".singerContainer, .aikaContainer, .madgerContainer, .sanContainer"
) as NodeListOf<HTMLDivElement>;

const bigContainer = document.getElementById("characters") as HTMLDivElement;

function changeElementsWhenTrue(): void {
  bigContainer.style.height = "130vh";
}

console.log(characterImages);

characterImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    charactersContainer[index].classList.toggle("true");

    charactersContainer.forEach((div, i) => {
      if (i != index) {
        charactersContainer[i].style.display = "none";
      }
    });

    changeElementsWhenTrue;
  });
});

console.log(charactersContainer[1]);
