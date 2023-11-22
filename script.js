const form = document.querySelector(".form-section");
const resetButton = document.querySelector(".continue");
const completeState = document.querySelector(".complete-state");
const inputError = document.querySelector(".input-error");
const cardMonth = document.querySelector(".month");
const cardYear = document.querySelector(".year");
const cardCvc = document.querySelector(".cvc");
const submitBotton = document.querySelector(".submit");
const cardName = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");

const regex = /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/;

const tester = "e";
console.log(regex.test(tester));

submitBotton.addEventListener("click", (e) => {
  e.preventDefault();
  const name = cardName.value;
  const numbers = cardNumber.value;
  const month = cardMonth.value;
  const year = cardYear.value;
  const cvc = cardCvc.value;

  if (!name) {
    cardName.classList.add("input-errorMessage");
    const small = cardName.nextElementSibling;
    small.textContent = "cant be blank";
    small.style.display = "block";
  } else if (!numbers) {
    cardNumber.classList.add("input-errorMessage");
    const small = cardNumber.nextElementSibling;
    small.textContent = "cant be blank";
    small.style.display = "block";
  } else if (!regex.test(numbers)) {
    cardNumber.classList.add("input-errorMessage");
    const small = cardNumber.nextElementSibling;
    small.textContent = "Wrong format, numbers only";
    small.style.display = "block";
  } else if (!month) {
    cardMonth.classList.add("input-errorMessage");
    const small = cardMonth.nextElementSibling;
    small.textContent = "cant be blank";
    small.style.display = "block";
  } else if (!year) {
    cardYear.classList.add("input-errorMessage");
    const small = cardYear.nextElementSibling;
    small.textContent = "cant be blank";
    small.style.display = "block";
  } else if (!cvc) {
    cardCvc.classList.add("input-errorMessage");
    const small = cardCvc.nextElementSibling;
    small.textContent = "cant be blank";
    small.style.display = "block";
  } else {
    form.style.display = "none";
    completeState.style.display = "flex";
  }
});

resetButton.addEventListener("click", () => {
  completeState.style.display = "none";
  cardName.value = "";
  cardNumber.value = "";
  cardMonth.value = "";
  cardYear.value = "";
  cardCvc.value = "";
  form.style.display = "block";
});
