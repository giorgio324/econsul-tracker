import flagUS from '../../../src/assets/flagUS.png';
import flagGB from '../../../src/assets/flagGB.png';
import flagCA from '../../../src/assets/flagCA.png';

type Props = {
  country: string;
  uncompletedAmount: number;
};

const flagMap: Record<string, string> = {
  USA: flagUS,
  UK: flagGB,
  Canada: flagCA,
};

const VisaStatusInfo = ({ country, uncompletedAmount }: Props) => {
  const flag = flagMap[country] || flagUS;

  return (
    <section className='flex items-center gap-6'>
      <img src={flag} alt={`${country} flag`} />
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
    </section>
  );
};

export default VisaStatusInfo;
