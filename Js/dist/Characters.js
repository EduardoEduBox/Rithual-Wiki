"use strict";
const singerImg = document.getElementById("characterSinger");
const aikaImg = document.getElementById("characterAika");
var CharacterStatus;
(function (CharacterStatus) {
    CharacterStatus["Alive"] = "Vivo";
    CharacterStatus["Dead"] = "Morto";
    CharacterStatus["Missing"] = "Desaparecido";
})(CharacterStatus || (CharacterStatus = {}));
var Race;
(function (Race) {
    Race["Human"] = "Humano";
    Race["Dem\u00F4nio"] = "Dem\u00F4nio";
    Race["Archangel"] = "Arcanjo";
    Race["Apocalipsun"] = "Apocalipsun";
})(Race || (Race = {}));
class Characters {
    constructor(id, name, age, information, race, currentStatus, profile) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.information = information;
        this.race = race;
        this.currentStatus = currentStatus;
        this.profile = profile;
    }
}
const characters = [
    new Characters(1, "Singer", 25, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Race.Human, CharacterStatus.Alive, "sçdf"),
    new Characters(2, "Aika", 22, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", Race.Demônio, CharacterStatus.Alive, "sdlkfjlsdkfj"),
];
const characterImages = document.querySelectorAll(".character-image");
const charactersContainer = document.querySelectorAll(".singerContainer, .aikaContainer, .madgerContainer, .sanContainer");
const bigContainer = document.getElementById("characters");
console.log(characterImages);
characterImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        charactersContainer[index].classList.toggle("true");
        charactersContainer.forEach((div, i) => {
            if (i != index) {
                charactersContainer[i].style.display = "none";
            }
        });
        bigContainer.style.height = "130vh";
    });
});
console.log(charactersContainer[1]);
