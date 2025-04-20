type Props = {
  children: React.ReactNode;
};
const Container = ({ children }: Props) => {
  return (
    <div className='mx-auto max-w-[1024px] px-[1.438rem] md:px-8'>
      {children}
    </div>
  );
};

export default Container;
