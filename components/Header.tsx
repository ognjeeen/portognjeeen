import Socials from './Socials';

const headerInfo = [
  {
    imageSrc: 'https://placehold.co/300x300',
    name: 'Ognjen Marinković',
    position: 'Front-End Web Developer',
  },
];

const Header = () => {
  return (
    <section className="flex justify-center mb-28 md:mb-0 md:fixed">
      {headerInfo.map((me, index) => (
        <div key={index} className="space-y-10 relative">
          <div>
            <img
              src={me.imageSrc}
              alt="profile image"
              className="rounded-3xl "
            />
          </div>
          <div className="mt-4 justify-center">
            <p className="text-3xl md:text-3xl text-primaryColor font-semibold tracking-wide">
              {me.name}
              <br />
              <span className="text-xl font-normal">{me.position}</span>
            </p>
          </div>
          <Socials />
        </div>
      ))}
    </section>
  );
};

export default Header;
