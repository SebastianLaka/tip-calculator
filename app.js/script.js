"use strict";
const billAmount = document.querySelector(".price-area__input");
const tipButtons = document.querySelectorAll(".tip-buttons-area__button");
const customButton = document.querySelector(".tip-buttons-area__custom");
const error = document.querySelector(".people-area-heading__p-error");
const numOfPeople = document.querySelector(".amount-people__input");
const tipAmount = document.querySelector(".tip-amount-person__amount");
const totalAmount = document.querySelector(".tip-total-person__amount");
const resetButton = document.querySelector(".tip-info__cta");

console.log(
  billAmount,
  tipButtons,
  customButton,
  error,
  numOfPeople,
  tipAmount,
  totalAmount,
  resetButton
);
resetButton.addEventListener("click", () => {
  billAmount.value = "";
  customButton.value = "";
  numOfPeople.value = "";
  tipAmount.textContent = "$ 0.00";
  totalAmount.textContent = "$ 0.00";
});
