import { useState, useEffect } from "react";
import {
  Activity,
  AverageSessions,
  Performance,
  User,
} from "../../ts/type/types";

const baseUrl = "http://localhost:3000/user/";
const activityPath = "/activity";
const averageSessionsPath = "/average-sessions";
const performancePath = "/performance";

export const useAllData = (id: number) => {
  const [user, setUser] = useState<User>();
  const [activity, setActivity] = useState<Activity>();
  const [averageSessions, setAverageSessions] = useState<AverageSessions>();
  const [performance, setPerformance] = useState<Performance>();

  useEffect(() => {
    const dataFetch = async () => {
      fetch(baseUrl + id).then((data) =>
        data.json().then((data) => setUser(data))
      );
      fetch(baseUrl + id + activityPath).then((data) =>
        data.json().then((data) => setActivity(data))
      );
      fetch(baseUrl + id + averageSessionsPath).then((data) =>
        data.json().then((data) => setAverageSessions(data))
      );
      fetch(baseUrl + id + performancePath).then((data) =>
        data.json().then((data) => setPerformance(data))
      );
    };
    dataFetch();
  }, []);

  return { user, activity, averageSessions, performance };
};
