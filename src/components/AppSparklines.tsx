import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

type Props = {
  data?: number[] | undefined;
  margin?: number | undefined;
  sparklineFill?: boolean;
};

const AppSparklines = ({ data, margin, sparklineFill }: Props) => {
  return (
    <Sparklines data={data} margin={margin ? margin : 6}>
      <SparklinesLine
        style={{
          strokeWidth: 1,
          stroke: "#336aff",
          fill: sparklineFill ? "#336aff" : "transparent",
        }}
      />
      <SparklinesSpots
        size={1}
        style={{
          stroke: "#336aff",
          strokeWidth: 1,
          fill: "white",
        }}
      />
    </Sparklines>
  );
};

export default AppSparklines;
