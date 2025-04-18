import { useQuery } from '@tanstack/react-query';
import { FETCH_USER_TRACKER_INFO_KEY } from '../../config/queryKeys';
import { fetchTracker } from '../../api/tracker/fetchTracker';

export const useFetchTracker = () => {
  return useQuery({
    queryKey: [FETCH_USER_TRACKER_INFO_KEY],
    queryFn: fetchTracker,
    gcTime: 0,
    refetchOnWindowFocus: false,
  });
};
