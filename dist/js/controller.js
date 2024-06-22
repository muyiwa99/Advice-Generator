"use strict";

const parentElement = document.querySelector(".advice-id_text");
const idNumber = document.querySelector(".advice-id");
const button = document.querySelector(".circle");

// Creating fetch request
const getAdviceQuote = async function () {
  try {
    const quoteJson = await fetch(`https://api.adviceslip.com/advice`);

    if (!quoteJson.ok) {
      throw new Error("Something went wrong, Try again");
    }

    const quoteData = await quoteJson.json();

    return quoteData.slip;
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Redenring the ID and 'Advice' to the page
const renderQuote = function (slip) {
  if (slip) {
    const { id, advice } = slip;

    if (parentElement && idNumber) {
      parentElement.classList.remove("scale-in-center");
      idNumber.classList.remove("scale-in-center");

      // Trigger a reflow to restart the animation
      void parentElement.offsetWidth;
      void idNumber.offsetWidth;

      // Update the content
      parentElement.textContent = `"${advice}"`;
      idNumber.textContent = `#${id}`;

      // Use requestAnimationFrame to re-add the class after a frame
      requestAnimationFrame(() => {
        parentElement.classList.add("scale-in-center");
        idNumber.classList.add("scale-in-center");
      });
    }
  } else {
    if (parentElement) {
      parentElement.textContent = "Something went wrong, Try again ";
    }
  }
};

const getAndRender = async function () {
  const slip = await getAdviceQuote();
  renderQuote(slip);
};

button.addEventListener("click", async function (e) {
  e.preventDefault();
  await getAndRender();
});

getAndRender();
