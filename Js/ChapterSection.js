const images = document.getElementsByClassName("prePages");
const textElement = document.getElementById("chaptersTitle");
const backgroundTextElement = document.querySelector(".backgroundText");
const container = document.getElementById("chaptersContainer");

const bodyWidth = document.body.offsetWidth;
const htmlWidth = document.documentElement.offsetWidth;

class Information {
  constructor(chapterTitle, chapterDescription, chapterImage, url, shortName) {
    this.chapterTitle = chapterTitle;
    this.chapterDescription = chapterDescription;
    this.chapterImage = chapterImage;
    this.url = url;
    this.shortName = shortName;
  }

  setInformationDesktop(textElement, backgroundTextElement) {
    textElement.textContent = this.chapterTitle;
    backgroundTextElement.textContent = this.chapterTitle;
  }

  static setInformationMobile() {
    // removing the "a" tag from the container
    container.innerHTML = `<img
        src="Css/assets/chapters/rithual pré pagina cap 0.png"
        alt="Imagem do capítulo zero"
        class="prePages"
        />
        <img
        src="Css/assets/chapters/ritual pré pagina cap 1.png"
        alt="Imagem do capítulo zero"
        class="prePages"
        />
        <img
        src="Css/assets/chapters/ritual pré pagina cap 2.png"
        alt="Imagem do capítulo zero"
        class="prePages"
        />
        <img
        src="Css/assets/chapters/ritual pré pagina cap 3.png"
        alt="Imagem do capítulo zero"
        class="prePages"
        />
        <img
        src="Css/assets/chapters/ritual pré pagina cap 4.png"
        alt="Imagem do capítulo zero"
        class="prePages"
      />`;
  }
}

const chaptersData = [
  new Information(
    "Cap - 0: Invasão",
    "A carnificina assola o vilarejo enquanto um demônio mata impiedosamente. Um garoto se confronta com o assassino e uma lança revela seu verdadeiro poder.",
    "Css/assets/tooltipPages/random1.png",
    "https://tapas.io/episode/2307820",
    "Invasão"
  ),
  new Information(
    "Cap - 1: Padaria",
    "Singer sai de casa e vai à padaria em Belgadina. Novidades sobre sua matrícula escolar deixam-no ansioso. O que o futuro reserva para ele após essa compra significativa?",
    "Css/assets/tooltipPages/random2.png",
    "https://tapas.io/episode/2478257",
    "Padaria"
  ),
  new Information(
    "Cap - 2: Pai e irmão",
    "Singer reflete sobre a matrícula escolar e suas expectativas de liberdade. Em casa, encontra seus familiares e descansa. O que o aguarda no tão esperado primeiro dia de aula?",
    "Css/assets/tooltipPages/random3.png",
    "https://tapas.io/episode/2571907",
    "Pai e irmão"
  ),
  new Information(
    "Cap - 3: Paisagem",
    "Singer está ansioso para o primeiro dia de aula. Seu irmão o acompanha e novas experiências o cercam. Chegando à escola, Singer está repleto de expectativas. O que o aguarda nesse novo ambiente?",
    "Css/assets/tooltipPages/random4.png",
    "https://tapas.io/episode/2689791",
    "Paisagem"
  ),
  new Information(
    "Cap - 4: Escola",
    "Singer maravilhado com a escola, adentra seus corredores. Enquanto isso, seu irmão deixa a escola, encontra seus parceiros e seguem em frente. A pergunta paira: estão realmente prontos? Armas são preparadas.",
    "Css/assets/tooltipPages/random5.png",
    "https://tapas.io/episode/2846137",
    "Escola"
  ),
];

if (bodyWidth >= 1279 || htmlWidth >= 1279) {
  let currentTooltip = null;

  // this code is to set the scrollBar to a specific value when you load the page
  setTimeout(function () {
    container.scrollLeft = 88;
  }, 100);

  [...images].forEach((image, i) => {
    image.addEventListener("mouseover", function () {
      const chapter = chaptersData[i];
      chapter.setInformationDesktop(textElement, backgroundTextElement);
      currentTooltip = changeToolTip(
        chapter.chapterImage,
        chapter.chapterTitle,
        chapter.chapterDescription
      );
    });

    image.addEventListener("mouseout", function () {
      if (currentTooltip) {
        currentTooltip.remove();
        currentTooltip = null;
      }
      textElement.textContent = "Capítulos";
      backgroundTextElement.textContent = "Capítulos";
    });
  });

  function createTooltip() {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    document.body.appendChild(tooltip);

    return tooltip;
  }

  function changeToolTip(imageSrc, title, description) {
    const tooltip = createTooltip();

    const image = document.createElement("img");
    image.src = imageSrc;
    tooltip.appendChild(image);

    const textContainer = document.createElement("div");
    textContainer.classList.add("tooltipInformation");
    tooltip.appendChild(textContainer);

    const titleElement = document.createElement("h3");
    titleElement.textContent = title;
    titleElement.style.color = "pink";
    textContainer.appendChild(titleElement);

    const descElement = document.createElement("p");
    descElement.innerHTML += `<hr>${description}`;
    descElement.style.maxWidth = "300px";

    textContainer.appendChild(descElement);

    document.body.appendChild(tooltip);

    document.addEventListener("mouseover", function () {
      tooltip.style.opacity = "0";
      setTimeout(() => {
        tooltip.style.opacity = "1";
      }, 1500);
    });

    [...images].forEach((element) => {
      element.addEventListener("mousemove", function (event) {
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        console.log("moved");

        let tooltipX = event.clientX + 100;

        if (tooltipX + tooltipWidth > window.innerWidth - 200) {
          tooltipX = event.clientX - tooltipWidth - 100;
        }

        tooltip.style.left = tooltipX + "px";
        tooltip.style.top = event.clientY / 2 + tooltipHeight * 3.5 + "px";
      });
    });

    return tooltip;
  }
} else {
  const contentRemover = document.querySelector(".contentRemover");

  setTimeout(function () {
    container.scrollLeft = 55;
  }, 100);

  // resets the pages so we can remove the 'a' tag
  Information.setInformationMobile();

  // if the user clicks one time, the tooltip triggers, if two, he goes to Tapas.io to see the chapter
  let lastClickTime = 0;
  let lastClickedImageIndex = -1; // Initialize with an invalid index
  const doubleClickDelay = 300;

  let horizontalLines = document.getElementsByTagName("hr");

  [...images].forEach((element, index) => {
    element.addEventListener("click", () => {
      const currentTime = new Date().getTime();
      const timeSinceLastClick = currentTime - lastClickTime;

      // setting the floating text to the title
      textElement.innerHTML = chaptersData[index].chapterTitle;
      backgroundTextElement.innerHTML = chaptersData[index].shortName;

      if (
        timeSinceLastClick <= doubleClickDelay &&
        lastClickedImageIndex === index
      ) {
        // Double-click action (redirect to the Tapas.io URL)
        const tapasURL = chaptersData[index].url;
        window.location.href = tapasURL;
      } else {
        // Single-click action (toggle tooltip)
        if (mobileTemplate.classList.contains("triggered")) {
          changeMobileTooltip(index);
          mobileTemplate.style.opacity = 1;
        } else {
          gsap.fromTo(
            contentRemover,
            { y: 0 },
            {
              y: "80vw",
              duration: 0.8,
              onComplete: () => {
                gsap.set(contentRemover, { y: 0 });
                // Move this function call here to ensure the tooltip appears after the animation is completed
                changeMobileTooltip(index);
              },
            }
          );
        }
      }

      lastClickTime = currentTime;
      lastClickedImageIndex = index;
    });
  });

  let mobileTemplate = document.getElementById("toolTipMobileTemplate");
  let mobileChapterImage = document.querySelector(".ToolTipMobileChapterImage");
  let toolTipTitle = document.querySelector(".toolTipTitle");
  let toolTipDescription = document.querySelector(".toolTipDescription");
  let dblClickInformation = document.querySelector(".dblclickInformation");

  function changeMobileTooltip(index) {
    [...horizontalLines].forEach((el) => {
      el.style.display = "block";
    });

    xMark.style.display = "block";

    const chapter = chaptersData[index];
    toolTipTitle.innerHTML = chapter.chapterTitle;
    toolTipDescription.innerHTML = chapter.chapterDescription;
    mobileChapterImage.src = chapter.chapterImage;
    dblClickInformation.innerHTML = "clique duas vezes pra acessar o capítulo";

    // Set the initial opacity of the tooltip to 0
    mobileTemplate.style.opacity = "0";

    mobileTemplate.classList.add("triggered");

    // Animate the opacity of the tooltip to 1 (fade-in effect)
    gsap.to(mobileTemplate, {
      opacity: 1,
      duration: 0.3, // Adjust the duration as needed
    });
  }

  let xMark = document.querySelector(".xMark");

  xMark.addEventListener("click", () => {
    // setting the floating text to normal
    textElement.innerHTML = "Capítulos";
    backgroundTextElement.innerHTML = "Capítulos";

    gsap.to(mobileTemplate, {
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      onComplete: () => {
        toolTipTitle.innerHTML = "";
        toolTipDescription.innerHTML = "";
        mobileChapterImage.src = "";
        dblClickInformation.innerHTML = "";

        [...horizontalLines].forEach((el) => {
          el.style.display = "none";
        });

        xMark.style.display = "none";

        gsap.set(mobileTemplate, { opacity: 1 }); // Reset the opacity back to 1

        gsap.to(contentRemover, {
          y: "-80vw",
          duration: 1,
          onComplete: () => {
            gsap.set(contentRemover, { y: 0 });
            mobileTemplate.classList.remove("triggered");
          },
        }); // Reset characterSection to its initial position
      },
    });
  });
}
