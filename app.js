"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document.querySelector("#select-color-mode").addEventListener("change", modeSelected);
  detectUserPreference();
}

function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode");

  return userColorMode;
}

function detectUserPreference() {
  const modeFromLocaleStorage = readUserColorMode();

  changeMode(modeFromLocaleStorage);

  document.querySelector("#select-color-mode").value = modeFromLocaleStorage;

  if (modeFromLocaleStorage) {
    changeMode(modeFromLocaleStorage)
    document.querySelector("#select-color-mode").value = modeFromLocaleStorage;
  }
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");
  const selectedColorMode = this.value;
  changeMode(selectedColorMode);
  saveUserColorMode(selectedColorMode);
}
const bodyElement = document.querySelector("body");
function changeMode(mode) {
  resetColorMode();
  if (mode == "dark") {
    bodyElement.classList.add("dark-mode");
    console.log("dark");
  } else if (mode == "yellow") {
    bodyElement.classList.remove("dark-mode");
    bodyElement.classList.add("yellow-mode");
    console.log("yellow");
  } else if (mode == "green") {
    bodyElement.classList.remove("dark-mode");
    bodyElement.classList.remove("yellow-mode");
    bodyElement.classList.add("green-mode");
  }
}

// nulstiller farverne
function resetColorMode() {
  bodyElement.classList = "";
}
