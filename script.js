{
    {
        function welcome() {
            console.log("Witam wszystkich developerów");
        }

        welcome();
    }


    const calculateResult = (currency, amount) => {
        const usdRate = 5.02;
        const gbpRate = 5.55;
        const eurRate = 4.87;
        const chfRate = 5.03;

        switch (currency) {
            case "USD":
                return amount / usdRate;
            case "GBP":
                return amount / gbpRate;
            case "EUR":
                return amount / eurRate;
            case "CHF":
                return amount / chfRate;
        }
    }


    const formElement = document.querySelector(".js-form");


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const currencyNameElement = document.querySelector(".js-currencyName");
        const resultElement = document.querySelector(".js-result");
        const currency = currencyElement.value;
        const amountElement = document.querySelector(".js-amount");
        const amount = +amountElement.value;

        let result = calculateResult(currency, amount);

        resultElement.innerText = result.toFixed(2);
        currencyNameElement.innerText = currency;

    });
}