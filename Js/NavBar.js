// min selector
const c = (el) => document.querySelector(el);

const hamburguerIcon = c("#menuIcon");
const navElements = document.createElement("div");
let advice = null;

hamburguerIcon.addEventListener("click", function () {
  hamburguerIcon.classList.toggle("hamburguerToggled");

  if (hamburguerIcon.classList.contains("hamburguerToggled")) {
    hamburguerIcon.src = "Css/assets/logoChanged.png";

    // Code to make the list appear when you click
    navElements.classList.add("navMediaQuery");
    navElements.innerHTML = `
      <ul class="navList2">
        <li><a href="#header">Home</a></li>
        <li><a href="#characters">Personagens</a></li>
        <li><a href="#chapters">Capítulos</a></li>
        <li><a href="#">Sobre mim</a></li>
        <li><hr></li> 
      </ul>`;

    document.body.appendChild(navElements);

    setTimeout(() => {
      navElements.style.right = "0";
    }, 0);
  } else {
    hamburguerIcon.src = "Css/assets/icon.png";

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
