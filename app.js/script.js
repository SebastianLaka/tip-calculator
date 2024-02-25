"use strict";
const billAmount = document.querySelector(".price-area__input");
const tipButtons = document.querySelectorAll(".tip-buttons-area__button");
const customButton = document.querySelector(".tip-buttons-area__custom");
const error = document.querySelector(".people-area-heading__p-error");
const numOfPeople = document.querySelector(".amount-people__input");
const tipAmount = document.querySelector(".tip-amount-person__amount");
const totalAmount = document.querySelector(".tip-total-person__amount");
const resetButton = document.querySelector(".tip-info__cta");

// const x = (billAmount.value = 142.55);
// const y = (numOfPeople.value = 5);
// const f = 15;
// const z = x / y / f;
// console.log(z);

const main = () => {
  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const getNumber = Number(button.value);
      console.log(getNumber);
      const getTotalTipValue = () => {
        const amountOfTip = billAmount.value / numOfPeople.value;

        totalAmount.textContent = `$ ${amountOfTip}`;
        // totalAmount.textContent = `${a}`;
      };
      if (billAmount.value > 0 && numOfPeople.value > 0) {
        getTotalTipValue();
      }
    });
  });
  const errorRemove = () => {
    if (Number(numOfPeople.value) > 0) {
      error.classList.toggle("hidden");
    }
  };
  numOfPeople.addEventListener("click", (e) => {
    e.preventDefault();
    errorRemove();
  });
  resetButton.addEventListener("click", () => {
    billAmount.value = "";
    customButton.value = "";
    numOfPeople.value = "";
    tipAmount.textContent = "$ 0.00";
    totalAmount.textContent = "$ 0.00";
  });
};
main();
