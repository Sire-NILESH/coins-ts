import { PropsWithChildren } from "react";
import { ThemeProvider } from "../uitls/contexts/ThemeContext";

const Providers = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
