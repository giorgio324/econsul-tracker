import { Tracker } from '../../types/tracker';
import ProgressBar from './ProgressBar';
import VisaStatusInfo from './VisaStatusInfo';

type Props = {
  data: Tracker | undefined;
};

const TrackerInfo = ({ data }: Props) => {
  if (!data) return null;
  const completedAmount = data?.steps.reduce((count, step) => {
    return step.status === 'completed' ? count + 1 : count;
  }, 0);

  const uncompletedAmount = data?.totalSteps - completedAmount;

  return (
    <div className='pl-[1.438rem] pr-[1.688rem]'>
      <VisaStatusInfo
        country={data.country}
        uncompletedAmount={uncompletedAmount}
      />
      <ProgressBar
        completedAmount={completedAmount}
        percentage={data.progressPercentage}
      />
    </div>
  );
};

export default TrackerInfo;
