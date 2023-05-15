/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function() {
  const BASE_URL = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";
  var start = new Date();
  var elapsed = new Date() - start;
  window.addEventListener("load", init);
  
  function init() {
    const radioBtns = document.querySelectorAll("input[name='animal']");
    radioBtns.forEach(btn => {
      btn.addEventListener('change', makeRequest);
    });
  }

  
  async function makeRequest() {
    try {
      start = new Date();
      let animal = this.value;
      let res = await fetch(BASE_URL + `?animal=${animal}`);
      time();
      console.log("fetch time: " + elapsed);
      res = await checkStatus(res);
      processData(res);
    } catch(err) {
      handleError(err);
    }
  }

  /**
   * TODO: Implement any other functions you need
   */

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res.text();
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }

  function processData(res) {
    res = res.split("\n");
    time();
    console.log("split time: " + elapsed);
    addImg(res);
  }

  function addImg(res) {
    clearImgs();
    time()
    console.log("clear time: " + elapsed);
    res.forEach(imgURL => {
      let imgElem = document.createElement("img");
      imgElem.src = imgURL;
      imgElem.alt = "a fluffy friend";
      const pictures = document.querySelector("#pictures");
      pictures.appendChild(imgElem);
    });
    time();
    console.log("add img time: " + elapsed + "\n");
  }

  function clearImgs() {
    let pictureContainer = document.querySelector("#pictures");
    let imgs = pictureContainer.querySelectorAll("img");
    for(let i=0; i<imgs.length; i++) {
      imgs[i].remove();
    }
  }

  function time() {
    elapsed = new Date() - start;
    start = new Date();
  }

})();
