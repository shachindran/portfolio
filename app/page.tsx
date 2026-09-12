import { ExperienceSection } from "@/components/experience-section";
import { GasosExperience } from "@/components/gasos-experience";
import { JourneySection } from "@/components/journey-section";
import { PortraitStage } from "@/components/portrait-stage";
import { SelectedWorkSection } from "@/components/selected-work-section";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shachindran Veerangan home">
          SV
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#selected-work">Projects</a>
          <a href="#journey">Journey</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="resume-link"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Résumé <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">Software · AI · Systems</p>
          <h1>
            Shachindran
            <br />
            Veerangan
          </h1>
          <p className="hero-line">
            I build software for messy, real-world operations.
          </p>
          <div className="hero-meta">
            <span>Kuantan, Malaysia</span>
            <span>UTP · Bilkent · Bangkok</span>
          </div>
          <a className="work-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-visual">
          <PortraitStage />
          <p className="side-note">
            Building useful systems,
            <br />
            one problem at a time.
          </p>
        </div>

        <p className="hero-index">01 / 05</p>
      </section>

      <GasosExperience />
      <ExperienceSection />
      <SelectedWorkSection />
      <JourneySection />

      <section className="placeholder" id="about">
        <p className="section-label">
          <span>Next</span>
          <span>About · Contact</span>
        </p>
        <h2>Built carefully. Shown honestly.</h2>
        <p>
          The final chapter will keep things simple: what I am working on now,
          where I want to go next, and the easiest ways to reach me.
        </p>
      </section>

      <footer id="contact">
        <p>Shachindran Veerangan</p>
        <div>
          <a href="https://github.com/shachindran" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="mailto:shachindran4@gmail.com">Email ↗</a>
        </div>
      </footer>
    </main>
  );
}
