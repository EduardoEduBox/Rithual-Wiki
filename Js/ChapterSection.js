// Chapters section part

const images = document.getElementsByClassName("prePages");
const textElement = document.getElementById("chaptersTitle");
const backgroundTextElement = document.querySelector(".backgroundText");

let currentTooltip = null;
let description = ""; // Declare the description variable
let srcImages = ""; // Declare the srcImages variable

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    switch (i) {
      case 0:
        textElement.textContent = "Cap - 0: Invasão";
        backgroundTextElement.textContent = "Cap - 0: Invasão";

        description =
          "A carnificina assola o vilarejo enquanto um demônio mata impiedosamente. Um garoto se confronta com o assassino e uma lança revela seu verdadeiro poder.";
        srcImages = "Css/assets/tooltipPages/random1.png";
        break;
      case 1:
        textElement.textContent = "Cap - 1: Padaria";
        backgroundTextElement.textContent = "Cap - 1: Padaria";

        description =
          "Singer sai de casa e vai à padaria em Belgadina. Novidades sobre sua matrícula escolar deixam-no ansioso. O que o futuro reserva para ele após essa compra significativa?";
        srcImages = "Css/assets/tooltipPages/random2.png";
        break;
      case 2:
        textElement.textContent = "Cap - 2: Pai e irmão";
        backgroundTextElement.textContent = "Cap - 2: Pai e irmão";

        description =
          "Singer reflete sobre a matrícula escolar e suas expectativas de liberdade. Em casa, encontra seus familiares e descansa. O que o aguarda no tão esperado primeiro dia de aula?";
        srcImages = "Css/assets/tooltipPages/random3.png";
        break;
      case 3:
        textElement.textContent = "Cap - 3: Paisagem";
        backgroundTextElement.textContent = "Cap - 3: Paisagem";

        description =
          "Singer está ansioso para o primeiro dia de aula. Seu irmão o acompanha e novas experiências o cercam. Chegando à escola, Singer está repleto de expectativas. O que o aguarda nesse novo ambiente?";
        srcImages = "Css/assets/tooltipPages/random4.png";
        break;
      case 4:
        textElement.textContent = "Cap - 4: Escola";
        backgroundTextElement.textContent = "Cap - 4: Escola";

        description =
          "Singer maravilhado com a escola, adentra seus corredores. Enquanto isso, seu irmão deixa a escola, encontra seus parceiros e seguem em frente. A pergunta paira: estão realmente prontos? Armas são preparadas.";
        srcImages = "Css/assets/tooltipPages/random5.png";
        break;
      default:
        textElement.textContent = "Capítulos";
        backgroundTextElement.textContent = "Capítulos";

        description = "Description for Cap - 2";
    }

    currentTooltip = changeToolTip(
      srcImages,
      textElement.textContent,
      description
    );
  });

  images[i].addEventListener("mouseout", function () {
    if (currentTooltip) {
      currentTooltip.remove();
      currentTooltip = null;
    }
    textElement.textContent = "Capítulos";
    backgroundTextElement.textContent = "Capítulos";
  });
}

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
  descElement.style.wordWrap = "break-word";
  descElement.style.maxWidth = "300px";

  textContainer.appendChild(descElement);

  document.body.appendChild(tooltip);

  document.addEventListener("mouseover", function () {
    tooltip.style.opacity = "0";
    setTimeout(() => {
      tooltip.style.opacity = "1";
    }, 1500);
  });

  document.addEventListener("mousemove", function (event) {
    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    let tooltipX = event.clientX + 100;

    if (tooltipX + tooltipWidth > window.innerWidth - 200) {
      tooltipX = event.clientX - tooltipWidth - 100;
    }

    tooltip.style.left = tooltipX + "px";
    tooltip.style.top = event.clientY / 2 + tooltipHeight * 3.5 + "px";
  });

  return tooltip;
}
