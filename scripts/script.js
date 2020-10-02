const choise = document.querySelector("[data-spec-form]");
const choiseDisplay = document.querySelector('[data-spec-display]');
localStorage.testSended = false;

if (localStorage.spec != undefined) {
  choiseDisplay.innerText = localStorage.spec;
}

choise.addEventListener('change', () => {
  localStorage.spec = choise.querySelector("input[name=prof]:checked").parentElement.innerText;
  choiseDisplay.innerText = localStorage.spec;
});