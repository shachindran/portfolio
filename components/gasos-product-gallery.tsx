"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type PreviewProps = {
  src: string;
  alt: string;
  variant: "dashboard" | "workflow";
};

const operatingSteps = [
  "Orders",
  "Stock & custody",
  "Dispatch",
  "Delivery",
  "Payments",
  "Day close",
];

function DashboardFallback() {
  return (
    <div className="gasos-preview-demo" role="img" aria-label="Schematic illustration of the GasOS Office layout">
      <aside className="gasos-demo-rail" aria-hidden="true">
        <strong><span className="gasos-demo-mark">↗</span> GasOS <small>Office</small></strong>
        {["Today", "Deliveries", "Stock & custody", "Payments & cash", "Buku Penyata", "Close day"].map((item, i) => (
          <span className={i === 0 ? "gasos-demo-rail-active" : ""} key={item}>{item}</span>
        ))}
      </aside>
      <div className="gasos-demo-content" aria-hidden="true">
        <div className="gasos-demo-toolbar">
          <span>Operations overview</span>
          <i>Connected workspace</i>
        </div>
        <h3>One operating day. One connected view.</h3>
        <div className="gasos-demo-tiles">
          {["Deliveries", "Stock", "Invoices", "Payments"].map(item => (
            <div key={item}><span>{item}</span><b>↗</b></div>
          ))}
        </div>
        <div className="gasos-demo-panels">
          <div><strong>Order and delivery activity</strong><i/><i/><i/></div>
          <div><strong>Inventory and cash</strong><i/><i/><i/></div>
        </div>
        <div className="gasos-demo-footer">Order → Dispatch → Delivery → Day close</div>
      </div>
    </div>
  );
}

function WorkflowFallback() {
  return (
    <div className="gasos-workflow-demo" role="img" aria-label="Six-step LPG distribution operating workflow">
      {operatingSteps.map((item, i) => (
        <div className="gasos-workflow-step" key={item}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <strong>{item}</strong>
          <small>{i === operatingSteps.length - 1 ? "Reconcile the day" : "Connected record"}</small>
        </div>
      ))}
    </div>
  );
}

function ProductPreview({ src, alt, variant }: PreviewProps) {
  const [failed, setFailed] = useState(false);
  if (failed) return variant === "dashboard" ? <DashboardFallback /> : <WorkflowFallback />;

  return (
    <img
      className="gasos-product-image"
      src={src}
      alt={alt}
      width={1672}
      height={941}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export function GasosProductGallery() {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <section className="gasos-product-gallery" aria-labelledby="gasos-platform-title">
      <div className="gasos-product-intro">
        <div className="section-label"><span>The platform</span><span>GasOS Office · GasOS Delivery</span></div>
        <p className="gasos-product-eyebrow">Purpose-built for LPG distributors</p>
        <h2 id="gasos-platform-title">A clearer view of the entire business.</h2>
        <p>
          From customer orders to physical cylinder movement and money,
          GasOS connects the operational details that need to stay in sync.
        </p>
      </div>
      <motion.figure
        className="gasos-product-stage"
        initial={reduceMotion ? false : { opacity: 0, y: 44 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="gasos-stage-orbit" aria-hidden="true" />
        <div className="gasos-stage-image-frame">
          <ProductPreview
            src="/dashboard-showcase.webp"
            variant="dashboard"
            alt="Illustrative GasOS Office dashboard collage showing delivery, inventory, invoicing, payments and daily reconciliation screens"
          />
        </div>
        <figcaption>
          <span>01 / Product overview</span>
          <span>Illustrative demonstration · No customer data</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}

export function GasosWorkflowVisual() {
  const reduceMotion = Boolean(useReducedMotion());
  return (
    <motion.figure
      className="gasos-workflow-figure"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="gasos-workflow-image-frame">
        <ProductPreview
          src="/workflow-overview.webp"
          variant="workflow"
          alt="Illustrated six-stage GasOS workflow, from order and stock allocation through dispatch, delivery, payment and day close"
        />
      </div>
      <figcaption>
        <span>02 / End-to-end operations</span>
        <span>A single connected operating flow</span>
      </figcaption>
    </motion.figure>
  );
}
