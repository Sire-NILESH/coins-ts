import React from "react";
import { Sparklines } from "react-sparklines";

interface IProps {
  sparkLineData: {
    price: number[];
  };
}

const SparkLine: React.FC<IProps> = (props) => {
  return (
    <Sparklines
      data={[...props.sparkLineData.price]}
      limit={5}
      width={100}
      height={20}
      margin={5}
    ></Sparklines>
  );
};

export default SparkLine;
