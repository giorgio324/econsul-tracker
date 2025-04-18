import axios from 'axios';
import { Tracker } from '../../types/tracker';

export const fetchTracker = async (): Promise<Tracker> => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_API_URL
    }/default/Tracking_Tool_Random_Steps_Generator`
  );
  return response.data;
};
