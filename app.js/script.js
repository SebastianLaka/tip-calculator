"use strict";
const billAmount = document.querySelector(".price-area__input");
const tipButtons = document.querySelectorAll(".tip-buttons-area__button");
const customButton = document.querySelector(".tip-buttons-area__custom");
const error = document.querySelector(".people-area-heading__p-error");
const numOfPeople = document.querySelector(".amount-people__input");
const tipAmount = document.querySelector(".tip-amount-person__amount");
const totalAmount = document.querySelector(".tip-total-person__amount");
const resetButton = document.querySelector(".tip-info__cta");

tipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = Number(button.value);
  });
});
console.log(1);
numOfPeople.addEventListener("click", (e) => {
  e.preventDefault();
  if ((numOfPeople.value = "0")) {
    error.classList.toggle("hidden");
  }
});
resetButton.addEventListener("click", () => {
  billAmount.value = "";
  customButton.value = "";
  numOfPeople.value = "";
  tipAmount.textContent = "$ 0.00";
  totalAmount.textContent = "$ 0.00";
});
