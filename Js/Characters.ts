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

const characterImages = document.querySelectorAll(
  ".character-image"
) as NodeListOf<HTMLImageElement>;
const characterInfo = document.getElementById("character-info") as HTMLElement;
const characterInfoImage = document.getElementById(
  "character-info-image"
) as HTMLImageElement;
const closeButton = document.getElementById("close-button") as HTMLElement;

characterImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    const character = characters[index];

    // Display character information
    characterInfo.innerHTML = `
        <h2>${character.name}</h2>
        <p>Idade: ${character.age}</p>
        <p>Raça: ${character.race}</p>
        <p>Status atual: ${character.currentStatus}</p>
        <p>${character.information}</p>
      `;

    // Display additional character image
    characterInfoImage.src = `path/to/character-image-${character.id}.png`;

    // Show the character info section
    characterInfo.classList.add("active");
  });
});
