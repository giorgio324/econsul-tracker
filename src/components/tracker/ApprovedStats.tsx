import { useWindowSize } from '@react-hook/window-size';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import FinalDecision from './progressSteps/FinalDecision';

type Props = { status: string; country: string };

const ApprovedStats = ({ status, country }: Props) => {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (status === 'Approved') {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <div className='mt-14'>
      {showConfetti && (
        <div
          className='fixed top-0 left-0 w-screen h-screen z-50 pointer-events-none'
          style={{ overflow: 'hidden' }}
        >
          <Confetti
            width={width}
            height={height}
            recycle={false}
            numberOfPieces={100}
            tweenDuration={2000}
            gravity={0.3}
          />
        </div>
      )}

      <FinalDecision
        title='Approved!'
        description={
          'Congratulations! You have successfully passed the interview and received your visa.'
        }
        additionalInfo={`Visit the location indicated on your appointment confirmation letter; this could be a post office, such as the TNT office in Georgia, or, in other countries, a post accredited with the ${country} Consulate. Please review and check your appointment confirmation page.`}
      />
    </div>
  );
};

export default ApprovedStats;
