/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  const encryptBtn = document.querySelector('#encrypt-it');
  const inputText = document.querySelector("#input-text");

  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log('window loaded');
    encryptBtn.addEventListener("click", handleEncryptClick);
  
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleEncryptClick() {
    const inputString = inputText.value;
    const output = document.querySelector("#result");
    let shiftCipher = "";

    for(let i=0; i<inputString.length; i++) {
      let nextChar = inputString.charCodeAt(i);
      if(nextChar > 90) {
        nextChar = (( (nextChar + 1) - 97) % 26) + 97;
      } else if(nextChar < 123) {
        nextChar = (( (nextChar + 1) - 65) % 26) + 65;
      }
      shiftCipher += String.fromCharCode(nextChar);
    }
    output.textContent = shiftCipher;
  }

})();
