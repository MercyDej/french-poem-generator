function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Demain, dès l’aube, à l’heure où blanchit la campagne",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
