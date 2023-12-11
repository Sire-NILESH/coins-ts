import { PropsWithChildren } from "react";
import CoinContext from "../uitls/contexts/CoinContext";
import { ThemeProvider } from "../uitls/contexts/ThemeContext";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <CoinContext>{children}</CoinContext>
    </ThemeProvider>
  );
};

export default Providers;
