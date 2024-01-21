import appIcons from "../config/appIcons";
import TableRowData from "./ui/TableRowData";

type Props = {
  className: string;
  data: {
    heading: string;
    checkPerfromaceOver: number;
    statsRows: { name: string | undefined; value: number | null }[];
  };
};

const CoinOvertime = ({ className, data }: Props) => {
  return (
    <div className={`${className ? className : ""}`}>
      <header className="flex items-center justify-between">
        <p className="text-primary flex items-center gap-2">
          {" "}
          {appIcons.clock}
          {data.heading}
        </p>
        {/* <div
          className={`w-3 justify-self-end rounded-full h-3 ${colorCode(
            data.checkPerfromaceOver
          )}`}
        /> */}
        {+data.checkPerfromaceOver.toFixed(3) > 0
          ? appIcons.trendingUp
          : appIcons.trendingDown}
      </header>

      <>
        {data.statsRows.map((stat) =>
          stat.name ? (
            <TableRowData
              key={stat.name}
              title={stat.name}
              value={stat.value}
            />
          ) : null
        )}
      </>
    </div>
  );
};

export default CoinOvertime;
