import { useFetchTracker } from '../../hooks/async/useFetchTracker';
import Container from '../shared/Container';
import LoadingSpinner from '../shared/LoadingSpinner';
import ProgressSteps from './progressSteps/ProgressSteps';
import TrackerInfo from './TrackerInfo';

const Tracker = () => {
  const { data, isLoading, error } = useFetchTracker();
  if (isLoading) {
    return (
      <Container>
        <div className='mt-[1.875rem]'>
          <LoadingSpinner />
        </div>
      </Container>
    );
  }
  if (error) {
    return (
      <Container>
        <div className=' mt-[1.875rem]'>
          <p className='font-nunito font-medium text-red-500'>
            {error.message}
          </p>
        </div>
      </Container>
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
