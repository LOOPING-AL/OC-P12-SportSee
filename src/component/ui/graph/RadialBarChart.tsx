import styles from "./RadialBarChart.module.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    uv: 1,
    fill: "#FF0000",
  },
];

const RenderLegend = ({ average }: { average: number | undefined }) => (
  <>
    {average && (
      <div className={styles.render}>
        <p className={styles.render_number}>{average * 100}%</p>
        <p className={styles.render_text}>de votre</p>
        <p className={styles.render_text}>objectif</p>
      </div>
    )}
  </>
);

const RadialBarCharUI = ({ average }: { average: number | undefined }) => (
  <ResponsiveContainer width="100%" height="100%">
    <RadialBarChart
      innerRadius="100%"
      outerRadius="100%"
      barSize={10}
      data={data}
      startAngle={90}
      endAngle={average ? average * 360 + 90 : 0}
    >
      <RadialBar dataKey="uv" cornerRadius={5} />
      <Legend
        iconSize={0}
        verticalAlign="middle"
        content={<RenderLegend average={average} />}
      />
    </RadialBarChart>
  </ResponsiveContainer>
);

export default RadialBarCharUI;
