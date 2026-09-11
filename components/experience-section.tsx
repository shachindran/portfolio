"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
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
  const start = 0.08 + order * 0.07;
  const end = start + 0.24;
  const y = useTransform(progress, [start, end], [70 + order * 12, order * 14]);
  const rotate = useTransform(progress, [start, end], [order % 2 === 0 ? -4 : 4, order % 2 === 0 ? -1.2 : 1.2]);
  const opacity = useTransform(progress, [start, end], [0.18, 1]);

  return (
    <motion.div
      className={`experience-doc experience-doc--${order + 1}`}
      style={{
        y: reduced ? order * 14 : y,
        rotate: reduced ? (order % 2 === 0 ? -1.2 : 1.2) : rotate,
        opacity: reduced ? 1 : opacity,
      }}
    >
      <span>{type}</span>
      <strong>{label}</strong>
      <i aria-hidden="true" />
    </motion.div>
  );
}

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [20, -48]);
  const outputOpacity = useTransform(scrollYProgress, [0.38, 0.64], [0, 1]);
  const outputY = useTransform(scrollYProgress, [0.38, 0.64], [24, 0]);

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

            <div className="experience-notes">
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
          </div>

          <div className="experience-visual" aria-label="Document formats moving through an extraction workflow">
            <div className="experience-stack">
              {docs.map((doc, index) => (
                <DocCard
                  key={doc.type}
                  {...doc}
                  order={index}
                  progress={scrollYProgress}
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
