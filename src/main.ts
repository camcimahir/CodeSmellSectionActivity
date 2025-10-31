// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const incrementButtonID = "increment",
  counterID = "counter",
  headerText = "CMPM 121 Project";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headerText}</h1>
    <p>Counter: <span id="${counterID}">0</span></p>
    <button id="${incrementButtonID}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Get the increment button element from the document
  const incrementButton = document.getElementById(incrementButtonID);
  // Get the decrement button element from the document
  const decrementButton = document.getElementById("dec");
  // Get the reset button element from the document
  const resetButton = document.getElementById("reset");
  // Get the counter span element from the document
  const counterDisplay = document.getElementById(counterID);

  // Check if any element is missing, then exit the function
  if (!incrementButton || !decrementButton || !resetButton || !counterDisplay) {
    return;
  }

  // Add click event to the increment button
  incrementButton.addEventListener("click", () => {
    // Increase the counter by 1
    counter++;
    updateDisplay(counterDisplay);
  });

  // Add click event to the decrement button
  decrementButton.addEventListener("click", () => {
    // Decrease the counter by 1
    counter--;
    updateDisplay(counterDisplay);
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    counter = 0;

    updateDisplay(counterDisplay);
  });
}

function updateDisplay(counterDisplay: HTMLElement) {
  // Update the counter display
  counterDisplay.innerHTML = `${counter}`;
  // Update the document title
  document.title = "Clicked " + counter;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

function start() {
  // Call setup to initialize the UI
  setup();
}
// Start the counter app
start();
