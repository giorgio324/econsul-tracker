import completedIcon from '../../../assets/completedIcon.svg';
import { Step } from '../../../types/tracker';

type Props = {
  step: Step;
  additionalInfo?: string;
  index: number;
};

const CompletedStep = ({ step, index, additionalInfo }: Props) => {
  const bgColor = step.status === 'completed' && 'bg-light-white';
  const activeTitle =
    step.status === 'active' ? 'font-bold text-black' : 'text-medium-gray';
  const activeDescription =
    step.status === 'active' ? 'opacity-100' : 'text-black opacity-20';

  return (
    <div className={`flex gap-10 px-9 py-8 ${bgColor}`}>
      {step.status === 'completed' && (
        <div className='flex flex-col items-center gap-5 mb-1 w-[3.125rem]'>
          <img src={completedIcon} alt={`${step.title} Completed`} />
          <div className='flex-1 w-[2px] h-full bg-black opacity-5'></div>
        </div>
      )}
      {step.status === 'active' && (
        <div className='flex flex-col items-center gap-5 mb-1'>
          <p className='bg-current-step w-[3.125rem] h-[3.125rem] rounded-full flex justify-center items-center font-lato text-step-black'>
            {index}
          </p>
          <div className='flex-1 w-[2px] h-full bg-black opacity-5'></div>
        </div>
      )}
      {step.status === 'pending' && (
        <div className='flex flex-col items-center gap-5 mb-1'>
          <p className='bg-uncompleted-step w-[3.125rem] h-[3.125rem] rounded-full flex justify-center items-center font-lato text-step-black'>
            {index}
          </p>
          <div className='flex-1 w-[2px] h-full bg-black opacity-5'></div>
        </div>
      )}
      <div className='flex-1 font-lato'>
        <h3 className={activeTitle}>{step.title}</h3>
        <div className='flex flex-col gap-2'>
          <p className={activeDescription}>{step.description}</p>
          <p className={activeDescription}>{additionalInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedStep;
