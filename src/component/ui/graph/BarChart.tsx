import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import styles from "./BarChart.module.css";
import { OvalBlack, OvalRed } from "../../../assets/index";
import { Activity } from "../../../ts/type/types";

const renderLegend = () => (
  <div className={styles.chart_legend}>
    <p className={styles.chart_legend_title}>Activité quotidienne</p>
    <ul className={styles.chart_legent_alllist}>
      <li className={styles.chart_legend_list}>
        <img src={OvalBlack} alt="OvalBlack" />
        <p className={styles.chart_legend_item}>Poids (kg)</p>
      </li>
      <li className={styles.chart_legend_list}>
        <img src={OvalRed} alt="OvalRed" />
        <p className={styles.chart_legend_item}>Calories brûlées (kCal)</p>
      </li>
    </ul>
  </div>
);

const CustomTooltip = ({ active, payload, label }: any): JSX.Element | null => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.toolTip}>
        <p className={styles.toolTip_Value}>{`${payload[0].value}kg`}</p>
        <p className={styles.toolTip_Value}>{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

const BarChartUI = ({ data }: { data: Activity }) => {
  const sessions = data?.data.sessions.map((session, index) => {
    session.day = String(index + 1);
    return session;
  });

  return (
    <ResponsiveContainer>
      <BarChart data={sessions}>
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <Legend verticalAlign="top" content={renderLegend} />
        <XAxis dataKey="day" tickLine={false} />
        <YAxis
          yAxisId="kilo"
          dataKey="kilogram"
          axisLine={false}
          tickLine={false}
          orientation="right"
          domain={["dataMin - 2", "dataMax + 1"]}
        />
        <YAxis
          yAxisId="cal"
          dataKey="calories"
          hide
          orientation="left"
          domain={["dataMin - 100", "dataMax + 50"]}
        />
        <Tooltip />
        <Bar
          yAxisId="kilo"
          dataKey="kilogram"
          fill="#282D30"
          barSize={7}
          radius={[3.5, 3.5, 0, 0]}
        />
        <Bar
          yAxisId="cal"
          dataKey="calories"
          fill="#E60000"
          barSize={7}
          radius={[3.5, 3.5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartUI;
