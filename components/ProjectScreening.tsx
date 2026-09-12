'use client';

import { useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

type ScreeningProject = {
  id: string;
  name: string;
  subtitle: string;
  content: ReactNode;
};

export default function ProjectScreening({ projects }: { projects: ScreeningProject[] }) {
  const [selected, setSelected] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        next = (index + 1) % projects.length;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        next = (index - 1 + projects.length) % projects.length;
        break;
      case 'Home':
        next = 0;
        break;
      case 'End':
        next = projects.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setSelected(next);
    buttons.current[next]?.focus();
  }

  return (
    <section className="screening wrap" id="work" aria-label="Selected projects">
      <div className="screening-menu">
        <h2>Now showing</h2>
        <div role="tablist" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              className="project-tab"
              type="button"
              id={`tab-${project.id}`}
              key={project.id}
              role="tab"
              aria-selected={selected === index}
              aria-controls={`panel-${project.id}`}
              tabIndex={selected === index ? 0 : -1}
              ref={(button) => { buttons.current[index] = button; }}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <strong>{project.name}</strong>
              <span>{project.subtitle}</span>
            </button>
          ))}
        </div>
        <p className="program-note">
          Personal projects.<br />Written, built, and maintained by me.<br />
          <a href="https://github.com/ognjeeen" target="_blank" rel="noopener noreferrer">
            Find me on GitHub
          </a>
        </p>
      </div>
      <div className="screening-panels">
        {projects.map((project, index) => (
          <div
            className="film-panel"
            key={project.id}
            id={`panel-${project.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${project.id}`}
            tabIndex={0}
            hidden={selected !== index}
            inert={selected !== index}
          >
            {project.content}
          </div>
        ))}
      </div>
    </section>
  );
}
