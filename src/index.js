const app = document.getElementById("app");

app.innerHTML = `
  <h1>Affichage du texte saisi</h1>
  <div style="display: flex; align-items: center; gap: 12px;">
    <input id="text-input" type="text" placeholder="Ecris quelque chose" />
    <span id="text-output"></span>
  </div>
  <div style="margin-top: 16px; display: flex; align-items: center; gap: 12px;">
    <button id="increment-btn" type="button">Increment</button>
    <span id="count-value">0</span>
  </div>
`;

const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const incrementBtn = document.getElementById("increment-btn");
const countValue = document.getElementById("count-value");

let count = 0;

textInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  textOutput.textContent = value ? value : "";
});

incrementBtn.addEventListener("click", () => {
  count += 1;
  countValue.textContent = String(count);
});