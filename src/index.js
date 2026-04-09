const app = document.getElementById("app");

app.innerHTML = `
  <h1>Affichage du texte saisi</h1>
  <div style="display: flex; align-items: center; gap: 12px;">
    <input id="text-input" type="text" placeholder="Ecris quelque chose" />
    <span id="text-output"></span>
  </div>
`;

const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");

textInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  textOutput.textContent = value ? value : "";
});