import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import { Performance } from "../../../ts/type/types";
import styles from "./RadarChart.module.css";
import { useRef } from "react";

const RadarChartUI = ({ data }: { data: Performance }) => {
  const performance = data?.data.data.map((d: any) => {
    d.activity = data.data.kind[Object.keys(data.data.kind)[d.kind - 1]];
    return d;
  });

  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  console.log(windowSize);
  const fontSize = windowSize.current[0] > 1550 ? 12 : 10;
  console.log(windowSize.current);

  return (
    <ResponsiveContainer>
      <RadarChart data={performance} margin={{ right: 30, left: 30 }}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="activity"
          tick={{
            fontFamily: "Roboto",
            fontSize: fontSize,
          }}
          stroke="white"
          tickLine={false}
        />
        <PolarRadiusAxis
          angle={performance && 360 / performance.length - 1}
          axisLine={false}
          tick={false}
        />
        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};
export default RadarChartUI;
