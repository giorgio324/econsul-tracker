import post from '../../../src/assets/post.png';

type Props = {
  completedAmount: number;
  percentage: number;
};

const ProgressBar = ({ completedAmount, percentage }: Props) => (
  <section className='mt-2'>
    <div className='relative h-[0.688rem] w-full rounded-[2rem] bg-dark-cream pr-2'>
      <div
        className='bg-medium-green h-full rounded-[2rem]'
        style={{ width: `${percentage}%` }}
      />
      <img
        src={post}
        alt={`${completedAmount} Steps Done`}
        className='w-9 h-9 absolute right-0 top-0 z-10 -translate-y-1/2 translate-x-2'
      />
    </div>
    <div className='flex justify-between items-center mr-8 mt-2'>
      <p className='font-nunito font-medium text-xs text-light-gray'>
        {completedAmount} Steps Done
      </p>
      <p className='font-nunito font-medium text-xs text-light-gray'>
        Visa Application Center
      </p>
    </div>
  </section>
);
export default ProgressBar;
