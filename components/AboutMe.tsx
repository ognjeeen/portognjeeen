import ScriptMark from './ScriptMark';

const chapters = [
  { id: 'first-spark', title: 'The first spark' },
  { id: 'day-job', title: 'The day job' },
  { id: 'beyond-browser', title: 'Beyond the browser' },
  { id: 'off-the-clock', title: 'Off the clock' },
];

export default function AboutMe() {
  return (
    <section className="cinema-about" id="about" aria-labelledby="about-title">
      <div className="about-light" aria-hidden="true" />
      <div className="wrap about-layout">
        <header className="about-index">
          <h2 className="cinema-heading annotated-title" id="about-title">
            <span className="about-title-line"><span>Behind</span></span>
            <span className="about-title-line"><span>the screen.</span></span>
            <svg className="about-title-ink script-ink" viewBox="0 0 320 28" preserveAspectRatio="none" fill="none" aria-hidden="true">
              <path pathLength="100" d="M3 13C78 3 177 15 313 7" />
              <path className="script-ink-retrace" pathLength="100" d="M18 22C106 14 192 21 298 16" />
            </svg>
          </h2>
          <p className="about-title-note" aria-hidden="true"><span className="script-note-writing">keep this personal.</span></p>
          <p className="about-intro">A few pages about the person<br />writing the code.</p>
          <nav className="script-nav" aria-label="Biography chapters">
            <span className="script-reading-rail" aria-hidden="true"><span className="script-reading-progress" /></span>
            <ol>
              {chapters.map((chapter, index) => (
                <li key={chapter.id}>
                  <a href={`#${chapter.id}`} data-script-link={chapter.id}>
                    <span className="script-chapter-number" aria-hidden="true">0{index + 1}</span>
                    {chapter.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <a className="text-link" href="/resume.pdf">Read my resume <span className="resume-format">PDF</span></a>
        </header>

        <article className="script-paper" aria-label="Ognjen's story">
          <header className="script-title-page">
            <div className="script-running-head"><span>A developer&apos;s story</span><span>Novi Sad, Serbia</span></div>
            <p className="script-author">Ognjen Marinković</p>
            <p className="script-byline">In his own words</p>
            <p className="script-prologue">
              Hi, I&apos;m Ognjen! I&apos;m a frontend engineer based in Novi Sad,
              Serbia, with almost two years of professional development experience,
              mostly working with JavaScript, TypeScript, React, and Next.js.
            </p>
          </header>

          <div className="script-scenes">
            <section className="script-chapter" id="first-spark" aria-labelledby="first-spark-title">
              <header className="script-scene-heading">
                <span aria-hidden="true">01</span><h3 id="first-spark-title">The first spark</h3>
              </header>
              <div className="script-body">
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
              <aside className="script-margin-note" aria-hidden="true"><span className="script-note-writing">My first love<br />was pure HTML.</span></aside>
            </section>

            <section className="script-chapter" id="day-job" aria-labelledby="day-job-title">
              <header className="script-scene-heading">
                <span aria-hidden="true">02</span><h3 id="day-job-title">The day job</h3>
              </header>
              <div className="script-body">
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

            <section className="script-chapter" id="beyond-browser" aria-labelledby="beyond-browser-title">
              <header className="script-scene-heading">
                <span aria-hidden="true">03</span><h3 id="beyond-browser-title">Beyond the browser</h3>
              </header>
              <div className="script-body">
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
                <p className="script-revisited">
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
                  <svg className="script-bracket script-ink" viewBox="0 0 20 100" preserveAspectRatio="none" fill="none" aria-hidden="true">
                    <path pathLength="100" d="M16 2L5 3Q8 42 4 62L6 97 17 98" />
                  </svg>
                </p>
              </div>
              <aside className="script-margin-note" aria-hidden="true"><span className="script-note-writing">Something I made<br />for myself.</span><span className="script-note-afterthought script-note-writing">People use this!</span></aside>
            </section>

            <section className="script-chapter" id="off-the-clock" aria-labelledby="off-the-clock-title">
              <header className="script-scene-heading">
                <span aria-hidden="true">04</span><h3 id="off-the-clock-title">Off the clock</h3>
              </header>
              <div className="script-body">
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
          </div>
          <footer className="script-colophon">
            <p>To be continued.</p>
            <a className="text-link" href="/resume.pdf">Read my resume <span className="resume-format">PDF</span></a>
          </footer>
        </article>
      </div>
    </section>
  );
}
