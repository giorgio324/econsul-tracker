import { Tracker } from '../../../types/tracker';
import CompletedStep from './CompletedStep';
import FinalDecision from './FinalDecision';

type Props = {
  data: Tracker | undefined;
};
const ProgressSteps = ({ data }: Props) => {
  return (
    <>
      {data?.status === 'In Progress' && (
        <div className='mt-[1.875rem]'>
          <h2 className='text-light-brown font-semibold font-nunito text-lg text-center px-4 py-[0.875rem] rounded-tl-[2rem] rounded-tr-[2rem] bg-white'>
            Your Progress steps
          </h2>
          {data?.steps.map((step, index) => (
            <CompletedStep key={step.id} step={step} index={index + 1} />
          ))}
        </div>
      )}
      {data?.status === 'Approved' && (
        <div className='mt-14'>
          <FinalDecision
            title='Approved!'
            description={
              'Congratulations! You have successfully passed the interview and received your visa.'
            }
            additionalInfo={`Visit the location indicated on your appointment confirmation letter; this could be a post office, such as the TNT office in Georgia, or, in other countries, a post accredited with the ${data.country} Consulate. Please review and check your appointment confirmation page.`}
          />
        </div>
      )}
      {data?.status === 'Refused' && (
        <div className='mt-14'>
          <FinalDecision
            title='Refused :('
            description='Unfortunately, your visa application was not approved by the consulate. You can always try again.'
          />
        </div>
      )}
    </>
  );
};

export default ProgressSteps;
