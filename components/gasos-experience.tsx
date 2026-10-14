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
  const opacity = useTransform(progress, [start, end], [0.82, 1]);
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
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [18, -42]);
  const boardY = useTransform(scrollYProgress, [0.06, 0.72], [36, 0]);
  const boardOpacity = useTransform(scrollYProgress, [0.04, 0.24], [0.92, 1]);
  const progressScale = useTransform(scrollYProgress, [0.08, 0.66], [0.08, 1]);

  const rows = [
    { index: "01", title: "Order & dispatch", detail: "Coordinate the work" },
    { index: "02", title: "Cylinder custody", detail: "Trace physical movement" },
    { index: "03", title: "Invoice & receivable", detail: "Link delivery to what is owed" },
    { index: "04", title: "Payments & cash", detail: "Record collections and handovers" },
    { index: "05", title: "Buku Penyata", detail: "Build source-linked reporting evidence" },
    { index: "06", title: "Daily close", detail: "Review differences and exceptions" },
  ];

  return (
    <section className="gasos-experience" id="work" ref={sectionRef}>
      <div className="gasos-sticky">
        <div className="gasos-topline">
          <div className="section-label">
            <span>01</span>
            <span>Featured product</span>
          </div>
          <div className="gasos-top-actions">
            <span className="gasos-year">2026</span>
            <a className="gasos-top-cta" href="/work/gasos">
              Full case study <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <motion.h2
          className="gasos-title"
          style={{ y: reduced ? 0 : titleY }}
        >
          GASOS
        </motion.h2>

        <div className="gasos-layout">
          <div className="gasos-story">
            <p className="gasos-story-kicker">Vertical SaaS · LPG distribution</p>
            <h3>
              One connected platform for LPG distribution.
            </h3>
            <p>
              Designed and engineered for the daily realities of LPG businesses,
              GasOS connects orders, deliveries, cylinder inventory, invoicing,
              payments and Buku Penyata reporting. The platform is expanding
              into native accounting, expenses, fleet operations and business
              management within one integrated product.
            </p>
            <a className="case-study-link" href="/work/gasos">
              Read the full case study <span aria-hidden="true">↗</span>
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
                <span>GasOS platform</span>
                <strong>From order to business-day close</strong>
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
              <span>GasOS Office + Delivery</span>
              <span>Connected operations, built for LPG</span>
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
          Making the physical and financial sides of LPG distribution agree.
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
          GasOS brings orders, deliveries, cylinder inventory, invoices, payments,
          cash handovers and Buku Penyata into one connected workspace.
          Development is expanding the platform with accounting, expenses,
          fleet management and additional business operations.
        </p>

        <a className="case-study-link" href="/work/gasos">
          Read the full case study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
