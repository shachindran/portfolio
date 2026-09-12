import { ExperienceSection } from "@/components/experience-section";
import { GasosExperience } from "@/components/gasos-experience";
import { JourneySection } from "@/components/journey-section";
import { PortraitStage } from "@/components/portrait-stage";
import { ResetScrollOnRefresh } from "@/components/reset-scroll-on-refresh";
import { SelectedWorkSection } from "@/components/selected-work-section";

export default function Home() {
  return (
    <main>
      <ResetScrollOnRefresh />

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
            <span>B.IT (Hons) · Universiti Teknologi PETRONAS · 2027</span>
            <span>Malaysia · Ankara · Bangkok</span>
          </div>
          <a className="work-link" href="#work">
            Selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-visual">
          <PortraitStage />
          <p className="side-note">
            Software for the parts of work
            <br />
            that are still too manual.
          </p>
        </div>

        <p className="hero-index">01 / 06</p>
      </section>

      <GasosExperience />
      <ExperienceSection />
      <SelectedWorkSection />
      <JourneySection />

      <section className="about-section" id="about">
        <div className="section-label about-label">
          <span>05</span>
          <span>About</span>
        </div>

        <div className="about-lead">
          <h2>Most things I build start with a broken workflow.</h2>
          <div className="about-copy">
            <p>
              I’m an Information Technology undergraduate at Universiti Teknologi
              PETRONAS working across software systems and applied AI. I’m drawn to
              problems where the real process is messier than the software around it.
            </p>
            <p>
              That is what pulled me into GASOS and document intelligence. I’m most
              interested in systems that have to deal with imperfect inputs, real
              operational constraints and people who need the software to work — not
              just demo well.
            </p>
          </div>
        </div>

        <div className="about-grid" aria-label="Profile summary">
          <article>
            <span>Education</span>
            <strong>Bachelor of Information Technology (Hons)</strong>
            <p>Universiti Teknologi PETRONAS · Expected 2027</p>
          </article>
          <article>
            <span>Exchange</span>
            <strong>Bilkent University</strong>
            <p>Ankara · 2025</p>
          </article>
          <article>
            <span>Experience</span>
            <strong>AI / NLP R&amp;D</strong>
            <p>Document intelligence · Bangkok · 2026</p>
          </article>
          <article>
            <span>Current direction</span>
            <strong>Software systems · Applied AI</strong>
            <p>Document intelligence · Multimodal systems</p>
          </article>
        </div>

        <div className="about-evidence">
          <div>
            <span>Academic</span>
            <strong>YUTP Education Grant · Dean’s List</strong>
          </div>
          <div>
            <span>Leadership</span>
            <strong>HoliRun · Assistant Project Director</strong>
            <p>250+ participants · RM29,390 programme budget</p>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-label contact-label">
          <span>06</span>
          <span>Contact</span>
        </div>
        <h2>Working on something difficult?</h2>
        <p>
          I’m open to engineering roles, postgraduate opportunities and a small
          number of collaborations.
        </p>
        <div className="contact-links">
          <a href="mailto:shachindran4@gmail.com">Email ↗</a>
          <a href="https://github.com/shachindran" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/shachindran-veerangan-02b67a15a/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </section>

      <footer>
        <p>Shachindran Veerangan</p>
        <p>Software · AI · Systems</p>
      </footer>
    </main>
  );
}
