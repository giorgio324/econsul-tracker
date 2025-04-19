import flagUS from '../../../src/assets/flagUS.png';
import flagGB from '../../../src/assets/flagGB.png';
import flagCA from '../../../src/assets/flagCA.png';
import mail from '../../../src/assets/mail.png';

type Props = {
  country: string;
  uncompletedAmount: number;
  percentage: number;
  status: 'In Progress' | 'Approved' | 'Refused';
};

const flagMap: Record<string, string> = {
  USA: flagUS,
  UK: flagGB,
  Canada: flagCA,
};

const VisaStatusInfo = ({
  country,
  uncompletedAmount,
  percentage,
  status,
}: Props) => {
  const flag = flagMap[country] || flagUS;

  return (
    <section className='flex items-center gap-6 min-h-[11.25rem]'>
      {percentage === 100 ? (
        <img src={mail} alt={`results recieved`} className='w-28' />
      ) : (
        <img src={flag} alt={`${country} flag`} />
      )}
      {status === 'In Progress' && (
        <div className='flex flex-col gap-2 mt-8'>
          <h1 className='font-nunito font-semibold text-2xl text-light-brown'>
            You’re almost there!
          </h1>
          <p className='font-nunito font-medium text-[0.938rem] text-light-gray flex flex-col'>
            Steps left to get {country} Tourist Visa ⚔️
            <span className='font-nunito font-semibold text-2xl text-light-brown'>
              {uncompletedAmount}
            </span>
          </p>
        </div>
      )}
      {status !== 'In Progress' && (
        <div className='flex flex-col gap-2 mt-8'>
          <p className='font-nunito font-medium text-[0.938rem] text-light-gray flex flex-col'>
            {status === 'Approved' && `Congrats!`}
            {status === 'Refused' && `Status:`}
          </p>
          <h1 className='font-nunito font-semibold text-2xl text-light-brown'>
            {status === 'Approved' && `You did it! ${country} Visa is yours!`}
            {status === 'Refused' && `Your ${country} Visa has been Refused`}
          </h1>
        </div>
      )}
    </section>
  );
};

export default VisaStatusInfo;
