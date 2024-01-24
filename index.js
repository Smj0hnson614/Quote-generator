function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Quote is here",
    autoStart: true,
    delay: 1,
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
