import React, { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const CoinReportWrapper = ({
  title,
  subtitle,
  icon,
  navigateTo,
  children,
}: PropsWithChildren & {
  title: "Trending" | "Winners" | "Exchanges";
  subtitle: string;
  icon: React.ReactNode;
  navigateTo: string;
}) => {
  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <div className="space-x-2 flex py-1 items-center">
          {icon}

          <p className="text-lg inline font-semibold text-card-foreground/80">
            {title}
            <span className="text-xs ml-4 font-light text-tertiary/80">
              {subtitle}
            </span>
          </p>
        </div>

        <Link to={navigateTo}>
          <Button className="h-10 min-w-[6rem]">{"View all"}</Button>
        </Link>
      </header>

      <div className="space-y-6 md:px-8 w-full">{children}</div>
    </div>
  );
};

export default CoinReportWrapper;
