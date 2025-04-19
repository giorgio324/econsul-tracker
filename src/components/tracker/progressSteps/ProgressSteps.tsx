import { Tracker } from '../../../types/tracker';
import CompletedStep from './CompletedStep';

type Props = {
  data: Tracker | undefined;
};
const ProgressSteps = ({ data }: Props) => {
  return (
    <div className='mt-[1.875rem]'>
      <h2 className='text-light-brown font-semibold font-nunito text-lg text-center px-4 py-[0.875rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-white'>
        Your Progress steps
      </h2>
      {data?.steps.map((step, index) => (
        <CompletedStep key={step.id} step={step} index={index + 1} />
      ))}
    </div>
  );
};

export default ProgressSteps;
