export const colorCode = (value: number) => {
  const code = {
    positive: "bg-green-600",
    neutral: "bg-yellow-600",
    negative: "bg-red-600",
    fallback: "bg-blue-600",
  };

  if (+value.toFixed(3) === 0.0) return code["neutral"];
  else if (+value.toFixed(3) > 0.0) return code["positive"];
  else if (+value.toFixed(3) < 0.0) return code["negative"];
  else return code["fallback"];
};

export const formatCurrency = (value: number | null, decimal = 4): string => {
  if (value === null) return "--";
  return Number(value.toFixed(decimal)).toLocaleString("en-US");
};

export const chartIntervals = [
  {
    label: "24 H",
    value: "1",
  },
  {
    label: "W",
    value: "7",
  },
  {
    label: "M",
    value: "30",
  },
  {
    label: "3M",
    value: "90",
  },
  {
    label: "Y",
    value: "365",
  },
  {
    label: "ALL",
    value: "max",
  },
];
