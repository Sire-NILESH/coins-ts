import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
// 24 HOURS
import { chartData } from "../../data/one-day-chart-data/bitcoin_market_chart";
// 1 YEAR
import { chartOnlyData } from "../../data/chart/bitcoinChartOnly";

interface IProps {
  type: "day" | "year" | "week";
  color: "blue" | "green" | "red";
  size: "sm" | "lg";
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

// ChartJS.register(
//    CategoryScale,
//    LinearScale,
//    PointElement,
//    LineElement,
//    Title,
//    Tooltip,
//    Legend
//  );

const options = (size: "sm" | "lg"): Object => {
  return {
    responsive: true,
    elements: {
      line: {
        borderWidth: Number(size === "sm" ? 2 : 3),
      },
      point: {
        radius: Number(size === "sm" ? 1 : 3),
      },
    },
  };
};

const colorCode = {
  blue: { borderColor: "rgb(2,122,221)", backgroundColor: "rgb(60,64,245)" },
  red: {
    borderColor: "rgb(255, 99, 132)",
    backgroundColor: "rgba(255, 99, 132, 0.5)",
  },
  green: {
    borderColor: "rgb(88,187,121)",
    backgroundColor: "rgb(57,156,90)",
  },
};

export function formatAMPM(date: Date): string {
  let hours = date.getHours();
  // let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  // minutes = minutes < 10 ? "0" + minutes : minutes;
  // const strTime = hours + ":" + minutes + " " + ampm;
  const strTime = hours + " " + ampm;
  return strTime;
}

const getDayChartLabels = () => {
  const xAxisData: string[] = [];
  const yAxisData: number[] = [];

  chartData.prices
    .filter((_data, i) => i % 12 === 0)
    .map((data, i) => {
      xAxisData.push(formatAMPM(new Date(data[0])));
      yAxisData.push(data[1]);
    });

  return { xAxisData, yAxisData };
};

const getYearChartLabels = () => {
  const xAxisData: string[] = [];
  const yAxisData: number[] = [];

  chartOnlyData.prices
    .filter((_data, i) => i % 31 === 0)
    .forEach((data) => {
      xAxisData.push(
        new Date(data[0]).toLocaleString("default", { month: "long" })
      );
      yAxisData.push(data[1]);
    });

  return { xAxisData, yAxisData };
};

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Bitcoin",
//       data: chartData.prices.map((data) => {
//         return data[1].toLocaleString("en-US", {
//           style: "currency",
//           currency: "USD",
//         });
//       }),
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//   ],
// };

export default function ChartMd(props: IProps): JSX.Element {
  // let xAxisData, yAxisData;
  let axesdata;
  if (props.type === "day") {
    axesdata = getDayChartLabels();
  } else if (props.type === "year") {
    axesdata = getYearChartLabels();
  }

  const data = {
    labels: axesdata?.xAxisData,
    datasets: [
      {
        data: axesdata?.yAxisData,
        borderColor: `${colorCode[props.color].borderColor}`,
        backgroundColor: `${colorCode[props.color].backgroundColor}`,
      },
    ],
  };
  return (
    <Line
      options={options(props.size)}
      data={data}
      className="cursor-pointer w-full"
    />
  );
}
