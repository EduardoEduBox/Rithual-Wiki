"use strict";
var CharacterStatus;
(function (CharacterStatus) {
    CharacterStatus["Alive"] = "Vivo";
    CharacterStatus["Dead"] = "Morto";
    CharacterStatus["Missing"] = "Desaparecido";
})(CharacterStatus || (CharacterStatus = {}));
var Race;
(function (Race) {
    Race["Human"] = "Humano";
    Race["Demon"] = "Dem\u00F4nio";
    Race["Archangel"] = "Arcanjo";
    Race["Apocalipsun"] = "Apocalipsun";
})(Race || (Race = {}));
class Characters {
    constructor(id, name, age, information, race, currentStatus, profile, withoutText, withText, colorTheme) {
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
    }
}
const characters = [
    new Characters("characterSinger", "Singer Faksumi", 17, "um jovem aventureiro que nasceu no vilarejo Uxclavasa e sonha em conhecer o mundo e as maravilhas do reino de Belgadina e Ázuma! Ele é muito tímido, pois só começou a interagir com outras crianças aos 10 anos de idade, mas está animado para fazer novos amigos e aprender artes marciais na escola Azumense ruxangai!", Race.Demon, CharacterStatus.Alive, "sçdf", "Css/assets/charactersSection/withoutText/singer withoutText.png", "Css/assets/charactersSection/Singer corpo completo.png", "lightblue"),
    new Characters("characterAika", "Aika'nu Zumiki", 19, `<span style="color:gray; font-weight:1000;">Ainda sem registros...</span>`, Race.Demon, CharacterStatus.Alive, "Css/assets/charactersSection/profile/Aika Profile.png", "Css/assets/charactersSection/withoutText/aika withoutText.png", "Css/assets/charactersSection/Aika corpo completo.png", "rgb(255, 223, 239)"),
    new Characters("characterMadger", "Madger Yasáshi", 17, "Artista marcial nascido na vila Yasáshi, após uma batalha curta e sangrenta, Madger perdeu pessoas preciosas quando ainda era criança, agora, ele busca honrar aqueles que lutaram por ele em sua antiga vila!", Race.Human, CharacterStatus.Alive, "lsdkfhkljs", "Css/assets/charactersSection/withoutText/madger withoutText.png", "Css/assets/charactersSection/Madger corpo completo.png", "rgb(186, 235, 186)"),
    new Characters("characterSan", "San Majutsu-shi", 19, `<span style="color:gray; font-weight:1000;">Ainda sem registros...</span>`, Race.Human, CharacterStatus.Alive, "lsdkfhkljs", "Css/assets/charactersSection/withoutText/san withoutText.png", "Css/assets/charactersSection/San corpo completo.png", "rgb(255, 223, 164);"),
];
const characterImages = document.querySelectorAll("#characterSinger, #characterAika, #characterMadger, #characterSan");
const charactersContainer = document.querySelectorAll(".singerContainer, .aikaContainer, .madgerContainer, .sanContainer");
const bigContainer = document.getElementById("characters");
const closeButton = document.getElementById("close-button");
let validation = false;
characterImages.forEach((image, index) => {
    image.addEventListener("click", () => {
        console.log(index);
        if (validation !== true) {
            changeElementsWhenTrue();
        }
    });
    function changeElementsWhenTrue() {
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
                        var _a;
                        charactersContainer[index].innerHTML = `
              <div class="profilePictureDiv">
                <img src="${characters[index].profile}" />
              </div>
              <img
                src="${characters[index].withoutText}"
                alt=""
                class="character-image"
              />
              <div id="informationContainer">
                <h1 id="characterBackgroundText" style="color:${characters[index].colorTheme}">${characters[index].name.toUpperCase()}</h1>
                <div id="informationOrganizator">
                  <p id="characterInformation">${characters[index].information}</p>
                </div>
              </div>
              <span id="close-button">
                <img src="Css/assets/icons/293657_x_icon (1).png" alt=""/>
              </span>
            `;
                        const characterBackgroundText = document.getElementById("characterBackgroundText");
                        if (characterBackgroundText) {
                            characterBackgroundText.style.transform = "translateX(-500px)";
                            characterBackgroundText.style.opacity = "0";
                            const characterInformation = document.querySelector(".characterInformation");
                            console.log(characterInformation);
                            const tl = gsap.timeline();
                            tl.to(characterBackgroundText, {
                                opacity: 1,
                                x: 0,
                                duration: 0.5,
                                ease: "power1.out",
                            }).to(characterInformation, {
                                opacity: 1,
                                x: 0,
                                duration: 0.5,
                                ease: "power1.out",
                            }, "-=0.5");
                        }
                        const characterImage = charactersContainer[index].querySelector(".character-image");
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
                        (_a = document
                            .querySelector("#close-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                            changeElementsWhenFalse();
                        });
                    },
                });
            },
        });
    }
    function changeElementsWhenFalse() {
        charactersContainer.forEach((div, i) => {
            div.style.display = "flex";
            div.style.opacity = "1";
        });
        charactersContainer[index].style.width = "25%";
        bigContainer.style.height = "100vh";
        charactersContainer[index].innerHTML = ``;
        charactersContainer[index].innerHTML = `
      <img
        src="${characters[index].withText}"
        id="${characters[index].id}"
        class="character-image"
      />
    `;
        validation = false;
    }
});
