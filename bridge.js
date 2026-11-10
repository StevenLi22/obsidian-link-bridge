"use strict";

const TEST_ID = "QK-2ea49569-58d5-4510-89c9-f86290a92c9e";
const TARGET = "obsidian://open?vault=Quant%20Knowledge%20Vault&file=01%20-%20Concepts%2FConditional%20Expectation.md";

const params = new URLSearchParams(window.location.search);
const entries = [...params];
const message = document.getElementById("message");

if (entries.length === 1 && params.get("id") === TEST_ID) {
  const uri = document.getElementById("uri");
  document.getElementById("title").textContent = "Conditional Expectation";
  message.textContent = "Open this note in your local Obsidian vault. Your browser may ask for confirmation.";
  uri.value = TARGET;
  uri.addEventListener("focus", () => uri.select());
  document.getElementById("open-note").addEventListener("click", () => {
    window.location.assign(TARGET);
  });
  document.getElementById("actions").hidden = false;
} else {
  message.textContent = "This link is missing a supported Knowledge ID. Ask for the original bridge link and try again.";
}
