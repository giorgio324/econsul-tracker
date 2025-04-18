import flag from '../../assets/flagGB.png';

type Props = {
  name: string;
  id: number;
};

const Header = ({ name, id }: Props) => {
  return (
    <header className='pl-[1.438rem] pr-[1.688rem] mt-7'>
      <div className='border-b border-translusive-gray'>
        <div className='flex items-center justify-between'>
          <p className='text-[0.938rem] font-nunito text-light-gray'>{name}</p>
          <img src={flag} alt='Change language' className='w-6' />
        </div>
        <p className='text-[0.938rem] font-nunito text-light-gray py-[0.625rem]'>
          ID: {id}
        </p>
      </div>
    </header>
  );
};

export default Header;
