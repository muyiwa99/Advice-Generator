const getAdviceQuote = async function () {
  try {
    const quoteJson = await fetch(`https://api.adviceslip.com/advice`);

    const quoteData = await quoteJson.json();

    const id = quoteData.slip.id;
    const advice = quoteData.slip.advice;

    console.log(id);
    console.log(advice);
  } catch (err) {
    console.log(err);
  }
};

getAdviceQuote();

const renderAdvice = function (id, advice) {
  const parentElement = document.querySelector("advice-id_text");
  const idNumber = document.querySelector(".advice-id");

  idNumber.innerHTML = id;
  parentElement.innerHTML = advice;
};

renderAdvice();
