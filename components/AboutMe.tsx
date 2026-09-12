export default function AboutMe() {
  return (
    <section className="cinema-about" id="about" aria-labelledby="about-title">
      <div className="wrap">
        <div>
          <h2 className="cinema-heading" id="about-title">Behind<br />the screen.</h2>
          <p className="cinema-signature">
            Ognjen Marinković
            <small>Frontend engineer / Novi Sad, Serbia</small>
          </p>
        </div>
        <div className="bio-copy">
          <p>
            It started with HTML. JavaScript came next, and TypeScript became part of
            my everyday life. Somewhere along the way, building things became the
            thing I wanted to keep doing.
          </p>
          <p>
            After my master&apos;s in information technology, I focused on frontend
            development. At THRIVEA, I build and maintain interfaces with React,
            TypeScript, and Material UI, paying attention to behavior, performance,
            and the experience around them.
          </p>
          <p>
            I also explore Rust, C#, .NET, and AI tooling, including tools for
            subagent delegation and codebase search. Maintaining Codex Usage Widget
            has introduced me to another part of the work: feedback, issues,
            contributions, and people actually using what I made.
          </p>
          <p>
            Movies and books are a constant. So are Formula 1 and MotoGP. MovieTwist
            is what happens when a personal interest turns into a project.
          </p>
          <a className="text-link" href="/resume.pdf">Read my resume</a>
        </div>
      </div>
    </section>
  );
}
