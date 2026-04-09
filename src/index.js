const app = document.getElementById("app");

if (!app) {
  throw new Error("Conteneur #app introuvable.");
}

app.innerHTML = `
  <h1>Hello World!</h1>
  <p>Welcome to your Vanilla JS app.</p>
  <p>Start editing to see some magic happen :)</p>
  <div style="margin-top: 16px; display: flex; align-items: center; gap: 12px;">
    <button id="increment-btn" type="button">Increment</button>
    <button id="decrement-btn" type="button">Decrement</button>
    <span id="count-value">0</span>
  </div>
`;

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const countValue = document.getElementById("count-value");

if (
  !(incrementBtn instanceof HTMLButtonElement) ||
  !(decrementBtn instanceof HTMLButtonElement) ||
  !(countValue instanceof HTMLElement)
) {
  throw new Error("Elements du compteur introuvables.");
}

let count = 0;

const renderCount = () => {
  countValue.textContent = String(count);
};

incrementBtn.addEventListener("click", () => {
  count += 1;
  renderCount();
});

decrementBtn.addEventListener("click", () => {
  count -= 1;
  renderCount();
});

renderCount();