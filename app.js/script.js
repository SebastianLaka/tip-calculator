"use strict";
const billAmount = document.querySelector(".price-area__input");
const tipButtons = document.querySelectorAll(".tip-buttons-area__button");
const customButton = document.querySelector(".tip-buttons-area__custom");
const error = document.querySelector(".people-area-heading__p-error");
const numOfPeople = document.querySelector(".amount-people__input");
const tipAmount = document.querySelector(".tip-amount-person__amount");
const totalAmount = document.querySelector(".tip-total-person__amount");
const resetButton = document.querySelector(".tip-info__cta");
const getTotalTipValue = (button) => {
  const tipTotalAmount = billAmount.value / numOfPeople.value;
  const tipPersonAmount = (tipTotalAmount * button) / 100;
  const getTotalAmount = tipTotalAmount + tipPersonAmount;
  totalAmount.textContent = `$ ${Number(getTotalAmount).toFixed(2)}`;
  tipAmount.textContent = `$ ${Number(tipPersonAmount).toFixed(2)}`;
};
tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const getValue = Number(button.value);
    if (billAmount.value > 0 && numOfPeople.value > 0) {
      getTotalTipValue(getValue);
      errorInfoRemove();
    } else if (Number(numOfPeople.value) === 0) {
      errorInfoAdd();
    }
  });
});
customButton.addEventListener("input", (e) => {
  e.preventDefault();
  const getValue = Number(customButton.value);
  if (customButton.value >= 0 && numOfPeople.value > 0) {
    getTotalTipValue(getValue);
    errorInfoRemove();
  } else {
    errorInfoAdd();
  }
});
const errorInfoAdd = () => {
  error.classList.add("show");
  numOfPeople.classList.add("change-input-color");
};
const errorInfoRemove = () => {
  error.classList.remove("show");
  numOfPeople.classList.remove("change-input-color");
};
resetButton.addEventListener("click", () => {
  billAmount.value = "";
  customButton.value = "";
  numOfPeople.value = "";
  errorInfoRemove();
  tipAmount.textContent = "$ 0.00";
  totalAmount.textContent = "$ 0.00";
});
