import completedIcon from '../../../assets/completedIcon.svg';
import Container from '../../shared/Container';

type Props = {
  title: string;
  description: string;
  additionalInfo?: string;
};

const FinalDecision = ({ description, title, additionalInfo }: Props) => {
  return (
    <Container>
      <div className='flex gap-10'>
        <div className='flex flex-col items-center gap-5 mb-1 w-[3.125rem]'>
          <img src={completedIcon} alt={`Successfully passed`} />
        </div>
        <div className='flex-1 font-lato'>
          <h3 className={'font-bold'}>{title}</h3>
          <div className='flex flex-col gap-2'>
            <p>{description}</p>
            <p>{additionalInfo}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FinalDecision;
