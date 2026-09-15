import { convertPrice, getUserCurrency, getNBPRate } from "../utils/currency";

export async function updatePrices() {
    const currency = await getUserCurrency();
    const rate = await getNBPRate(currency);

    for (const element of document.querySelectorAll<HTMLElement>(
        ".price-element",
    )) {
        const price = parseFloat(element.dataset.pricePln ?? "");

        if (Number.isNaN(price)) {
            continue;
        }

        const convertedPrice = await convertPrice(price, currency, rate);

        if (convertedPrice === "UNSUPPORTED") {
            element.textContent = "Not yet available in your country";
        } else {
            const span = element.querySelector("span");

            if (span) {
                span.textContent = convertedPrice;
            }
            else{
                element.innerText = convertedPrice;
            }
        }
    }
}