interface IPriorityData {
  name: string;
  image: string;
}

export interface IPriorityMap {
  LOW: IPriorityData;
  MEDIUM: IPriorityData;
  HIGH: IPriorityData;
}
