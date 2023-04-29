import { AllData } from "../../../ts/type/types";
import { BarChart, LineChart, RadarChart, RadialBarChart } from "../../index";
import styles from "./Home.module.css";

const HomeMainInfoGraph = ({ data }: { data: AllData }) => (
  <div className={styles.graph}>
    <div className={styles.firstGraph}>
      <BarChart data={data.activity} />
    </div>
    <div className={styles.otherGraph}>
      <div className={styles.lineChart}>
        <LineChart data={data.averageSessions} />
      </div>
      <div className={styles.radarChart}>
        <RadarChart data={data.performance} />
      </div>
      <div className={styles.radialBarChart}>
        <RadialBarChart
          average={
            data.user?.data.todayScore
              ? data.user?.data.todayScore
              : data.user?.data.score
          }
        />
      </div>
    </div>
  </div>
);

export default HomeMainInfoGraph;
