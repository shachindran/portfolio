"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

function MaintenanceVisual() {
  const reduced = Boolean(useReducedMotion());

  return (
    <div className="selected-visual maintenance-visual" aria-label="Predictive maintenance model result and dataset summary">
      <div className="maintenance-head">
        <span>NASA C-MAPSS / FD001</span>
        <span>Remaining useful life</span>
      </div>

      <div className="maintenance-content">
        <motion.div
          className="maintenance-result"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="https://raw.githubusercontent.com/shachindran/predictive-maintenance-ai/main/results_graph.png"
            alt="Predicted versus actual remaining useful life results from the predictive maintenance project"
            loading="lazy"
          />
        </motion.div>

        <div className="maintenance-metrics">
          <div><span>Input</span><strong>21</strong><small>sensors</small></div>
          <div><span>Context</span><strong>03</strong><small>operating settings</small></div>
          <div><span>Target</span><strong>RUL</strong><small>cycles</small></div>
          <div><span>Model</span><strong>RF</strong><small>random forest</small></div>
        </div>
      </div>

      <div className="maintenance-foot">
        <span>Sensor degradation</span>
        <span>Regression</span>
        <span>Predict before failure</span>
      </div>
    </div>
  );
}

function EnergyVisual() {
  const reduced = Boolean(useReducedMotion());
  const bars = [38, 34, 32, 31, 35, 47, 61, 72, 68, 59, 52, 48, 46, 49, 55, 64, 76, 91, 96, 88, 74, 61, 50, 43];

  return (
    <div className="selected-visual energy-visual" aria-label="Hourly energy demand forecast visual">
      <div className="energy-head">
        <span>AEP / hourly demand</span>
        <span>24H</span>
      </div>

      <div className="energy-bars" aria-hidden="true">
        {bars.map((height, index) => (
          <motion.i
            key={index}
            style={{ height: `${height}%` }}
            initial={reduced ? false : { scaleY: 0.08, opacity: 0.28 }}
            whileInView={reduced ? undefined : { scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.55,
              delay: Math.min(index * 0.022, 0.36),
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      <motion.div
        className="energy-peak"
        initial={reduced ? false : { opacity: 0, y: 10 }}
        whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ delay: 0.65, duration: 0.55 }}
      >
        <span>evening peak</span>
        <strong>18:00–20:00</strong>
      </motion.div>

      <div className="energy-foot">
        <span>Daily</span>
        <span>Weekly</span>
        <span>Yearly seasonality</span>
      </div>
    </div>
  );
}

function NirtyaVisual() {
  const reduced = Boolean(useReducedMotion());
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.a
      className="selected-visual nirtya-live-visual"
      href="https://nirtya-jothi.vercel.app"
      target="_blank"
      rel="noreferrer"
      aria-label="Open the live Nirtya Jothi website"
      initial={reduced ? false : { opacity: 0.75, scale: 0.985 }}
      whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nirtya-browser-bar" aria-hidden="true">
        <div><i /><i /><i /></div>
        <span>nirtya-jothi.vercel.app</span>
        <b>↗</b>
      </div>

      <div className={`nirtya-site-preview ${loaded ? "is-loaded" : ""}`}>
        <iframe
          src="https://nirtya-jothi.vercel.app"
          title="Nirtya Jothi live website preview"
          loading="lazy"
          tabIndex={-1}
          onLoad={() => setLoaded(true)}
        />
        <div className="nirtya-preview-shade" aria-hidden="true" />
        <div className="nirtya-preview-caption">
          <span>Live website</span>
          <strong>Scroll-driven temple experience</strong>
        </div>
      </div>
    </motion.a>
  );
}

export function SelectedWorkSection() {
  return (
    <section className="selected-work" id="selected-work">
      <div className="selected-work-intro">
        <div className="section-label selected-work-label">
          <span>03</span>
          <span>Selected work</span>
        </div>
        <h2>Three smaller builds. Three different problems.</h2>
        <p>
          Predictive modeling, time-series forecasting and a motion-heavy web
          experience — useful snapshots of how I approach different kinds of work.
        </p>
      </div>

      <article className="selected-project selected-project--maintenance">
        <div className="selected-project-copy">
          <div className="selected-project-meta">
            <span>03.1</span>
            <span>Industrial AI</span>
          </div>
          <h3>Predictive<br />Maintenance</h3>
          <p>
            A remaining-useful-life model built on NASA&apos;s C-MAPSS turbofan
            dataset, using sensor degradation data to estimate how many cycles an
            engine has left before failure.
          </p>
          <div className="selected-project-tags">
            <span>Python</span><span>Scikit-learn</span><span>Random Forest</span>
          </div>
          <a href="https://github.com/shachindran/predictive-maintenance-ai" target="_blank" rel="noreferrer">
            View repository <span aria-hidden="true">↗</span>
          </a>
        </div>
        <MaintenanceVisual />
      </article>

      <article className="selected-project selected-project--energy">
        <div className="selected-project-copy">
          <div className="selected-project-meta">
            <span>03.2</span>
            <span>Time series</span>
          </div>
          <h3>Smart Energy<br />Forecaster</h3>
          <p>
            An hourly electricity-demand forecaster built around AEP data, with
            daily, weekly and seasonal patterns surfaced instead of hiding the
            forecast behind a single number.
          </p>
          <div className="selected-project-tags">
            <span>Python</span><span>Prophet</span><span>AEP data</span>
          </div>
          <a href="https://github.com/shachindran/smart-energy-forecaster" target="_blank" rel="noreferrer">
            View repository <span aria-hidden="true">↗</span>
          </a>
        </div>
        <EnergyVisual />
      </article>

      <article className="selected-project selected-project--nirtya">
        <div className="selected-project-copy">
          <div className="selected-project-meta">
            <span>03.3</span>
            <span>Creative engineering</span>
          </div>
          <h3>Nirtya<br />Jothi</h3>
          <p>
            A cinematic website for a Bharatanatyam academy, built around a
            240-frame temple sequence and scroll-driven transitions rather than a
            conventional landing-page layout.
          </p>
          <div className="selected-project-tags">
            <span>Next.js</span><span>Scroll sequence</span><span>Web motion</span>
          </div>
          <a href="https://nirtya-jothi.vercel.app" target="_blank" rel="noreferrer">
            Visit live site <span aria-hidden="true">↗</span>
          </a>
        </div>
        <NirtyaVisual />
      </article>
    </section>
  );
}
