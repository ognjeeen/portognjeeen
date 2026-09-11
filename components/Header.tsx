import Socials from './Socials';

export default function Header() {
  return (
    <header className="mx-auto flex max-w-full flex-col gap-6 self-start md:sticky md:top-20 md:mx-0">
      <div className="text-primaryColor">
        <h1 className="text-3xl font-semibold tracking-wide">
          Ognjen Marinković
        </h1>
        <p className="mt-1 text-xl">Front-End Web Developer</p>
      </div>
      <Socials />
    </header>
  );
}
