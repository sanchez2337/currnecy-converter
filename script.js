let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let currencyNameElement = document.querySelector(".js-currencyName");
let resultElement = document.querySelector(".js-result");

let usdRate = 5.02;
let gbpRate = 5.55;
let eurRate = 4.87;
let chfRate = 5.03;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    switch (currency) {
        case "USD":
            result = amount / usdRate;
            break;
        case "GBP":
            result = amount / gbpRate;
            break;
        case "EUR":
            result = amount / eurRate;
            break;
        case "CHF":
            result = amount / chfRate;
    }

    resultElement.innerText = result.toFixed(2);
    currencyNameElement.innerText = currency;

});