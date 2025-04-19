const Footer = () => {
  return (
    <footer className='mt-[4.375rem] py-[1.125rem]'>
      <div className='flex gap-5 font-open-sans text-xs justify-center items-center text-terms'>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Terms & Conditions</a>
      </div>
      <div className='flex flex-col text-copyright font-open-sans items-center justify-center mt-5'>
        <p>
          <span>&copy;</span> eConsul
        </p>
        2024
      </div>
    </footer>
  );
};

export default Footer;
