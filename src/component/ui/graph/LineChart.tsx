import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import styles from "./LineChart.module.css";
import { AverageSessions } from "../../../ts/type/types";

const renderLegend = () => (
  <p className={styles.legend}>Durée moyenne des sessions</p>
);

const CustomTooltip = ({ active, payload, label }: any): JSX.Element | null => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.toolTip}>
        <p className={styles.toolTip_Value}>{`${payload[0].value}min`}</p>
      </div>
    );
  }

  return null;
};

const LineChartUI = ({ data }: { data: AverageSessions | undefined }) => {
  const weekday = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  const averageSession = data?.data.sessions.map((session: any) => {
    session.dayFirstLetter = weekday[session.day - 1][0];
    return session;
  });

  return (
    <ResponsiveContainer>
      <LineChart
        data={averageSession}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid vertical={false} horizontal={false} fill="red" />
        <XAxis
          dataKey="dayFirstLetter"
          axisLine={false}
          tickLine={false}
          stroke="#FFFFFF"
        />
        <YAxis hide domain={["dataMin - 20", "dataMax + 1"]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="top" content={renderLegend} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="#D8D8D8"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartUI;
