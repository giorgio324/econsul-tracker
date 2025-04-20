import { Tracker } from '../../types/tracker';
import Container from '../shared/Container';
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
    <Container>
      <VisaStatusInfo
        country={data.country}
        uncompletedAmount={uncompletedAmount}
        percentage={data.progressPercentage}
        status={data.status}
      />
      <ProgressBar
        country={data.country}
        completedAmount={completedAmount}
        percentage={data.progressPercentage}
      />
    </Container>
  );
};

export default TrackerInfo;
