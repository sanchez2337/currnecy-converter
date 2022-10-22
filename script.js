{
function welcome() {
    console.log("Witam wszystkich developerów");
}

welcome();
}

let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let currencyNameElement = document.querySelector(".js-currencyName");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const usdRate = 5.02;
    const gbpRate = 5.55;
    const eurRate = 4.87;
    const chfRate = 5.03;

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