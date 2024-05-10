import axios from "axios";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler, //X AXIS
  LinearScale,
  LineElement, //Y AXIS
  PointElement,
  Tooltip,
} from "chart.js";
import { format } from "date-fns";
import { useContext, useEffect, useMemo, useState } from "react";
import { Line } from "react-chartjs-2";
import { CoinInfo } from "../../../typing";
import { getHistoricalChart } from "../../uitls/api";
import { ThemeContext } from "../../uitls/contexts/ThemeContext";
import { chartIntervals, formatCurrency } from "../../uitls/helper";
import LoadingSpinner from "../ui/LoadingSpinner";

interface IProps {
  coin: CoinInfo;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Tooltip
);

const LineChart: React.FC<IProps> = ({ coin }) => {
  const { theme } = useContext(ThemeContext);
  const [chartData, setChartData] = useState<number[][]>();
  const [days, setDays] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const labelData = useMemo(
    () =>
      chartData?.map((coin) => {
        const date = new Date(coin[0]);
        const time = days === "1" ? format(date, "p") : undefined; //time in am/pm format
        return days === "1" ? time : date.toLocaleDateString();
      }),
    [chartData, days]
  );

  useEffect(() => {
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
              labels: labelData,

              datasets: [
                {
                  data: chartData.map((coin) => coin[1]),
                  label: `Price ( Past ${days} Days ) in USD`,
                  borderColor: "#0284c7",
                  borderWidth: 2,
                  tension: 0.2,
                  fill: true,
                  backgroundColor: "rgba(117, 172, 255, 0.3)",
                },
              ],
            }}
            options={{
              elements: {
                point: {
                  radius: 0.8,
                },
              },
              responsive: true,

              scales: {
                x: {
                  border: {
                    display: true,
                    color: theme === "light" ? "#4b5563" : "#9ca3af",
                  },
                  ticks: {
                    color: theme === "light" ? "#4b5563" : "#9ca3af",
                  },
                  grid: {
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    color: theme === "light" ? "#e5e7eb" : "#1f2937",
                  },
                },
                y: {
                  border: {
                    display: true,
                    color: theme === "light" ? "#4b5563" : "#9ca3af",
                  },
                  ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, ticks) {
                      return "$" + formatCurrency(+value);
                    },
                    color: theme === "light" ? "#4b5563" : "#9ca3af",
                  },
                  grid: {
                    display: true,
                    drawOnChartArea: true,
                    drawTicks: true,
                    color: theme === "light" ? "#e5e7eb" : "#374151",
                  },
                },
              },
            }}
          />
          <div className="w-auto mt-8 mx-auto flex items-center">
            {chartIntervals.map((day) => (
              <button
                key={day.value}
                className={`${
                  day.value === days ? "bg-secondary" : ""
                } p-3 w-14 hover:bg-secondary rounded-md hover:text-primary`}
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
