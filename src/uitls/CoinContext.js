import { createContext, useContext, useEffect, useState } from "react";

const currencyToSymbol = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "$",
};

const Crypto = createContext();

const CoinContext = (props) => {
  const [currency, setCurrency] = useState({
    currency: "USD",
    symbol: currencyToSymbol["USD"],
  });
  //   const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    switch (currency.currency) {
      case "INR":
        setCurrency({
          currency: "INR",
          symbol: currencyToSymbol[currency.currency],
        });
        break;
      case "USD":
        setCurrency({ currency: "USD", symbol: "$" });
        break;
      case "EUR":
        setCurrency({ currency: "EUR", symbol: "€" });
        break;
      case "AUD":
        setCurrency({ currency: "AUD", symbol: "$" });
        break;

      default:
        setCurrency({ currency: "USD", symbol: "$" });
        break;
    }

    // return () => {
    //   setCurrency();
    // };
  }, [currency.currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency }}>
      {props.children}
    </Crypto.Provider>
  );
};

export default CoinContext;

export const CoinState = () => {
  return useContext(Crypto);
};
