const headerInfo = [
  {
    imageSrc: 'https://placehold.co/200x200',
    name: 'Ognjen Marinković',
    position: 'Front-End Web Developer',
  },
];

const Header = () => {
  return (
    <section className="flex justify-center mb-10 md:mb-0 md:fixed">
      {headerInfo.map((me, index) => (
        <div key={index}>
          <div>
            <img
              src={me.imageSrc}
              alt="profile image"
              className="rounded-3xl justify-center m-auto"
            />
          </div>
          <div className="mt-4 justify-center text-center">
            <p className="text-xl md:text-3xl text-primaryColor font-semibold tracking-wide">
              {me.name}
              <br />
              <span className="text-xl font-normal">{me.position}</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Header;
