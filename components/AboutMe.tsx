import Letterboard from './Letterboard';
import ScriptMark from './ScriptMark';

const scenes = [
  { id: 'first-spark', title: 'The first spark' },
  { id: 'day-job', title: 'The day job' },
  { id: 'beyond-browser', title: 'Beyond the browser' },
  { id: 'off-the-clock', title: 'Off the clock' },
];

function SceneHeading({ number, id }: { number: number; id: string }) {
  const { title } = scenes[number - 1];
  return (
    <h3 className="slug" id={`${id}-title`}>
      <span aria-hidden="true">{number}</span>
      <span data-type>{title}</span>
      <span aria-hidden="true">{number}</span>
    </h3>
  );
}

export default function AboutMe() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="wrap about-layout">
        <header className="about-index">
          <Letterboard className="sign" id="about-title" lines={['Behind the screen.']} />
          <p className="about-note handwritten" aria-hidden="true">keep this personal.</p>
          <p className="about-intro">A few pages about the person<br />writing the code.</p>
          <nav aria-label="Biography scenes">
            <ol className="scene-index">
              <li className="scene-progress" aria-hidden="true" />
              {scenes.map((scene, index) => (
                <li key={scene.id}>
                  <a href={`#${scene.id}`} data-scene-link>
                    <span aria-hidden="true">0{index + 1}</span>{scene.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <a className="text-link" href="/resume.pdf">Read my resume (PDF)</a>
        </header>

        <article className="script-page" aria-label="Ognjen's story">
          <span className="page-number" aria-hidden="true">1.</span>
          <header className="title-page">
            <p className="script-title">A developer&apos;s story</p>
            <p>Ognjen Marinković</p>
            <p>In his own words · Novi Sad, Serbia</p>
          </header>
          <p>
            Hi, I&apos;m Ognjen! I&apos;m a frontend engineer based in Novi Sad,
            Serbia, with almost two years of professional development experience,
            mostly working with JavaScript, TypeScript, React, and Next.js.
          </p>

          <section className="scene" id="first-spark" aria-labelledby="first-spark-title" data-scene>
            <SceneHeading number={1} id="first-spark" />
            <div className="scene-body">
              <p>
                Ever since I got into programming, my journey has been centered
                around JavaScript, and later TypeScript. In the beginning, my first
                love was <ScriptMark>pure HTML</ScriptMark>, so I think you can only imagine what I felt when
                I saw and tried JavaScript for the first time. A pure levitating
                moment in my life! 😆 Even though it had, and still has, its issues
                and flaws, hey, I can wink with one eye!
              </p>
              <p>
                My love for JavaScript and TypeScript has stayed the biggest of them
                all. I use <ScriptMark kind="circle">TypeScript</ScriptMark> absolutely every day, both professionally and
                in my own projects, and I don&apos;t see myself stopping anytime
                soon! 😄
              </p>
            </div>
            <aside className="margin-note handwritten" aria-hidden="true">My first love<br />was pure HTML.</aside>
          </section>

          <section className="scene" id="day-job" aria-labelledby="day-job-title" data-scene>
            <SceneHeading number={2} id="day-job" />
            <div className="scene-body">
              <p>
                After finishing my master&apos;s degree in information technology,
                I decided to focus fully on frontend development. Today, at THRIVEA,
                I build and maintain frontend features with React, TypeScript, and
                Material UI, working with tools like Redux Toolkit, Redux Saga,
                TanStack, and Zod. What I especially enjoy is building <strong>polished,
                interactive products</strong> where the <ScriptMark kind="highlight">UI, performance,</ScriptMark> and overall user
                experience really matter. That&apos;s the kind of work I want to
                keep growing into!
              </p>
            </div>
          </section>

          <section className="scene" id="beyond-browser" aria-labelledby="beyond-browser-title" data-scene>
            <SceneHeading number={3} id="beyond-browser" />
            <div className="scene-body">
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
                <a href="https://codex-usage-widget.ognjen-marinkovic.chatgpt.site/" target="_blank" rel="noopener noreferrer">Codex Usage Widget</a>,
                a small open-source Windows widget I built with C#, .NET, and WPF to
                keep track of Codex subscription usage on the desktop and taskbar.
                What started as something I made for myself ended up reaching a few
                hundred downloads and brought me into the other side of development
                as well, receiving feedback, handling issues, reviewing
                contributions, and seeing other people actually use something I
                built. That part has been especially fun!
              </p>
            </div>
            <aside className="margin-note handwritten" aria-hidden="true">
              Something I made<br />for myself.
              <span className="margin-afterthought">People use this!</span>
            </aside>
          </section>

          <section className="scene" id="off-the-clock" aria-labelledby="off-the-clock-title" data-scene>
            <SceneHeading number={4} id="off-the-clock" />
            <div className="scene-body">
              <p>
                Another project close to my heart is{' '}
                <a href="https://movie-twist.com/" target="_blank" rel="noopener noreferrer">MovieTwist</a>, a
                Next.js app that helps you decide what to watch from your own
                selection of movies. At one point, more than 1,000 people tried it
                in a month! I&apos;m a big movie lover and book lover, and a Formula
                1 and MotoGP fan. In short, just happy to be here and <ScriptMark>do what I
                love!</ScriptMark> 😊
              </p>
            </div>
          </section>

          <footer className="script-end">
            <span>To be continued.</span>
            <a className="text-link" href="/resume.pdf">Read my resume (PDF)</a>
          </footer>
        </article>
      </div>
    </section>
  );
}
