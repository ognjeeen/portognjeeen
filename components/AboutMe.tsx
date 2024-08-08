const AboutMe = () => {
  return (
    <section className="p-6 w-full md:w-2/5">
      <p className="font-bold text-2xl text-primaryColor mb-4">AboutMe</p>
      <div>
        <div className="flex flex-col gap-2 text-textColor text-lg">
          <p>
            I was introduced to web development from a young age, started with
            building simple HTML web pages and made my progress all the way to
            newest web development technologies.
          </p>
          <p>
            After successfully completing my master's degree, I actively
            dedicated myself to learning new technologies and improving my
            knowledge. One of my favorite projects is{' '}
            <span className="text-primaryColor font-bold">Movie Twist</span>,
            which at one point counted over a thousand users who tried the
            application on a monthly basis.
          </p>
          <p>
            Also I am a big movie lover and book lover. Formula 1 and MotoGP
            fan. In short, just happy to be here and do what I love!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
