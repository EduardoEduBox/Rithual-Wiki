"use strict";
const c = (el) => document.querySelector(el);
var FightingStyle;
(function (FightingStyle) {
    FightingStyle["Assassin"] = "Assassino(a)";
    FightingStyle["Bruiser"] = "Bruiser";
    FightingStyle["Fighter"] = "Lutador(a)";
    FightingStyle["Mage"] = "Mago(a)";
    FightingStyle["Shooter"] = "Atirador(a)";
    FightingStyle["Support"] = "Suporte";
    FightingStyle["Tank"] = "Tanque";
})(FightingStyle || (FightingStyle = {}));
class Characters {
    constructor(id, name, age, information, profile, withoutText, withText, colorTheme, appeared, fightingStyle) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.information = information;
        this.profile = profile;
        this.withoutText = withoutText;
        this.withText = withText;
        this.colorTheme = colorTheme;
        this.appeared = appeared;
        this.fightingStyle = fightingStyle;
    }
    preloadImages() {
        const imagesToPreload = [this.profile, this.withoutText];
        imagesToPreload.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }
}
const characters = [
    new Characters("characterSinger", "Singer Faksumi", 17, "um jovem aventureiro que nasceu no vilarejo Uxclavasa e sonha em conhecer o mundo e as maravilhas do reino de Belgadina e Ázuma!", "Css/assets/charactersSection/profile/Singer Profile.png", "Css/assets/charactersSection/withoutText/singer withoutText.png", "Css/assets/charactersSection/Singer corpo completo.png", "lightblue", true, FightingStyle.Assassin),
    new Characters("characterAika", "Aika'nu Zumiki", 19, `Ainda sem registros...`, "Css/assets/charactersSection/profile/Aika Profile.png", "Css/assets/charactersSection/withoutText/aika withoutText.png", "Css/assets/charactersSection/Aika corpo completo.png", "rgb(255, 223, 239)", false, FightingStyle.Shooter),
    new Characters("characterMadger", "Madger Yasáshi", 17, "Artista marcial nascido na vila Yasáshi, após uma batalha curta e sangrenta, Madger perdeu pessoas preciosas quando ainda era criança, agora, ele busca honrar aqueles que lutaram por ele em sua antiga vila!", "Css/assets/charactersSection/profile/Madger Profile.png", "Css/assets/charactersSection/withoutText/madger withoutText.png", "Css/assets/charactersSection/Madger corpo completo.png", "rgb(186, 235, 186)", true, FightingStyle.Fighter),
    new Characters("characterSan", "San Majutsu-shi", 19, `Ainda sem registros...`, "Css/assets/charactersSection/profile/San Profile.png", "Css/assets/charactersSection/withoutText/san withoutText.png", "Css/assets/charactersSection/San corpo completo.png", "rgb(255, 223, 164)", false, FightingStyle.Mage),
];
characters.forEach((el) => el.preloadImages());
const bigContainer = c("#characters");
const contentRemover = c(".contentRemover");
let validation = false;
const body = c("body");
const htmlWidth = document.documentElement.clientWidth;
function generateMobileContent() {
    return `
    <section id="characters">
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
              <div id="age">
                <div>
                  <h3 id="characterAge"></h3>
                  <span class="ageColor"></span>
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

      <div class="imageAndInformation" style="display: none;">
        <div class="profilePictureDiv">
          <img src="" />
        </div>
        <p id="characterInformation"></p>
      </div>
    </section>
  `;
}
if (body.clientWidth <= 1279 && htmlWidth <= 1279) {
    contentRemover.innerHTML = generateMobileContent();
    setTimeout(() => {
        const charactersHeight = c("#characters");
        const charactersContainerHeight = charactersHeight.clientHeight;
        charactersHeight.style.minHeight = `${charactersContainerHeight}px`;
    }, 1000);
}
class RenderCharacter {
    static styleInformation(el, appeared) {
        el.style.color = appeared ? "white" : "gray";
        el.style.fontWeight = appeared ? "400" : "1000";
    }
    static mountStructure(charElement, char) {
        this.charElement = charElement;
        if (!charElement) {
            throw new Error("Invalid classname or not empty");
        }
        const profilePicture = c(".profilePictureDiv img");
        const mainImage = c(".character-image");
        const charBgText = c("#characterBackgroundText");
        const characterInformation = c("#characterInformation");
        const characterAge = c("#characterAge");
        const imageAndInformation = c(".imageAndInformation");
        profilePicture.src = char.profile;
        mainImage.src = char.withoutText;
        charBgText.innerText = char.name;
        characterInformation.innerText = char.information;
        charBgText.style.color = char.colorTheme;
        characterAge.innerHTML += "Idade:";
        const ageColor = c(".ageColor");
        ageColor.innerHTML = char.appeared ? `${char.age}` : "?";
        ageColor.style.color = char.appeared ? char.colorTheme : "gray";
        this.styleInformation(characterInformation, char.appeared);
        gsap.fromTo(charElement, { opacity: 0 }, {
            opacity: 1,
            duration: 0.4,
            onComplete: () => {
                imageAndInformation.style.display = "flex";
                gsap.fromTo(imageAndInformation, { opacity: 0 }, { opacity: 1, duration: 0.3 });
            },
        });
    }
    static renderAnimation(charElement, charactersEl, char) {
        var _a;
        const characterBackgroundText = c("#characterBackgroundText");
        if (!characterBackgroundText) {
            return;
        }
        const characterImage = charElement.querySelector(".character-image");
        const xAxis = body.clientWidth <= 1279 && htmlWidth <= 1279 ? 130 : 210;
        const bgTextAnimation = gsap.fromTo(characterBackgroundText, { opacity: 0, x: -xAxis, duration: 0.5, ease: "power1.out" }, { opacity: 1, x: 0, duration: 0.5, ease: "power1.out" });
        const charImageAnimation = gsap.fromTo(characterImage, { opacity: 0, x: xAxis, scale: 0.8, duration: 0.5, ease: "power1.out" }, { opacity: 1, x: 0, scale: 1, duration: 0.5, ease: "power1.out" });
        bgTextAnimation;
        charImageAnimation;
        const imageAndInformation = c(".imageAndInformation");
        let validationCloseButton = false;
        (_a = document.querySelector("#close-button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
            if (!validationCloseButton) {
                validationCloseButton = true;
                gsap.to([charElement, imageAndInformation], {
                    opacity: 0,
                    onComplete: () => {
                        const profilePicture = c(".profilePictureDiv img");
                        const mainImage = c(".character-image");
                        const charBgText = c("#characterBackgroundText");
                        const characterInformation = c("#characterInformation");
                        const characterAge = c("#characterAge");
                        const ageColor = c(".ageColor");
                        const characterInfo = c(".character-info");
                        profilePicture.src = "";
                        mainImage.src = "";
                        charBgText.innerText = "";
                        characterInformation.innerText = "";
                        charBgText.style.color = "";
                        characterAge.textContent = "";
                        ageColor.textContent = "";
                        bigContainer.style.height = "100vh";
                        this.styleInformation(characterInformation, char.appeared);
                        if (body.clientWidth <= 1279) {
                            characterInfo.style.display = "none";
                            imageAndInformation.style.display = "none";
                        }
                        gsap.to(charactersEl, { display: "flex", opacity: 1 });
                        validation = false;
                        validationCloseButton = false;
                    },
                });
            }
        });
    }
}
const characterImages = document.querySelectorAll("#characterSinger, #characterAika, #characterMadger, #characterSan");
const charactersContainer = document.querySelectorAll(".singerContainer, .aikaContainer, .madgerContainer, .sanContainer");
charactersContainer.forEach((el, index) => {
    el.addEventListener("click", () => {
        if (!el.classList.contains("activated") && validation === false) {
            validation = true;
            changeElementsWhenTrue(index);
        }
    });
    function changeElementsWhenTrue(index) {
        gsap.to(charactersContainer, {
            duration: 0.5,
            opacity: 0,
            onComplete: () => {
                const characterInfo = c(".character-info");
                const isDesktop = body.clientWidth >= 1279 && htmlWidth >= 1279;
                const isMobile = body.clientWidth <= 1279 && htmlWidth <= 1279;
                if (isDesktop) {
                    bigContainer.style.height = "110vh";
                }
                else if (isMobile) {
                    characterInfo.style.display = "flex";
                }
                charactersContainer.forEach((div) => {
                    div.style.display = "none";
                });
                const charImageEl = charactersContainer[index].firstElementChild;
                const currentChar = charImageEl.id;
                const selectedCharacter = characters.find((el) => el.id === currentChar);
                gsap.to(el, {
                    onStart: () => {
                        const characterInfoElement = c(".character-info");
                        RenderCharacter.mountStructure(characterInfoElement, selectedCharacter);
                        RenderCharacter.renderAnimation(document.querySelector(".character-info"), document.querySelectorAll(".character"), selectedCharacter);
                    },
                });
            },
        });
    }
});
