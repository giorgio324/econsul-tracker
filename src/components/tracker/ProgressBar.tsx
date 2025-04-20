import post from '../../../src/assets/post.png';
import flagUS from '../../../src/assets/flagUS.png';
import flagGB from '../../../src/assets/flagGB.png';
import flagCA from '../../../src/assets/flagCA.png';

type Props = {
  completedAmount: number;
  percentage: number;
  country: string;
};

const flagMap: Record<string, string> = {
  USA: flagUS,
  UK: flagGB,
  Canada: flagCA,
};

const ProgressBar = ({ completedAmount, percentage, country }: Props) => {
  const flag = flagMap[country] || flagUS;
  return (
    <section className='mt-2'>
      <div className='relative h-[0.688rem] w-full rounded-[2rem] bg-dark-cream pr-2'>
        <div
          className='bg-medium-green h-full rounded-[2rem]'
          style={{ width: `${percentage}%` }}
        />
        {percentage === 100 ? (
          <img
            src={flag}
            alt={`100% Done!`}
            className='w-9 h-9 absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2'
            width={36}
            height={36}
          />
        ) : (
          <img
            src={post}
            alt={`${completedAmount} Steps Done`}
            className='w-9 h-9 absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-2'
            width={36}
            height={36}
          />
        )}
      </div>
      <div className='flex justify-between items-center mr-8 mt-2'>
        <p className='font-nunito font-medium text-xs text-light-gray'>
          {percentage === 100 ? '100% Done!' : `${completedAmount} Steps Done`}
        </p>
        <p className='font-nunito font-medium text-xs text-light-gray'>
          Visa Application Center
        </p>
      </div>
    </section>
  );
};
export default ProgressBar;
