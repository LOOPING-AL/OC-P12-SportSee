import { AllData } from "../../../ts/type/types";
import BarChartUI from "../../ui/graph/BarChart";
import LineChartUI from "../../ui/graph/LineChart";
import RadarChartUI from "../../ui/graph/RadarChart";
import RadialBarCharUI from "../../ui/graph/RadialBarChart";
import styles from "./Home.module.css";

const HomeMainInfoGraph = ({ data }: { data: AllData }) => (
  <div className={styles.graph}>
    <div className={styles.firstGraph}>
      <BarChartUI data={data.activity} />
    </div>
    <div className={styles.otherGraph}>
      <div className={styles.lineChart}>
        <LineChartUI data={data.averageSessions} />
      </div>
      <div className={styles.radarChart}>
        <RadarChartUI data={data.performance} />
      </div>
      <div className={styles.radialBarChart}>
        <RadialBarCharUI average={data.user?.data.todayScore} />
      </div>
    </div>
  </div>
);

export default HomeMainInfoGraph;
