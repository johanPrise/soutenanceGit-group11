const app = document.getElementById("app");

if (!(app instanceof HTMLElement)) {
  throw new Error("Container #app not found.");
}

app.innerHTML = `
  <h1>Hello World!</h1>
  <p>Welcome to your Vanilla JS app.</p>
  <p>Start editing to see some magic happen :)</p>
  <div style="margin-top: 16px; display: flex; align-items: center; gap: 12px;">
    <button id="increment-btn" type="button">Increment</button>
    <button id="decrement-btn" type="button">Decrement</button>
    <button id="reset-btn" type="button">Reset</button>
    <span id="count-value">0</span>
  </div>
`;

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const countValue = document.getElementById("count-value");

if (
  !(incrementBtn instanceof HTMLButtonElement) ||
  !(decrementBtn instanceof HTMLButtonElement) ||
  !(resetBtn instanceof HTMLButtonElement) ||
  !(countValue instanceof HTMLElement)
) {
  throw new Error("Counter elements not found.");
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

resetBtn.addEventListener("click", () => {
  count = 0;
  renderCount();
});

renderCount();