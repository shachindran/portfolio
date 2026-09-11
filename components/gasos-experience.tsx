"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

type FlowRowProps = {
  index: string;
  title: string;
  detail: string;
  progress: MotionValue<number>;
  order: number;
  reduced: boolean;
};

function FlowRow({ index, title, detail, progress, order, reduced }: FlowRowProps) {
  const start = 0.12 + order * 0.075;
  const end = start + 0.18;
  const opacity = useTransform(progress, [start, end], [0.28, 1]);
  const x = useTransform(progress, [start, end], [22, 0]);

  return (
    <motion.div
      className="gasos-flow-row"
      style={{
        opacity: reduced ? 1 : opacity,
        x: reduced ? 0 : x,
      }}
    >
      <span className="gasos-flow-index">{index}</span>
      <strong>{title}</strong>
      <span className="gasos-flow-detail">{detail}</span>
    </motion.div>
  );
}

export function GasosExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [18, -42]);
  const boardY = useTransform(scrollYProgress, [0.06, 0.72], [36, 0]);
  const boardOpacity = useTransform(scrollYProgress, [0.04, 0.24], [0.5, 1]);
  const progressScale = useTransform(scrollYProgress, [0.08, 0.66], [0.08, 1]);

  const rows = [
    { index: "01", title: "Customer order", detail: "Order enters the day" },
    { index: "02", title: "Stock allocation", detail: "Inventory is reserved" },
    { index: "03", title: "Dispatch", detail: "Delivery is prepared" },
    { index: "04", title: "Delivery", detail: "Physical movement is recorded" },
    { index: "05", title: "Payment", detail: "Money is tied back to the work" },
    { index: "06", title: "Day close", detail: "The day is reconciled" },
  ];

  return (
    <section className="gasos-experience" id="work" ref={sectionRef}>
      <div className="gasos-sticky">
        <div className="gasos-topline">
          <div className="section-label">
            <span>01</span>
            <span>Featured project</span>
          </div>
          <span className="gasos-year">2026</span>
        </div>

        <motion.h2
          className="gasos-title"
          style={{ y: reduced ? 0 : titleY }}
        >
          GASOS
        </motion.h2>

        <div className="gasos-layout">
          <div className="gasos-story">
            <p className="gasos-story-kicker">Software for LPG distribution.</p>
            <h3>
              I started GASOS around a simple problem: one day&apos;s work was
              being tracked in too many places.
            </h3>
            <p>
              Orders, deliveries, stock and payments all affect each other.
              GASOS brings that work into one system while keeping the operation
              traceable from order to day close.
            </p>
            <a className="case-study-link" href="/work/gasos">
              View the case study <span aria-hidden="true">↗</span>
            </a>
          </div>

          <motion.div
            className="gasos-board"
            style={{
              y: reduced ? 0 : boardY,
              opacity: reduced ? 1 : boardOpacity,
            }}
          >
            <div className="gasos-board-head">
              <div>
                <span>Daily operation</span>
                <strong>Order → Day close</strong>
              </div>
              <span>GasOS / 01</span>
            </div>

            <div className="gasos-board-body">
              <div className="gasos-board-progress" aria-hidden="true">
                <motion.i
                  style={{ scaleY: reduced ? 1 : progressScale }}
                />
              </div>

              <div className="gasos-flow-list">
                {rows.map((row, index) => (
                  <FlowRow
                    key={row.index}
                    {...row}
                    progress={scrollYProgress}
                    order={index}
                    reduced={reduced}
                  />
                ))}
              </div>
            </div>

            <div className="gasos-board-foot">
              <span>One operating day</span>
              <span>One record of what happened</span>
            </div>
          </motion.div>
        </div>

        <div className="gasos-scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>

      <div className="gasos-mobile-fallback">
        <div className="section-label">
          <span>01</span>
          <span>Featured project</span>
        </div>

        <h2>GASOS</h2>
        <p className="gasos-mobile-lead">
          I started GASOS around a simple problem: one day&apos;s work was being
          tracked in too many places.
        </p>

        <div className="gasos-mobile-board">
          {rows.map((row) => (
            <div key={row.index} className="gasos-mobile-row">
              <span>{row.index}</span>
              <strong>{row.title}</strong>
              <small>{row.detail}</small>
            </div>
          ))}
        </div>

        <p>
          Orders, deliveries, stock and payments all affect each other. GASOS
          brings that work into one system while keeping the operation traceable
          from order to day close.
        </p>

        <a className="case-study-link" href="/work/gasos">
          View the case study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
