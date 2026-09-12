"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const chapters = [
  {
    key: "utp",
    index: "04.1",
    place: "Malaysia",
    city: "UTP",
    year: "2023 — now",
    image: "/journey/utp.webp",
    alt: "Portrait at Universiti Teknologi PETRONAS during an award ceremony",
    copy: "UTP is where I started taking software seriously — first through coursework, then through projects that became much bigger than coursework.",
    note: "Information Technology · Universiti Teknologi PETRONAS",
  },
  {
    key: "ankara",
    index: "04.2",
    place: "Türkiye",
    city: "Ankara",
    year: "2025",
    image: "/journey/ankara.webp",
    alt: "Portrait on a Bilkent University bench in Ankara",
    copy: "Four months at Bilkent gave me my first real taste of building a life somewhere unfamiliar. It changed how I thought about where I wanted to learn, work and live.",
    note: "Exchange semester · Bilkent University",
  },
  {
    key: "bangkok",
    index: "04.3",
    place: "Thailand",
    city: "Bangkok",
    year: "2026",
    image: "/journey/bangkok.webp",
    alt: "Portrait at a technology conference in Bangkok",
    copy: "Bangkok was the first time I lived abroad on my own while working in tech. The work mattered, but so did learning how much I liked being somewhere new.",
    note: "AI / NLP R&D · Eight-month internship",
  },
];

export function JourneySection() {
  const reduced = Boolean(useReducedMotion());

  return (
    <section className="journey-section" id="journey">
      <div className="journey-intro">
        <div className="section-label journey-label">
          <span>04</span>
          <span>Elsewhere</span>
        </div>

        <h2>Malaysia → Ankara → Bangkok.</h2>
        <p>
          The last few years have been shaped as much by where I lived as by what
          I built there.
        </p>
      </div>

      <div className="journey-chapters">
        {chapters.map((chapter, index) => (
          <article
            className={`journey-chapter journey-chapter--${chapter.key}`}
            key={chapter.key}
          >
            <motion.div
              className="journey-photo-wrap"
              initial={reduced ? false : { opacity: 0.55, y: 44, scale: 0.985 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={chapter.image}
                alt={chapter.alt}
                fill
                sizes="(max-width: 900px) 92vw, 56vw"
                className="journey-photo"
              />
              <div className="journey-photo-shade" aria-hidden="true" />
              <span className="journey-photo-index">{chapter.index}</span>
            </motion.div>

            <motion.div
              className="journey-copy"
              initial={reduced ? false : { opacity: 0, y: 28 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="journey-meta">
                <span>{chapter.place}</span>
                <span>{chapter.year}</span>
              </div>

              <h3>{chapter.city}</h3>
              <p>{chapter.copy}</p>
              <small>{chapter.note}</small>
            </motion.div>

            <div className="journey-number" aria-hidden="true">
              0{index + 1}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
