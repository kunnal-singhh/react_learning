import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrency() {
      const res = await fetch(
        `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
      );
      const json = await res.json();
      setData(json[currency]);
    }

    fetchCurrency();
  }, [currency]);

  return data;
}
