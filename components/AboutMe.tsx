export default function AboutMe() {
  return (
    <section aria-labelledby="about-heading">
      <h2 id="about-heading" className="mb-4 text-2xl font-bold text-primaryColor">
        About me
      </h2>
      <div className="space-y-4 text-base text-textColor">
        <p>
          Hi, I&apos;m Ognjen! I&apos;m a frontend engineer based in Novi Sad,
          Serbia, with almost two years of professional development experience,
          mostly working with JavaScript, TypeScript, React, and Next.js.
        </p>
        <p>
          Ever since I got into programming, my journey has been centered
          around JavaScript, and later TypeScript. In the beginning, my first
          love was pure HTML, so I think you can only imagine what I felt when
          I saw and tried JavaScript for the first time. A pure levitating
          moment in my life! 😆 Even though it had, and still has, its issues
          and flaws, hey, I can wink with one eye!
        </p>
        <p>
          My love for JavaScript and TypeScript has stayed the biggest of them
          all. I use TypeScript absolutely every day, both professionally and
          in my own projects, and I don&apos;t see myself stopping anytime
          soon! 😄
        </p>
        <p>
          After finishing my master&apos;s degree in information technology,
          I decided to focus fully on frontend development. Today, at THRIVEA,
          I build and maintain frontend features with React, TypeScript, and
          Material UI, working with tools like Redux Toolkit, Redux Saga,
          TanStack, and Zod. What I especially enjoy is building polished,
          interactive products where the UI, performance, and overall user
          experience really matter. That&apos;s the kind of work I want to
          keep growing into!
        </p>
        <p>
          At the same time, I&apos;ve always been curious about what&apos;s
          happening outside of the JavaScript ecosystem. I&apos;ve had the
          chance to explore Rust, C#, .NET, and a few other technologies while
          building different things. More recently, I&apos;ve been
          experimenting a lot with AI tooling (I&apos;m a super big fan of AI!),
          including building a project conductor for AI subagent delegation
          and tools for searching and breaking down codebases into smaller
          useful pieces to give subagents better context.
        </p>
        <p>
          I&apos;ve also started contributing more to open source and
          maintaining my own projects. One of them is{' '}
          <span className="font-bold text-primaryColor">Codex Usage Widget</span>,
          a small open-source Windows widget I built with C#, .NET, and WPF to
          keep track of Codex subscription usage on the desktop and taskbar.
          What started as something I made for myself ended up reaching a few
          hundred downloads and brought me into the other side of development
          as well, receiving feedback, handling issues, reviewing
          contributions, and seeing other people actually use something I
          built. That part has been especially fun!
        </p>
        <p>
          Another project close to my heart is{' '}
          <span className="font-bold text-primaryColor">MovieTwist</span>, a
          Next.js app that helps you decide what to watch from your own
          selection of movies. At one point, more than 1,000 people tried it
          in a month! I&apos;m a big movie lover and book lover, and a Formula
          1 and MotoGP fan. In short, just happy to be here and do what I
          love! 😊
        </p>
        <p>
          You can read my{' '}
          <a
            href="/resume.pdf"
            className="font-bold text-primaryColor underline underline-offset-4"
          >
            resume (PDF)
          </a>
          .
        </p>
      </div>
    </section>
  );
}
