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

export const getAllData = (id: number) => {
  const [user, setUser] = useState<User>();
  const [activity, setActivity] = useState<Activity>();
  const [averageSessions, setAverageSessions] = useState<AverageSessions>();
  const [performance, setPerformance] = useState<Performance>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const dataFetch = async () => {
      fetch(baseUrl + id)
        .then((data) => data.json().then((data) => setUser(data)))
        .catch(() => setError(true));

      setTimeout(() => {
        fetch(baseUrl + id + activityPath)
          .then((data) => data.json().then((data) => setActivity(data)))
          .catch(() => setError(true));
      }, 2000);

      fetch(baseUrl + id + averageSessionsPath).then((data) =>
        data
          .json()
          .then((data) => setAverageSessions(data))
          .catch(() => setError(true))
      );
      fetch(baseUrl + id + performancePath).then((data) =>
        data
          .json()
          .then((data) => setPerformance(data))
          .catch(() => setError(true))
      );
    };

    setTimeout(() => {
      dataFetch();
    }, 1000);
  }, []);

  return { user, activity, averageSessions, performance, error };
};
