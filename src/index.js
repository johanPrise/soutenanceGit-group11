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
    <button id="increment-five-btn" type="button">+5</button>
    <button id="decrement-five-btn" type="button">-5</button>
    <button id="reset-btn" type="button">Reset</button>
    <span id="count-value">0</span>
  </div>
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
const stateStorageKey = "savedCounterAppStateV2";
const legacyInputStorageKey = "savedInputValue";
const legacyCountStorageKey = "savedCountValue";

const toSafeCount = (value) => {
  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    return 0;
  }

  return Math.max(0, Math.trunc(parsed));
};

const parsePersistedState = (rawState) => {
  if (!rawState) {
    return null;
  }

  try {
    const parsedState = JSON.parse(rawState);

    if (!parsedState || typeof parsedState !== "object") {
      return null;
    }

    return {
      inputValue:
        typeof parsedState.inputValue === "string" ? parsedState.inputValue : "",
      countValue: toSafeCount(parsedState.countValue),
    };
  } catch {
    return null;
  }
};

const loadInitialState = () => {
  const persistedState = parsePersistedState(localStorage.getItem(stateStorageKey));

  if (persistedState) {
    return persistedState;
  }

  return {
    inputValue: localStorage.getItem(legacyInputStorageKey) ?? "",
    countValue: toSafeCount(localStorage.getItem(legacyCountStorageKey)),
  };
};

const persistState = (inputValue, countNumber) => {
  const nextState = {
    inputValue,
    countValue: toSafeCount(countNumber),
    updatedAt: Date.now(),
  };

  localStorage.setItem(stateStorageKey, JSON.stringify(nextState));
  localStorage.setItem(legacyInputStorageKey, inputValue);
  localStorage.setItem(legacyCountStorageKey, String(nextState.countValue));
};

const initialState = loadInitialState();
let count = initialState.countValue;

const updateInputDisplay = (value) => {
  const trimmedValue = value.trim();
  const hasValue = trimmedValue.length > 0;

  textOutput.textContent = hasValue ? trimmedValue : "";
  emptyMessage.textContent = hasValue ? "" : "Le champ est vide.";
};

const updateCountDisplay = () => {
  countValue.textContent = String(count);
};

const updateCount = (delta) => {
  count = Math.max(0, count + delta);
  updateCountDisplay();
  persistState(textInput.value, count);
};

textInput.value = initialState.inputValue;
updateInputDisplay(initialState.inputValue);
updateCountDisplay();
persistState(textInput.value, count);

textInput.addEventListener("input", (event) => {
  const value = event.target.value;

  updateInputDisplay(value);
  persistState(value, count);
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
  persistState(textInput.value, count);
});

window.addEventListener("storage", (event) => {
  if (event.key !== stateStorageKey || event.newValue === null) {
    return;
  }

  const nextState = parsePersistedState(event.newValue);

  if (!nextState) {
    return;
  }

  count = nextState.countValue;
  textInput.value = nextState.inputValue;
  updateInputDisplay(nextState.inputValue);
  updateCountDisplay();
});