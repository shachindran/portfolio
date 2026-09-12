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
    image: "/journey/utp.webp.jpeg",
    alt: "Portrait at Universiti Teknologi PETRONAS during an award ceremony",
    copy:
      "I’m completing a Bachelor of Information Technology (Hons) at UTP. The degree gave me a broad software foundation across data science, databases, object-oriented programming and software engineering. Outside class, leadership roles taught me how to coordinate people, make decisions and deliver when the work was bigger than one person.",
    note: "Bachelor of Information Technology (Hons) · YUTP Education Grant · Dean’s List",
    lessons: ["Engineering foundation", "Leadership", "Ownership"],
    brand: "Universiti Teknologi PETRONAS",
    brandHref: "https://www.utp.edu.my/",
    brandLogo:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/UTP-logo.png?width=512",
  },
  {
    key: "ankara",
    index: "04.2",
    place: "Türkiye",
    city: "Ankara",
    year: "2025",
    image: "/journey/ankara.webp.jpeg",
    alt: "Portrait on a Bilkent University bench in Ankara",
    copy:
      "I spent a semester at Bilkent University as an exchange student in Computer Information Systems and Technologies. It was the first time I had to rebuild my routine in a different academic and cultural environment, and I learned to adapt quickly, communicate across backgrounds and become comfortable starting from zero. It made an international career feel realistic rather than distant.",
    note: "Exchange Student · Computer Information Systems and Technologies · Bilkent University",
    lessons: ["Adaptability", "Cross-cultural communication", "Independence"],
    brand: "Bilkent University",
    brandHref: "https://w3.bilkent.edu.tr/bilkent/",
    brandLogo: "https://w3.bilkent.edu.tr/logo/ing-amblem.png",
  },
  {
    key: "bangkok",
    index: "04.3",
    place: "Thailand",
    city: "Bangkok",
    year: "2026",
    image: "/journey/bangkok.jpeg",
    alt: "Portrait at a technology conference in Bangkok",
    copy:
      "Bangkok was where software stopped feeling like coursework. In AI/NLP R&D at Omniscien, I worked on document intelligence across heterogeneous file ingestion, extraction and enrichment, OCR paths, asynchronous workers and containerized environments. I learned to benchmark before choosing, trace problems through a system, test the awkward cases and keep moving when the answer was not obvious.",
    note: "AI / NLP R&D Intern · Document Intelligence · Omniscien Technologies",
    lessons: ["Document intelligence", "Systems thinking", "Engineering under uncertainty"],
    brand: "Omniscien Technologies",
    brandHref: "https://omniscien.com/",
    brandLogo: "",
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
          Three places shaped three different parts of how I work: UTP gave me
          the foundation, Ankara made me adaptable, and Bangkok taught me to own
          real engineering problems.
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

              <a
                className={`journey-brand journey-brand--${chapter.key}`}
                href={chapter.brandHref}
                target="_blank"
                rel="noreferrer"
              >
                {chapter.brandLogo ? (
                  <img src={chapter.brandLogo} alt={`${chapter.brand} logo`} />
                ) : (
                  <span className="journey-brand-fallback">OT</span>
                )}
                <span>{chapter.brand}</span>
              </a>

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
