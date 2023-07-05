// when you load the page throws this beautiful alert

window.addEventListener("load", () => {
  Swal.fire({
    title: "Aviso!",
    text: "o site está em beta, isso significa que algumas sessões estão incompletas e você pode se deparar com algum bug CABULOSO! (Para melhor experiência, ultilize um pc)",
    imageUrl:
      "https://cdn.discordapp.com/attachments/421344962303623189/1116205964052410459/image.png",
    imageWidth: 400,
    imageHeight: "auto",
    imageAlt: "Custom image",
    confirmButtonText: "Beleza chefe!",
  });
});
