import FinalDecision from './progressSteps/FinalDecision';

const RefusedStats = () => {
  return (
    <div className='mt-14'>
      <FinalDecision
        title='Refused :('
        description='Unfortunately, your visa application was not approved by the consulate. You can always try again.'
      />
    </div>
  );
};

export default RefusedStats;
