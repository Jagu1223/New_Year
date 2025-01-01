const greetButton = document.getElementById("greetButton");
const resetButton = document.getElementById("resetButton");
const userNameInput = document.getElementById("userName");
const inputSection = document.getElementById("inputSection");
const greetingSection = document.getElementById("greetingSection");
const greetingMessage = document.getElementById("greetingMessage");
const greetingNote = document.getElementById("greetingNote");

greetButton.addEventListener("click", () => {
  const name = userNameInput.value.trim();
  if (name === "") {
    alert("Please enter your sweet name:-");
    return;
  }
  greetingMessage.innerHTML = ` Happy New Year, ${name}`;
  greetingNote.textContent =
    "Wishing you a very happy new year filled with joy, love, and happiness.";
  inputSection.style.display = "none";
  greetingSection.style.display = "block";
});

resetButton.addEventListener("click", () => {
  inputSection.style.display = "block";
  greetingSection.style.display = "none";
  userNameInput.value = "";
});
