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
            A purpose-built SaaS platform bringing LPG distribution operations,
            inventory, delivery, finance and business reporting together.
          </p>
        </div>

        <div className="case-meta-grid">
          <div>
            <span>Role</span>
            <strong>Founder · product & software engineering</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>Active product development</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>2026</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>LPG operations · SaaS architecture · accounting</strong>
          </div>
        </div>
      </section>

      <section className="case-section case-section--light">
        <div className="section-label">
          <span>Problem</span>
          <span>Why it exists</span>
        </div>

        <div className="case-two-col">
          <h2>Built for how LPG distribution actually works.</h2>
          <div className="case-copy">
            <p>
              Every delivery connects multiple parts of the business: customer orders,
              cylinder stock, vehicle and staff activity, invoices, payments
              and the day's financial position. GasOS brings those
              relationships into a single operational platform.
            </p>
            <p>
              Built specifically for LPG distributors, its workflows bring clarity
              to day-to-day work while keeping each important business event
              connected to its source.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--dark">
        <div className="section-label">
          <span>System</span>
          <span>Connected business workflows</span>
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
          <span>Custody</span>
          <i>→</i>
          <span>Payment</span>
        </div>

        <div className="case-callout-grid">
          <article>
            <span>01</span>
            <h3>Connected operations.</h3>
            <p>
              Orders, dispatch, deliveries and cylinder movements are coordinated
              around the same operating day.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Financial clarity.</h3>
            <p>
              Invoices, receivables, collections and cash custody connect business
              activity with financial records.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Purpose-built workspaces.</h3>
            <p>
              Dedicated Office and Delivery experiences organise the platform
              around the people using it.
            </p>
          </article>
        </div>
      </section>

      <section className="case-section case-section--light">
        <div className="section-label">
          <span>Engineering</span>
          <span>Engineered for connected workflows</span>
        </div>

        <div className="case-two-col">
          <h2>A modern, modular platform built for operational integrity.</h2>
          <div className="case-copy">
            <p>
              GasOS uses a modular NestJS backend, PostgreSQL and a React frontend,
              with a generated TypeScript API client connecting its interfaces.
              Domain boundaries keep inventory, fulfilment and finance organised
              while shared transactions protect connected business operations.
            </p>
            <p>
              Its engineering foundation includes tenant-aware access controls,
              traceable records, migration-managed data models and automated
              integration tests. These decisions support a maintainable SaaS
              architecture designed to grow with the product.
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
          <span>Product design</span>
          <span>Built for real operational complexity</span>
        </div>

        <div className="case-quote">
          <p>
            “Capture the business event once. Keep operations, stock and
            financial records connected.”
          </p>
        </div>

        <div className="case-two-col case-two-col--compact">
          <h2>Less repetitive work. Better operational visibility.</h2>
          <div className="case-copy">
            <p>
              GasOS is designed around real LPG distribution workflows:
              recording an order, moving cylinders, completing a delivery,
              issuing an invoice and reconciling the business day.
              Each action belongs to a connected operating model.
            </p>
            <p>
              The experience combines straightforward day-to-day screens
              with carefully modelled transactions and traceable business
              records underneath.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--light">
        <div className="section-label">
          <span>Platform capabilities</span>
          <span>Built around the business</span>
        </div>
        <div className="case-two-col">
          <h2>Everyday operations. One connected system.</h2>
          <div className="case-copy">
            <p>
              The GasOS foundation brings together customer and order management,
              delivery completion, cylinder movement and custody records,
              supplier receiving, invoicing, receivables and payment allocation.
              Operational-day controls, cash handovers and Buku Penyata
              reporting connect daily work with its financial evidence.
            </p>
            <p>
              The platform is designed around reliable business records:
              permissions, immutable event history, auditable corrections and
              clear distinctions between physical custody and financial
              ownership.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--paper">
        <div className="section-label">
          <span>Platform expansion</span>
          <span>Accounting · fleet · business management</span>
        </div>
        <div className="case-two-col">
          <h2>Building a more complete operating system for LPG businesses.</h2>
          <div className="case-copy">
            <p>
              Development is expanding GasOS into native SME accounting,
              including accounts payable, expenses, financial statements,
              bank reconciliation and inventory valuation. The product
              direction also includes fleet and driver management,
              transporter settlement and staff administration.
            </p>
            <p>
              These capabilities extend the existing operational foundation
              into a connected, industry-specific business management
              experience. The roadmap combines product development with
              testing, operational pilots and release readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="case-section case-section--dark case-close">
        <p className="section-label">
          <span>Next</span>
          <span>GasOS · 2026</span>
        </p>
        <h2>One platform. From daily operations to business intelligence.</h2>
        <p>
          I am building GasOS as an integrated software platform for LPG
          distribution businesses: practical operational tools, connected
          financial records and a scalable foundation for the next generation
          of industry-specific business software.
        </p>
        <a href="/">Back to portfolio →</a>
      </section>
    </main>
  );
}
