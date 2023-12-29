import TableRowData from "../ui/TableRowData";
import CoinImage from "./CoinImage";

type Props = {
  className?: string;
  coin: {
    name: string;
    image: string;
    rank: number;
    statsRows: { name: string | undefined; value: number | null }[];
  };
};

const CoinIntro = ({ className, coin }: Props) => {
  return (
    <div className={`${className ? className : ""}`}>
      {/* COIN IMG,NAME AND MARKET CAP */}
      <header className="flex items-center justify-between mb-1 w-full">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <CoinImage image={coin.image} name={coin.name} />
            <p className="ml-2 text-secondary text-sm font-semibold">
              {coin.name}
            </p>
          </div>
          <span className="border border-primary dark:border-stone-600 text-tertiary flex items-center justify-center rounded-full h-6 w-6 mr-1">
            {coin.rank}
          </span>{" "}
        </div>
      </header>

      {/* OTHER STATS */}
      <div className="mx-2 mt-2">
        {coin.statsRows.map((stat) =>
          stat.name ? (
            <TableRowData
              key={stat.name}
              title={stat.name}
              value={stat.value}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default CoinIntro;
