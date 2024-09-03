function displayPoem(response) {
  console.log("Poem generated!");
  console.log(response.data.answer);
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");

  let apiKey = "c71e44b46oa0t62f8d332460f8567af3";

  let context =
    "You are a Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML format and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a French poem about ${userInstructions.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
