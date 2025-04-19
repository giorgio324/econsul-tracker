import { useFetchTracker } from '../../hooks/async/useFetchTracker';
import LoadingSpinner from '../shared/LoadingSpinner';
import ProgressSteps from './progressSteps/ProgressSteps';
import TrackerInfo from './TrackerInfo';

const Tracker = () => {
  const { data, isLoading, error } = useFetchTracker();
  if (isLoading) {
    return (
      <div className='pl-[1.438rem] pr-[1.688rem] mt-[1.875rem]'>
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return (
      <div className='pl-[1.438rem] pr-[1.688rem] mt-[1.875rem]'>
        <p className='font-nunito font-medium text-red-500'>{error.message}</p>
      </div>
    );
  }
  return (
    <>
      <TrackerInfo data={data} />
      <ProgressSteps data={data} />
    </>
  );
};

export default Tracker;
