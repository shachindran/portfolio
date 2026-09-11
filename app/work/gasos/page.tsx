export default function GasosCaseStudy() {
  return (
    <main className="case-study-page">
      <header className="case-study-nav">
        <a href="/" className="case-study-back">
          ← Shachindran Veerangan
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Résumé ↗
        </a>
      </header>

      <section className="case-hero">
        <div className="section-label">
          <span>01</span>
          <span>Featured system</span>
        </div>

        <div className="case-title-row">
          <h1>GASOS</h1>
          <p>
            An operational system for LPG distribution businesses, designed around
            the real flow of orders, delivery, inventory, money and compliance.
          </p>
        </div>

        <div className="case-meta-grid">
          <div>
            <span>Role</span>
            <strong>Product engineering</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>Pilot validation</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>2026</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Operations · reliability · auditability</strong>
          </div>
        </div>
      </section>

      <section className="case-section case-section--light">
        <div className="section-label">
          <span>Problem</span>
          <span>Why it exists</span>
        </div>

        <div className="case-two-col">
          <h2>Daily operations should not depend on memory and reconstruction.</h2>
          <div className="case-copy">
            <p>
              A distribution business can look simple from the outside: take an
              order, send a delivery, collect payment. In practice, the same job
              changes stock, customer balances, delivery status and physical
              custody at the same time.
            </p>
            <p>
              When those changes live across paper, messaging, spreadsheets and
              staff memory, the hard part becomes figuring out what is actually
              true at the end of the day.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--dark">
        <div className="section-label">
          <span>System</span>
          <span>One operational flow</span>
        </div>

        <div className="flow-strip" aria-label="GASOS operating flow">
          <span>Customer</span>
          <i>→</i>
          <span>Order</span>
          <i>→</i>
          <span>Dispatch</span>
          <i>→</i>
          <span>Delivery</span>
          <i>→</i>
          <span>Stock</span>
          <i>→</i>
          <span>Payment</span>
        </div>

        <div className="case-callout-grid">
          <article>
            <span>01</span>
            <h3>Operational first.</h3>
            <p>
              The system follows the work as it happens instead of forcing the
              business to reconstruct it later.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Accurate underneath.</h3>
            <p>
              Important changes are designed to be traceable, consistent and hard
              to lose across connected workflows.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Simple at the surface.</h3>
            <p>
              Office and delivery workflows stay focused on the task in front of
              the user, while the underlying model carries the complexity.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section case-section--light">
        <div className="section-label">
          <span>Engineering</span>
          <span>Choosing restraint</span>
        </div>

        <div className="case-two-col">
          <h2>A modular monolith was the practical choice.</h2>
          <div className="case-copy">
            <p>
              The domains are tightly connected and often need transactional
              consistency. Splitting them into distributed services would add more
              infrastructure, more debugging surface and more failure modes before
              the product had earned that complexity.
            </p>
            <p>
              The architecture keeps module boundaries explicit while retaining a
              shared relational database and straightforward deployment model.
            </p>
          </div>
        </div>

        <div className="architecture-grid">
          <div className="architecture-node">Office</div>
          <div className="architecture-node">Delivery</div>
          <div className="architecture-core">Shared domain</div>
          <div className="architecture-node">PostgreSQL</div>
          <div className="architecture-node">Audit trail</div>
        </div>
      </section>

      <section className="case-section case-section--paper">
        <div className="section-label">
          <span>Validation</span>
          <span>Knowing when to stop adding features</span>
        </div>

        <div className="case-quote">
          <p>
            “The question stopped being ‘what else should it contain?’ and became
            ‘what is the minimum that makes a real operator trust it?’”
          </p>
        </div>

        <div className="case-two-col case-two-col--compact">
          <h2>Evidence before expansion.</h2>
          <div className="case-copy">
            <p>
              Feature growth was deliberately slowed so the project could move into
              pilot validation. The current phase is about correctness, field
              acceptance, shadow operation and whether the workflow is trustworthy
              enough to use day to day.
            </p>
            <p>
              That decision matters more to me than shipping another page of
              features. A system like this only becomes useful when people can rely
              on it.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--dark case-close">
        <p className="section-label">
          <span>Next</span>
          <span>Still building</span>
        </p>
        <h2>The project is not finished. That is part of the point.</h2>
        <p>
          GASOS is being developed as a real operating system, not as a portfolio
          demo. I will keep expanding this case study as the pilot produces stronger
          evidence and the product earns its next layer of complexity.
        </p>
        <a href="/">Back to portfolio →</a>
      </section>
    </main>
  );
}
