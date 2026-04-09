const app = document.getElementById("app");

app.innerHTML = `
  <main class="page-shell">
    <section class="hero card">
      <p class="eyebrow">Vanilla JS playground</p>
      <h1>Affichage du texte saisi</h1>
      <p class="hero-copy">Un petit espace interactif pour tester la saisie, les boutons et la persistance locale.</p>
    </section>

    <section class="card panel">
      <div class="field-group">
        <label class="field-label" for="text-input">Texte saisi</label>
        <div class="input-row">
          <input id="text-input" class="text-input" type="text" placeholder="Ecris quelque chose" />
          <span id="text-output" class="live-value"></span>
        </div>
        <p id="empty-message" class="helper-text">Le champ est vide.</p>
      </div>

      <div class="counter-block">
        <div class="counter-header">
          <div>
            <p class="field-label">Compteur</p>
            <p class="helper-text">Le compteur reste au minimum a 0.</p>
          </div>
          <span id="count-value" class="count-badge">0</span>
        </div>

        <div class="button-grid">
          <button id="increment-btn" type="button">Increment</button>
          <button id="decrement-btn" type="button">Decrement</button>
          <button id="increment-five-btn" type="button">+5</button>
          <button id="decrement-five-btn" type="button">-5</button>
          <button id="reset-btn" type="button" class="button-secondary">Reset</button>
        </div>
      </div>
    </section>
  </main>
`;

const textInput = document.getElementById("text-input");
const textOutput = document.getElementById("text-output");
const emptyMessage = document.getElementById("empty-message");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const incrementFiveBtn = document.getElementById("increment-five-btn");
const decrementFiveBtn = document.getElementById("decrement-five-btn");
const resetBtn = document.getElementById("reset-btn");
const countValue = document.getElementById("count-value");
const inputStorageKey = "savedInputValue";
const countStorageKey = "savedCountValue";

const savedCountValue = localStorage.getItem(countStorageKey);
const parsedCount = Number(savedCountValue);
let count = Number.isFinite(parsedCount) ? parsedCount : 0;

const updateInputDisplay = (value) => {
  const trimmedValue = value.trim();
  const hasValue = trimmedValue.length > 0;

  textOutput.textContent = hasValue ? trimmedValue : "";
  emptyMessage.textContent = hasValue ? "" : "Le champ est vide.";
};

const updateCountDisplay = () => {
  countValue.textContent = String(count);
};

const persistCount = () => {
  localStorage.setItem(countStorageKey, String(count));
};

const updateCount = (delta) => {
  count = Math.max(0, count + delta);
  updateCountDisplay();
  persistCount();
};

const savedInputValue = localStorage.getItem(inputStorageKey) ?? "";
textInput.value = savedInputValue;
updateInputDisplay(savedInputValue);
updateCountDisplay();

textInput.addEventListener("input", (event) => {
  const value = event.target.value;
  const hasValue = value.length > 0;

  if (hasValue) {
    localStorage.setItem(inputStorageKey, value);
  } else {
    localStorage.removeItem(inputStorageKey);
  }

  updateInputDisplay(value);
});

incrementBtn.addEventListener("click", () => {
  updateCount(1);
});

decrementBtn.addEventListener("click", () => {
  updateCount(-1);
});

incrementFiveBtn.addEventListener("click", () => {
  updateCount(5);
});

decrementFiveBtn.addEventListener("click", () => {
  updateCount(-5);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateCountDisplay();
  persistCount();
});