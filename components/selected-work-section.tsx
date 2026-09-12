"use client";

import { motion, useReducedMotion } from "motion/react";

function MaintenanceVisual() {
  const reduced = Boolean(useReducedMotion());

  return (
    <div className="selected-visual maintenance-visual" aria-label="Abstract engine sensor degradation chart">
      <div className="maintenance-head">
        <span>Engine / FD001</span>
        <span>Remaining useful life</span>
      </div>

      <svg viewBox="0 0 640 360" aria-hidden="true">
        <g className="chart-grid">
          <line x1="48" y1="55" x2="608" y2="55" />
          <line x1="48" y1="120" x2="608" y2="120" />
          <line x1="48" y1="185" x2="608" y2="185" />
          <line x1="48" y1="250" x2="608" y2="250" />
          <line x1="48" y1="315" x2="608" y2="315" />
        </g>
        <motion.path
          className="sensor-line sensor-line--primary"
          pathLength="1"
          d="M50 76 C115 86 135 100 183 118 C240 139 260 132 312 168 C357 198 388 203 427 229 C470 258 510 274 590 311"
          initial={reduced ? false : { pathLength: 0, opacity: 0.3 }}
          whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          className="sensor-line"
          pathLength="1"
          d="M50 111 C112 101 160 125 204 129 C258 135 300 160 344 173 C393 188 434 201 480 218 C524 234 552 249 590 259"
          initial={reduced ? false : { pathLength: 0, opacity: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1, opacity: 0.42 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.line
          className="rul-marker"
          x1="483"
          y1="42"
          x2="483"
          y2="320"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={reduced ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.75, duration: 0.6 }}
        />
      </svg>

      <div className="maintenance-foot">
        <span>21 sensors</span>
        <span>3 operating settings</span>
        <span>NASA C-MAPSS</span>
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

  return (
    <div className="selected-visual nirtya-visual" aria-label="Nirtya Jothi scroll-driven web experience">
      <div className="nirtya-frame nirtya-frame--back" aria-hidden="true" />
      <div className="nirtya-frame nirtya-frame--mid" aria-hidden="true" />
      <motion.div
        className="nirtya-frame nirtya-frame--front"
        initial={reduced ? false : { scale: 0.97, y: 18, opacity: 0.7 }}
        whileInView={reduced ? undefined : { scale: 1, y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="nirtya-count">240 frames</span>
        <div className="nirtya-symbol" aria-hidden="true">NJ</div>
        <strong>Nirtya Jothi</strong>
        <small>Bharatanatyam · Malaysia</small>
      </motion.div>
      <div className="nirtya-progress" aria-hidden="true"><i /></div>
    </div>
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
        <h2>A few other things I&apos;ve built.</h2>
        <p>
          Smaller than the two stories above, but useful for showing the range of
          problems I like working on.
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
            Predicting the remaining useful life of turbofan engines from sensor
            data using NASA&apos;s C-MAPSS dataset.
          </p>
          <div className="selected-project-tags">
            <span>Python</span><span>Scikit-learn</span><span>RUL</span>
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
            Forecasting hourly electricity demand and surfacing the daily,
            weekly and yearly patterns underneath it.
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
            A scroll-driven web experience for a Bharatanatyam academy, built
            around a 240-frame temple sequence and an editorial narrative.
          </p>
          <div className="selected-project-tags">
            <span>Next.js</span><span>Scroll sequence</span><span>Web motion</span>
          </div>
          <span className="selected-private">Private build</span>
        </div>
        <NirtyaVisual />
      </article>
    </section>
  );
}
