export interface User {
  data: {
    id: number;
    keyData: {
      calorieCount: number;
      carbohydrateCount: number;
      lipidCount: number;
      proteinCount: number;
    };
    todayScore?: number;
    score?: number;
    userInfos: {
      age: number;
      firstName: string;
      lastName: string;
    };
  };
}

export interface Activity {
  data: {
    sessions: { calories: number; day: string; kilogram: number }[];
    userId: number;
  };
}

export interface Performance {
  data: {
    data: { kind: number; value: number }[];
    kind: any;
    userId: number;
  };
}
export interface AverageSessions {
  data: { sessions: { day: number; sessionLenght: number }[] };
}

export interface AllData {
  user: User | undefined;
  performance: Performance | undefined;
  activity: Activity | undefined;
  averageSessions: AverageSessions | undefined;
}
