import axios from "axios";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale, //X AXIS
  LinearScale, //Y AXIS
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { CoinInfo } from "../../../typing";
import { chartIntervals } from "../../uitls/helper";
import LoadingSpinner from "../ui/LoadingSpinner";
import { getHistoricalChart } from "../../uitls/api";

interface IProps {
  coin: CoinInfo;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

const LineChart: React.FC<IProps> = ({ coin }) => {
  const [chartData, setChartData] = useState<number[][]>();
  const [days, setDays] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const fetchHistoricData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        getHistoricalChart(coin.id, days, "usd")
      );
      setChartData(data.prices);
    } catch (error) {
      setChartData([[]]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="w-full">
      {chartData ? (
        <div className="flex flex-col items-center">
          <Line
            data={{
              labels: chartData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === "1" ? time : date.toLocaleDateString();
              }),

              datasets: [
                {
                  data: chartData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in USD`,
                  borderColor: "#75acff",
                  borderWidth: 2,
                  tension: 0.2,
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 0.8,
                },
              },
            }}
          />
          <div className="w-auto mt-8 mx-auto flex items-center">
            {chartIntervals.map((day) => (
              <button
                key={day.value}
                className="p-4 hover:bg-secondary rounded-md hover:text-primary"
                onClick={() => {
                  setDays(day.value);
                }}
              >
                <p
                  className={`${
                    day.value === days ? "text-primary" : ""
                  } text-xs font-semibold`}
                >
                  {day.label}
                </p>
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LineChart;
