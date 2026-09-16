export const SUPPORTED_CURRENCIES = [
    "USD",
    "EUR",
    "CHF",
    "GBP",
    "JPY",
    "NOK",
    "SEK",
    "CZK",
    "DKK",
    "CAD",
    "AUD",
] as const;

export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

const COUNTRY_TO_CURRENCY: Record<string, string> = {
    PL: "PLN",
    US: "USD",
    DE: "EUR",
    FR: "EUR",
    IT: "EUR",
    ES: "EUR",
    AT: "EUR",
    NL: "EUR",
    BE: "EUR",
    FI: "EUR",
    PT: "EUR",
    IE: "EUR",
    LU: "EUR",
    MT: "EUR",
    GR: "EUR",
    SI: "EUR",
    CY: "EUR",
    SK: "EUR",
    EE: "EUR",
    LV: "EUR",
    LT: "EUR",
    CH: "CHF",
    GB: "GBP",
    JP: "JPY",
    NO: "NOK",
    SE: "SEK",
    CZ: "CZK",
    DK: "DKK",
    CA: "CAD",
    AU: "AUD",
};

const UNSUPPORTED_COUNTRIES = [
    "CO",
    "ME",
    "KP",
    "KR",
    "IN",
    "RS",
    "MX",
    "AE",
    "TR",
    "AM",
    "CL",
    "VN",
    "OM",
];



const CURRENCY_CACHE_KEY = "pixilabs_currency";
const RATE_CACHE_PREFIX = "pixilabs_currency_rate_";
const CACHE_DURATION = 60 * 60 * 1000;

type CachedValue<T> = {
    value: T;
    timestamp: number;
};

function getCached<T>(key: string): T | null {
    try {
        const raw = sessionStorage.getItem(key);

        if (!raw) {
            return null;
        }

        const cached = JSON.parse(raw) as CachedValue<T>;

        if (Date.now() - cached.timestamp > CACHE_DURATION) {
            sessionStorage.removeItem(key);
            return null;
        }

        return cached.value;
    } catch {
        return null;
    }
}

function setCached<T>(key: string, value: T) {
    try {
        sessionStorage.setItem(
            key,
            JSON.stringify({
                value,
                timestamp: Date.now(),
            }),
        );
    } catch {
    }
}

export async function getUserCurrency(): Promise<string> {
    const cached = getCached<string>(CURRENCY_CACHE_KEY);

    if (cached) {
        return cached;
    }

    try {
        const res = await fetch("https://ip2c.org/s");
        const data = await res.text();
        const countryCode = data.split(";")[1];

        if (UNSUPPORTED_COUNTRIES.includes(countryCode)) {
            setCached(CURRENCY_CACHE_KEY, "UNSUPPORTED");
            return "UNSUPPORTED";
        }

        const currency = COUNTRY_TO_CURRENCY[countryCode] || "PLN";

        setCached(CURRENCY_CACHE_KEY, currency);

        return currency;
    } catch {
        return "PLN";
    }
}

export async function getNBPRate(currency: string): Promise<number | null> {
    if (currency === "PLN") {
        return 1;
    }

    const cacheKey = `${RATE_CACHE_PREFIX}${currency}`;
    const cached = getCached<number>(cacheKey);

    if (cached !== null) {
        return cached;
    }

    try {
        const res = await fetch(
            `https://api.nbp.pl/api/exchangerates/rates/A/${currency}?format=json`,
        );

        if (!res.ok) {
            throw new Error("Unsupported currency");
        }

        const data = await res.json();
        const rate = data.rates[0].mid;

        setCached(cacheKey, rate);

        return rate;
    } catch {
        return null;
    }
}

export async function convertPrice(
    plnPrice: number,
    userCurrency: string,
    rate: number | null
): Promise<string> {
    const currency = userCurrency.toUpperCase();

    if(plnPrice === 0) return "Free";

    if (currency === "UNSUPPORTED") {
        return "UNSUPPORTED";
    }

    if (!SUPPORTED_CURRENCIES.includes(currency as SupportedCurrency)) {
        return `${plnPrice.toFixed(2)} PLN`;
    }

    if (!rate) {
        return `${plnPrice.toFixed(2)} PLN`;
    }

    const converted = (plnPrice / rate) * 1.04;

    const formatter = new Intl.NumberFormat(navigator.language, {
        style: "currency",
        currency,
    });

    return formatter.format(converted);
}