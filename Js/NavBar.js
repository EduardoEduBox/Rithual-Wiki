// min selector
const c = (el) => document.querySelector(el);

const hamburguerIcon = c("#menuIcon");
const navElements = document.createElement("div");
let advice = null;

hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle("hamburguerToggled");

  if (hamburguerIcon.classList.contains("hamburguerToggled")) {
    hamburguerIcon.src = "Css/assets/icons/closedEye.png";

    // Code to make the list appear when you click
    navElements.classList.add("navMediaQuery");
    navElements.innerHTML = `
      <ul class="navList2">
        <li><a href="#header">Home</a></li>
        <li><a href="#characters">Personagens</a></li>
        <li><a href="#chapters">Capítulos</a></li>
        <li class='readyes'>Ler agora</li>
        <li><hr></li> 
      </ul>`;

    document.body.appendChild(navElements);

    setTimeout(() => {
      navElements.style.right = "0";
    }, 0);
  } else {
    hamburguerIcon.src = "Css/assets/icons/openedEye.png";

    navElements.style.right = `calc(-${navElements.offsetWidth}px - 1.5rem)`;
  }
});

function handleResize() {
  if (body.clientWidth > 1279) {
    // Remove navElements from the document.body
    navElements.remove();
  }

  // Remove the previous event listener to avoid duplicates
  if (advice) {
    advice.removeEventListener("click", adviceClickHandler);
  }

  // Add the event listener back to the advice element
  advice.addEventListener("click", adviceClickHandler);
}

// Function to handle the click event on the advice element

window.addEventListener("resize", handleResize);

const triggerAlert = () => {
  Swal.fire({
    title: '<strong style="color: pink">(૨¡Ƭષαℓ Reader</strong> em produção!',
    text: "Estamos desenvolvendo o leitor do Rithual para que você possa ter a melhor experiência lendo esse mangá, enquanto ele não está pronto, você pode ler no Tapas.io",
    imageUrl:
      "https://cdn.discordapp.com/attachments/421344962303623189/1146492460294475907/image.png",
    background: "rgb(31, 31, 31)",
    color: "white",
    imageWidth: "60%",
    imageHeight: "auto",
    imageAlt: "san pensativo",
    showCancelButton: true,
    cancelButtonText: "Ok",
    confirmButtonText:
      '<strong style="color: lightblue"><a href="https://tapas.io/series/Rithual_manga/info">Tapas.io</a></strong>',
    confirmButtonColor: "#ff009d",
  });
};

function handleLerAgoraClick() {
  triggerAlert();
}

// For desktop version
const navReadDesktop = c(".readNow");
navReadDesktop.addEventListener("click", handleLerAgoraClick);

// For mobile version
document.addEventListener("click", function (event) {
  // Check if the clicked element is the "Ler agora" element
  if (event.target && event.target.matches(".navList2 li")) {
    handleLerAgoraClick();
  }
});
