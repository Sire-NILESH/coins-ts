import { createContext, useContext, useEffect, useState } from "react";

type TCurrencyShortNames = "INR" | "USD" | "EUR" | "GBP" | "AUD";
type TSymbolsShortNames = "₹" | "$" | "€" | "£";

type TCurrency = {
  currency: TCurrencyShortNames;
  symbol: TSymbolsShortNames;
};

interface IContext {
  currency: TCurrency;
  setCurrency: React.Dispatch<React.SetStateAction<TCurrency>>;
}
type TCurrencyToSymbolObj = {
  [key in TCurrencyShortNames]: TSymbolsShortNames;
};

const currencyShortNameToSymbol: TCurrencyToSymbolObj = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
  AUD: "$",
};

const Crypto = createContext<IContext>({
  currency: { currency: "USD", symbol: "$" },
  setCurrency: () => {},
});

const CoinContext: React.FC<{ children: React.ReactNode }> = (props) => {
  const [currency, setCurrency] = useState<TCurrency>({
    currency: "USD",
    symbol: currencyShortNameToSymbol["USD"],
  });
  //   const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    switch (currency.currency) {
      case "INR":
        setCurrency({
          currency: "INR",
          symbol: currencyShortNameToSymbol[currency.currency],
        });
        break;
      case "USD":
        setCurrency({
          currency: "USD",
          symbol: currencyShortNameToSymbol[currency.currency],
        });
        break;
      case "EUR":
        setCurrency({
          currency: "EUR",
          symbol: currencyShortNameToSymbol[currency.currency],
        });
        break;
      case "AUD":
        setCurrency({
          currency: "AUD",
          symbol: currencyShortNameToSymbol[currency.currency],
        });
        break;

      default:
        setCurrency({
          currency: "USD",
          symbol: currencyShortNameToSymbol[currency.currency],
        });
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
