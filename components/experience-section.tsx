"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

type DocCardProps = {
  type: string;
  label: string;
  order: number;
  progress: MotionValue<number>;
  reduced: boolean;
};

function DocCard({ type, label, order, progress, reduced }: DocCardProps) {
  const start = 0.08 + order * 0.065;
  const end = start + 0.22;
  const y = useTransform(progress, [start, end], [30 + order * 3, 0]);
  const rotate = useTransform(
    progress,
    [start, end],
    [order % 2 === 0 ? -2.2 : 2.2, order % 2 === 0 ? -0.45 : 0.45],
  );
  const opacity = useTransform(progress, [start, end], [0.16, 1]);
  const scale = useTransform(progress, [start, end], [0.988, 1]);

  return (
    <motion.div
      className={`experience-doc experience-doc--${order + 1}`}
      style={{
        y: reduced ? 0 : y,
        rotate: reduced ? 0 : rotate,
        opacity: reduced ? 1 : opacity,
        scale: reduced ? 1 : scale,
      }}
    >
      <span>{type}</span>
      <strong>{label}</strong>
      <i aria-hidden="true" />
    </motion.div>
  );
}

export function ExperienceSection() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduced = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 26,
    mass: 0.75,
  });

  const titleY = useTransform(smoothProgress, [0, 1], [12, -24]);
  const outputOpacity = useTransform(smoothProgress, [0.38, 0.64], [0, 1]);
  const outputY = useTransform(smoothProgress, [0.38, 0.64], [14, 0]);
  const railScale = useTransform(smoothProgress, [0.08, 0.62], [0.08, 1]);

  const docs = [
    { type: "PDF", label: "Reports" },
    { type: "DOCX", label: "Documents" },
    { type: "EML", label: "Email" },
    { type: "IMG", label: "Scans" },
    { type: "ARC", label: "Archives" },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-scroll-stage" ref={stageRef}>
        <div className="experience-sticky">
          <div className="experience-topline">
            <div className="section-label section-label--dark">
              <span>02</span>
              <span>Experience</span>
            </div>
            <span className="experience-year">Bangkok · 2026</span>
          </div>

          <motion.h2
            className="experience-title"
            style={{ y: reduced ? 0 : titleY }}
            aria-hidden="true"
          >
            BANGKOK
          </motion.h2>

          <div className="experience-layout">
            <div className="experience-copy">
              <p className="experience-role">AI / NLP R&amp;D · Omniscien Technologies</p>
              <h3>
                I worked on document intelligence: turning messy files into
                structured information a system could actually use.
              </h3>
              <p>
                I built and tested parts of a document ingestion and enrichment
                pipeline across PDFs, DOCX files, email, scans and less common
                formats. The work covered extraction, table handling, metadata,
                OCR and correction, plus the async services around the pipeline.
              </p>

              <div className="experience-stack-line" aria-label="Technical stack">
                <span>FastAPI</span>
                <span>Celery</span>
                <span>Redis</span>
                <span>Docker</span>
                <span>Kubernetes</span>
              </div>
            </div>

            <div
              className="experience-visual"
              aria-label="Document formats moving through a document intelligence pipeline"
            >
              <motion.div
                className="experience-pipeline-rail"
                aria-hidden="true"
                style={{ scaleX: reduced ? 1 : railScale }}
              />

              <div className="experience-stack">
                {docs.map((doc, index) => (
                  <DocCard
                    key={doc.type}
                    {...doc}
                    order={index}
                    progress={smoothProgress}
                    reduced={reduced}
                  />
                ))}
              </div>

              <motion.div
                className="experience-output"
                style={{
                  opacity: reduced ? 1 : outputOpacity,
                  y: reduced ? 0 : outputY,
                }}
              >
                <div className="experience-output-head">
                  <span>Document intelligence</span>
                  <span>Structured output</span>
                </div>
                <div className="experience-output-grid experience-output-grid--four">
                  <span>text</span>
                  <span>tables</span>
                  <span>metadata</span>
                  <span>details</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="experience-details" aria-label="AI NLP experience highlights">
        <div>
          <span>01</span>
          <strong>Ingest</strong>
          <p>
            Bring very different document types into one asynchronous processing
            path without treating every file as a special case.
          </p>
        </div>
        <div>
          <span>02</span>
          <strong>Extract + enrich</strong>
          <p>
            Pull out useful text, tables and metadata, then improve difficult
            output with OCR and correction where needed.
          </p>
        </div>
        <div>
          <span>03</span>
          <strong>Run it as a system</strong>
          <p>
            Work across APIs, background jobs, Redis, containers and the
            Kubernetes deployment context around the pipeline.
          </p>
        </div>
      </div>

      <div className="experience-mobile">
        <div className="section-label section-label--dark">
          <span>02</span>
          <span>Experience</span>
        </div>
        <p className="experience-mobile-place">Bangkok · 2026</p>
        <h2>Document intelligence</h2>
        <p className="experience-mobile-role">AI / NLP R&amp;D · Omniscien Technologies</p>
        <p className="experience-mobile-lead">
          I worked on turning messy documents into structured information a
          system could actually use.
        </p>
        <div className="experience-mobile-docs">
          {docs.map((doc) => (
            <span key={doc.type}>
              <b>{doc.type}</b>
              {doc.label}
            </span>
          ))}
        </div>
        <div className="experience-mobile-stack">
          <span>FastAPI</span>
          <span>Celery</span>
          <span>Redis</span>
          <span>Docker</span>
          <span>Kubernetes</span>
        </div>
        <div className="experience-mobile-notes">
          <article>
            <span>01</span>
            <strong>Ingest</strong>
            <p>Different formats, one asynchronous processing path.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Extract + enrich</strong>
            <p>Text, tables, metadata, OCR and correction.</p>
          </article>
          <article>
            <span>03</span>
            <strong>Run it as a system</strong>
            <p>APIs, background jobs, containers and Kubernetes context.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
