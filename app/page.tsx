import { PortraitStage } from "@/components/portrait-stage";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Shachindran Veerangan home">
          SV
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
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

      <section className="work-preview" id="work" aria-labelledby="work-title">
        <div className="section-label">
          <span>01</span>
          <span>Featured system</span>
        </div>

        <div className="work-heading">
          <h2 id="work-title">GASOS</h2>
          <p>From fragmented operations to one working system.</p>
        </div>

        <div className="system-map" aria-label="GASOS connects operational workflows">
          <div className="system-inputs">
            <span>Orders</span>
            <span>Delivery</span>
            <span>Stock</span>
            <span>Payments</span>
          </div>

          <div className="system-line" aria-hidden="true" />

          <div className="system-core">
            <span>G</span>
            <small>GASOS</small>
          </div>

          <div className="system-line system-line--right" aria-hidden="true" />

          <div className="system-result">
            <strong>One operational truth.</strong>
            <p>
              A software system for the physical reality behind LPG distribution.
            </p>
          </div>
        </div>

        <div className="gasos-summary">
          <p>
            Orders, delivery, inventory and money all change the same operation.
            GASOS brings those workflows into one auditable system, built around
            how the work actually happens.
          </p>

          <a className="case-study-link" href="/work/gasos">
            View case study <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="work-foot">
          <span>Product engineering · 2026</span>
          <span>Pilot validation</span>
        </div>
      </section>

      <section className="placeholder" id="about">
        <p className="section-label">
          <span>Next</span>
          <span>Experience · Selected work · About</span>
        </p>
        <h2>Built carefully. Shown honestly.</h2>
        <p>
          The rest of the portfolio will follow this visual system now that the
          hero and flagship-project direction are locked.
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
