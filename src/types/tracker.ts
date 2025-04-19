export type Tracker = {
  steps: Step[];
  progressPercentage: number;
  totalSteps: number;
  country: string;
  status: 'In Progress' | 'Approved' | 'Refused';
};

export type Step = {
  id: number;
  title: string;
  description: string;
  status: string;
};
