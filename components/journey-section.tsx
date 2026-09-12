"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const chapters = [
  {
    key: "utp",
    index: "04.1",
    place: "Malaysia",
    city: "UTP",
    year: "2023 — present",
    image: "/journey/utp.webp",
    alt: "Portrait at Universiti Teknologi PETRONAS during an award ceremony",
    copy:
      "UTP gave me the technical base I still use every day: programming, databases, web systems, object-oriented development and HCI. It also taught me how to work in teams, present ideas clearly and take ownership when the brief was not perfectly defined.",
    note: "BSc Information Technology · Universiti Teknologi PETRONAS",
    lessons: ["Software fundamentals", "Team projects", "Leadership"],
  },
  {
    key: "ankara",
    index: "04.2",
    place: "Türkiye",
    city: "Ankara",
    year: "2025",
    image: "/journey/ankara.webp",
    alt: "Portrait on a Bilkent University bench in Ankara",
    copy:
      "Bilkent was my first time studying and living abroad for a full semester. I had to adapt quickly to a different academic culture, new people and a completely new routine. I came back more independent, more comfortable starting from zero, and much more certain that I want an international career.",
    note: "Exchange semester · Bilkent University · Ankara",
    lessons: ["Adaptability", "Independence", "International perspective"],
  },
  {
    key: "bangkok",
    index: "04.3",
    place: "Thailand",
    city: "Bangkok",
    year: "2026",
    image: "/journey/bangkok.webp",
    alt: "Portrait at a technology conference in Bangkok",
    copy:
      "Bangkok was my first engineering role abroad. In AI/NLP R&D, I worked on document intelligence, ingestion and extraction pipelines, edge cases across file formats and the async services around them. It taught me to debug uncertain systems, communicate progress clearly and make decisions when the answer was not obvious. Living there on my own made me more independent too.",
    note: "AI / NLP R&D Intern · Omniscien Technologies · Bangkok",
    lessons: ["Document intelligence", "Engineering under uncertainty", "Working independently"],
  },
];

export function JourneySection() {
  const reduced = Boolean(useReducedMotion());

  return (
    <section className="journey-section" id="journey">
      <div className="journey-intro">
        <div className="section-label journey-label">
          <span>04</span>
          <span>Journey</span>
        </div>

        <h2>Malaysia → Ankara → Bangkok.</h2>
        <p>
          University gave me the base. Ankara pushed me out of routine. Bangkok
          was where the work started to feel real.
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

              <div className="journey-lessons" aria-label={`What ${chapter.city} taught me`}>
                {chapter.lessons.map((lesson) => (
                  <span key={lesson}>{lesson}</span>
                ))}
              </div>

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
