const form = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#name");
const demoCommand = document.querySelector("#demo-command");
const demoResult = document.querySelector("#demo-result");
const versionButton = document.querySelector("#show-version");
const copyButton = document.querySelector("#copy-install");

function safeName(value) {
  return value.trim() || "World";
}

function showGreeting(name) {
  const target = safeName(name);
  demoCommand.textContent = `./ai-github --name ${target}`;
  demoResult.textContent = `Hello, ${target}!`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showGreeting(nameInput.value);
});

versionButton.addEventListener("click", () => {
  demoCommand.textContent = "./ai-github --version";
  demoResult.textContent = "v0.1.0";
});

copyButton.addEventListener("click", async () => {
  const command = copyButton.dataset.copy;
  try {
    await navigator.clipboard.writeText(command);
    copyButton.textContent = "Copied to clipboard";
  } catch {
    copyButton.textContent = command;
  }
  window.setTimeout(() => {
    copyButton.textContent = "Copy install command";
  }, 2200);
});

document.querySelector("#year").textContent = new Date().getFullYear();
