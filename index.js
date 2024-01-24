function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "360btabo4f1196741527047834a50bb8";
  let context =
    "You are an inspirational quote expert and love to write short qoutes. Your goal is to generate 4 line inspirational quotes in basic HTML. Do not include a title to the qoute. Make sure to follow the user instructions. Sign the quote with 'SheCodes AI' inside a <strong> element at the end of the quote and NOT at the beginning.";
  let prompt = `User instructions: Generate a short quote about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
