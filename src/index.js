const app = document.getElementById("app");

app.innerHTML = `
  <h1>Affichage du texte saisi</h1>
  <div style="display: flex; align-items: center; gap: 12px;">
    <input id="text-input" type="text" placeholder="Ecris quelque chose" />
    <span id="text-output"></span>
  </div>
  <p id="empty-message" style="margin-top: 8px; color: #b42318;">Le champ est vide.</p>
  <div style="margin-top: 16px; display: flex; align-items: center; gap: 12px;">
    <button id="increment-btn" type="button">Increment</button>
    <button id="decrement-btn" type="button">Decrement</button>
    <button id="reset-btn" type="button">Reset</button>
    <span id="count-value">0</span>
  </div>
`;

const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const emptyMessage = document.getElementById("empty-message");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const countValue = document.getElementById("count-value");

let count = 0;

textInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  const hasValue = value.length > 0;

  textOutput.textContent = hasValue ? value : "";
  emptyMessage.textContent = hasValue ? "" : "Le champ est vide.";
});

incrementBtn.addEventListener("click", () => {
  count += 1;
  countValue.textContent = String(count);
});

decrementBtn.addEventListener("click", () => {
  count -= 1;
  countValue.textContent = String(count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countValue.textContent = String(count);
});