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
    constructor(id, name, age, information, race, currentStatus, profile, withoutText, withText, colorTheme, appeared) {
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
const characters = [
    new Characters("characterSinger", "Singer Faksumi", 17, "um jovem aventureiro que nasceu no vilarejo Uxclavasa e sonha em conhecer o mundo e as maravilhas do reino de Belgadina e Ázuma!", Race.Human, CharacterStatus.Alive, "sçdf", "Css/assets/charactersSection/withoutText/singer withoutText.png", "Css/assets/charactersSection/Singer corpo completo.png", "lightblue", true),
    new Characters("characterAika", "Aika'nu Zumiki", 19, `Ainda sem registros...`, Race.Demon, CharacterStatus.Alive, "Css/assets/charactersSection/profile/Aika Profile.png", "Css/assets/charactersSection/withoutText/aika withoutText.png", "Css/assets/charactersSection/Aika corpo completo.png", "rgb(255, 223, 239)", false),
    new Characters("characterMadger", "Madger Yasáshi", 17, "Artista marcial nascido na vila Yasáshi, após uma batalha curta e sangrenta, Madger perdeu pessoas preciosas quando ainda era criança, agora, ele busca honrar aqueles que lutaram por ele em sua antiga vila!", Race.Human, CharacterStatus.Alive, "lsdkfhkljs", "Css/assets/charactersSection/withoutText/madger withoutText.png", "Css/assets/charactersSection/Madger corpo completo.png", "rgb(186, 235, 186)", true),
    new Characters("characterSan", "San Majutsu-shi", 19, `Ainda sem registros...`, Race.Human, CharacterStatus.Alive, "lsdkfhkljs", "Css/assets/charactersSection/withoutText/san withoutText.png", "Css/assets/charactersSection/San corpo completo.png", "rgb(255, 223, 164)", false),
];
class RenderCharacter {
    static styleInformation(el, appeared) {
        if (!appeared) {
            el.style.color = "gray";
            el.style.fontWeight = "1000";
        }
        else {
            el.style.color = "white";
            el.style.fontWeight = "400";
        }
    }
    static mountStructure(charElement, char) {
        this.charElement = charElement;
        if (charElement) {
            let profilePicture = this.c(".profilePictureDiv img");
            let mainImage = this.c(".character-image");
            let charBgText = this.c("#characterBackgroundText");
            let characterInformation = this.c("#characterInformation");
            let characterAge = this.c("#characterAge");
            let characterStatus = this.c("#characterStatus");
            let characterRace = this.c("#characterRace");
            const changeSpanColor = () => {
                let ageColor = this.c(".ageColor");
                let statusColor = this.c(".statusColor");
                let raceColor = this.c(".raceColor");
                if (char.appeared) {
                    ageColor.innerHTML = `${char.age}`;
                    ageColor.style.color = char.colorTheme;
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
                }
                else {
                    ageColor.innerHTML = "?";
                    statusColor.innerHTML = "?";
                    raceColor.innerHTML = "?";
                    ageColor.style.color = "gray";
                    raceColor.style.color = "gray";
                    statusColor.style.color = "gray";
                }
            };
            profilePicture.src = char.profile;
            mainImage.src = char.withoutText;
            charBgText.innerText = char.name;
            characterInformation.innerText = char.information;
            charBgText.style.color = char.colorTheme;
            characterAge.innerHTML += `Idade:`;
            characterStatus.innerHTML += `Status:`;
            characterRace.innerHTML += `Raça:`;
            changeSpanColor();
            this.styleInformation(characterInformation, char.appeared);
            gsap.fromTo(charElement, { opacity: 0 }, { opacity: 1, duration: 0.5 });
        }
        else {
            throw new Error("Invalid classname or not empty");
        }
    }
    static renderAnimation(charElement, charactersEl, char) {
        var _a;
        const characterBackgroundText = this.c("#characterBackgroundText");
        if (characterBackgroundText) {
            const characterImage = this.charElement.querySelector(".character-image");
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
            (_a = document.querySelector("#close-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
                gsap.to(charElement, {
                    opacity: 0,
                    onComplete: () => {
                        let profilePicture = this.c(".profilePictureDiv img");
                        let mainImage = this.c(".character-image");
                        let charBgText = this.c("#characterBackgroundText");
                        let characterInformation = this.c("#characterInformation");
                        let characterAge = this.c("#characterAge");
                        let characterStatus = this.c("#characterStatus");
                        let characterRace = this.c("#characterRace");
                        let ageColor = this.c(".ageColor");
                        let statusColor = this.c(".statusColor");
                        let raceColor = this.c(".raceColor");
                        profilePicture.src = "";
                        mainImage.src = "";
                        charBgText.innerText = "";
                        characterInformation.innerText = "";
                        charBgText.style.color = "";
                        characterAge.textContent = "";
                        characterStatus.textContent = "";
                        characterRace.textContent = "";
                        ageColor.textContent = "";
                        statusColor.textContent = "";
                        raceColor.textContent = "";
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
RenderCharacter.c = (el) => document.querySelector(el);
const characterImages = document.querySelectorAll("#characterSinger, #characterAika, #characterMadger, #characterSan");
const charactersContainer = document.querySelectorAll(".singerContainer, .aikaContainer, .madgerContainer, .sanContainer");
const bigContainer = document.getElementById("characters");
let validation = false;
charactersContainer.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (!el.classList.contains("activated")) {
            validation !== true && changeElementsWhenTrue();
        }
    });
    function changeElementsWhenTrue() {
        gsap.to(charactersContainer, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
                if (window.innerWidth > 1279) {
                    bigContainer.style.height = "110vh";
                }
                charactersContainer.forEach((div, i) => {
                    charactersContainer[i].style.display = "none";
                });
                let charImageEl = charactersContainer[index].firstElementChild;
                let currentChar = charImageEl.id;
                let selectedCharacter = characters.find((el) => {
                    return el.id === currentChar;
                });
                let c = (el) => document.querySelector(el);
                gsap.to(el, {
                    onStart: () => {
                        RenderCharacter.mountStructure(c(".character-info"), selectedCharacter);
                        RenderCharacter.renderAnimation(c(".character-info"), document.querySelectorAll(".character"), selectedCharacter);
                    },
                });
            },
        });
    }
});
