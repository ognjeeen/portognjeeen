const headerInfo = [
  {
    imageSrc: 'https://placehold.co/200x200',
    name: 'Ognjen Marinković',
    position: 'Front-End Web Developer',
  },
];

const Header = () => {
  return (
    <section className="w-full flex mt-10 ">
      {headerInfo.map((me, index) => (
        <div className="m-auto" key={index}>
          <div className="justify-center flex">
            <img src={me.imageSrc} alt="" className="rounded-3xl" />
          </div>
          <div className="text-center mt-4">
            <p className="text-3xl text-primaryColor font-semibold tracking-wide">
              {me.name}
              <br />
              <span className="font-normal">{me.position}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Header;
