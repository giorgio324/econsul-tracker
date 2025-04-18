export type Tracker = {
  steps: Steps;
  progressPercentage: number;
  totalSteps: number;
  country: string;
  status: 'In Progress' | 'Approved' | 'Refused';
};

type Steps = {
  id: number;
  title: string;
  description: string;
  status: string;
}[];
