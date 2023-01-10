import React from "react";
// import PropTypes from "prop-types";

import { ResponsiveLine } from "@nivo/line";

const singleData = [
  {
    id: "japan",
    color: "hsl(93, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 138,
      },
      {
        x: "helicopter",
        y: 268,
      },
      {
        x: "boat",
        y: 244,
      },
      {
        x: "train",
        y: 28,
      },
      {
        x: "subway",
        y: 293,
      },
      {
        x: "bus",
        y: 191,
      },
      {
        x: "car",
        y: 226,
      },
      {
        x: "moto",
        y: 266,
      },
      {
        x: "bicycle",
        y: 131,
      },
      {
        x: "horse",
        y: 299,
      },
      {
        x: "skateboard",
        y: 269,
      },
      {
        x: "others",
        y: 273,
      },
    ],
  },
];

const data = [
  {
    id: "japan",
    color: "hsl(93, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 138,
      },
      {
        x: "helicopter",
        y: 268,
      },
      {
        x: "boat",
        y: 244,
      },
      {
        x: "train",
        y: 28,
      },
      {
        x: "subway",
        y: 293,
      },
      {
        x: "bus",
        y: 191,
      },
      {
        x: "car",
        y: 226,
      },
      {
        x: "moto",
        y: 266,
      },
      {
        x: "bicycle",
        y: 131,
      },
      {
        x: "horse",
        y: 299,
      },
      {
        x: "skateboard",
        y: 269,
      },
      {
        x: "others",
        y: 273,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(243, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 281,
      },
      {
        x: "helicopter",
        y: 294,
      },
      {
        x: "boat",
        y: 239,
      },
      {
        x: "train",
        y: 71,
      },
      {
        x: "subway",
        y: 77,
      },
      {
        x: "bus",
        y: 288,
      },
      {
        x: "car",
        y: 80,
      },
      {
        x: "moto",
        y: 246,
      },
      {
        x: "bicycle",
        y: 192,
      },
      {
        x: "horse",
        y: 9,
      },
      {
        x: "skateboard",
        y: 186,
      },
      {
        x: "others",
        y: 57,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(136, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 171,
      },
      {
        x: "helicopter",
        y: 128,
      },
      {
        x: "boat",
        y: 284,
      },
      {
        x: "train",
        y: 45,
      },
      {
        x: "subway",
        y: 240,
      },
      {
        x: "bus",
        y: 271,
      },
      {
        x: "car",
        y: 83,
      },
      {
        x: "moto",
        y: 200,
      },
      {
        x: "bicycle",
        y: 93,
      },
      {
        x: "horse",
        y: 11,
      },
      {
        x: "skateboard",
        y: 229,
      },
      {
        x: "others",
        y: 76,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(139, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 220,
      },
      {
        x: "helicopter",
        y: 237,
      },
      {
        x: "boat",
        y: 92,
      },
      {
        x: "train",
        y: 141,
      },
      {
        x: "subway",
        y: 161,
      },
      {
        x: "bus",
        y: 233,
      },
      {
        x: "car",
        y: 128,
      },
      {
        x: "moto",
        y: 8,
      },
      {
        x: "bicycle",
        y: 195,
      },
      {
        x: "horse",
        y: 31,
      },
      {
        x: "skateboard",
        y: 63,
      },
      {
        x: "others",
        y: 294,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(354, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 26,
      },
      {
        x: "helicopter",
        y: 152,
      },
      {
        x: "boat",
        y: 269,
      },
      {
        x: "train",
        y: 178,
      },
      {
        x: "subway",
        y: 50,
      },
      {
        x: "bus",
        y: 248,
      },
      {
        x: "car",
        y: 26,
      },
      {
        x: "moto",
        y: 122,
      },
      {
        x: "bicycle",
        y: 250,
      },
      {
        x: "horse",
        y: 108,
      },
      {
        x: "skateboard",
        y: 210,
      },
      {
        x: "others",
        y: 211,
      },
    ],
  },
];

// interface IProps {
//   single? : boolean;
// }

const LineChart = (props) => {
  // LineChart.propTypes = {
  //   data: PropTypes.object.isRequired,
  // };

  return (
    <ResponsiveLine
      data={props.single ? singleData : data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Transportation",
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      enableSlices="x"
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

// LineChart.propTypes = {};

export default LineChart;
