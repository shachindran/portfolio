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
  const y = useTransform(progress, [start, end], [34 + order * 3, 0]);
  const rotate = useTransform(
    progress,
    [start, end],
    [order % 2 === 0 ? -2.6 : 2.6, order % 2 === 0 ? -0.65 : 0.65],
  );
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  const scale = useTransform(progress, [start, end], [0.985, 1]);

  return (
    <motion.div
      className={`experience-doc experience-doc--${order + 1}`}
      style={{
        y: reduced ? 0 : y,
        rotate: reduced ? (order % 2 === 0 ? -0.65 : 0.65) : rotate,
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

function ThailandMark() {
  return (
    <svg
      className="experience-thailand-map"
      viewBox="0 0 260 520"
      aria-hidden="true"
    >
      <path d="M126 20c18 9 27 28 35 47 10 24 25 43 23 69-2 19-11 31-5 48 7 19 24 28 26 48 2 17-7 32-8 48-1 20 11 36 6 58-4 16-16 30-19 47-4 19 6 39 3 58-3 20-20 34-25 53-4 14 2 29-5 44-6 12-19 20-28 29-9 9-14 22-24 29-8 6-20 7-28 1-7-5-8-15-4-23 5-10 16-17 20-28 6-16-3-34 2-50 5-17 20-28 26-45 7-19 2-38 6-57 4-20 18-34 21-54 3-18-5-34-7-52-2-22 9-38 16-56 8-20 11-42 22-60 11-18 28-28 46-32 14-3 28 0 39 6Z" />
    </svg>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 26,
    mass: 0.75,
  });

  const titleY = useTransform(smoothProgress, [0, 1], [16, -34]);
  const outputOpacity = useTransform(smoothProgress, [0.44, 0.68], [0, 1]);
  const outputY = useTransform(smoothProgress, [0.44, 0.68], [18, 0]);
  const mapOpacity = useTransform(smoothProgress, [0.02, 0.42], [0.055, 0.12]);
  const mapY = useTransform(smoothProgress, [0, 1], [14, -8]);

  const docs = [
    { type: "PDF", label: "Reports" },
    { type: "DOCX", label: "Documents" },
    { type: "EML", label: "Email" },
    { type: "IMG", label: "Scans" },
    { type: "ARC", label: "Archives" },
  ];

  return (
    <section className="experience-section" id="experience" ref={sectionRef}>
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
              Most of my work started with documents that were inconsistent,
              poorly structured or simply awkward to process.
            </h3>
            <p>
              I worked on document ingestion and extraction, tested different
              parsing approaches, handled edge cases across file formats, and
              spent a lot of time checking whether the pipeline behaved the way
              it was supposed to.
            </p>
          </div>

          <div className="experience-visual" aria-label="Document formats moving through an extraction workflow">
            <motion.div
              className="experience-map-wrap"
              style={{
                opacity: reduced ? 0.095 : mapOpacity,
                y: reduced ? 0 : mapY,
              }}
            >
              <ThailandMark />
            </motion.div>

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
                <span>Output</span>
                <span>Structured</span>
              </div>
              <div className="experience-output-grid">
                <span>text</span>
                <span>tables</span>
                <span>metadata</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="experience-details">
        <div>
          <span>01</span>
          <strong>Ingest</strong>
          <p>Bring different document types into one processing path.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Extract</strong>
          <p>Pull out useful text, tables and metadata without losing structure.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Check</strong>
          <p>Test fallbacks, edge cases and whether the output can be trusted.</p>
        </div>
      </div>

      <div className="experience-mobile">
        <div className="section-label section-label--dark">
          <span>02</span>
          <span>Experience</span>
        </div>
        <p className="experience-mobile-place">Bangkok · 2026</p>
        <h2>AI / NLP R&amp;D</h2>
        <p className="experience-mobile-role">Omniscien Technologies</p>
        <p className="experience-mobile-lead">
          Most of my work started with documents that were inconsistent, poorly
          structured or simply awkward to process.
        </p>
        <div className="experience-mobile-docs">
          {docs.map((doc) => (
            <span key={doc.type}>
              <b>{doc.type}</b>
              {doc.label}
            </span>
          ))}
        </div>
        <div className="experience-mobile-notes">
          <article><span>01</span><strong>Ingest</strong><p>Different document types, one processing path.</p></article>
          <article><span>02</span><strong>Extract</strong><p>Text, tables and metadata without flattening everything.</p></article>
          <article><span>03</span><strong>Check</strong><p>Fallbacks, edge cases and output quality.</p></article>
        </div>
      </div>
    </section>
  );
}
