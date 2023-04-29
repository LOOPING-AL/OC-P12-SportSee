import { AllData } from "../../../ts/type/types";
import {
  BarChart,
  LineChart,
  RadarChart,
  RadialBarChart,
  Loader,
} from "../../index";
import styles from "./Home.module.css";

const HomeMainInfoGraph = ({ data }: { data: AllData }) => (
  <div className={styles.graph}>
    <div className={styles.firstGraph}>
      {data.activity ? <BarChart data={data.activity} /> : <Loader />}
    </div>
    <div className={styles.otherGraph}>
      <div className={styles.lineChart}>
        {data.averageSessions ? (
          <LineChart data={data.averageSessions} />
        ) : (
          <Loader />
        )}
      </div>
      <div className={styles.radarChart}>
        {data.performance ? <RadarChart data={data.performance} /> : <Loader />}
      </div>
      <div className={styles.radialBarChart}>
        {data.user?.data.todayScore || data.user?.data.score ? (
          <RadialBarChart
            average={
              data.user?.data.todayScore
                ? data.user?.data.todayScore
                : data.user?.data.score
            }
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  </div>
);

export default HomeMainInfoGraph;
