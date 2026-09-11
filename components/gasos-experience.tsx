"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

type NodeName = "orders" | "dispatch" | "delivery" | "payments" | "compliance" | "stock";

type NodeProps = {
  name: NodeName;
  label: string;
  index: string;
  progress: MotionValue<number>;
  order: number;
  reduced: boolean;
};

function SystemNode({ name, label, index, progress, order, reduced }: NodeProps) {
  const start = 0.12 + order * 0.055;
  const opacity = useTransform(progress, [start, start + 0.16], [0.22, 1]);
  const scale = useTransform(progress, [start, start + 0.16], [0.92, 1]);
  const y = useTransform(progress, [start, start + 0.16], [10, 0]);

  return (
    <motion.div
      className={`gasos-node gasos-node--${name}`}
      style={{
        opacity: reduced ? 1 : opacity,
        scale: reduced ? 1 : scale,
        y: reduced ? 0 : y,
      }}
    >
      <span>{index}</span>
      <strong>{label}</strong>
    </motion.div>
  );
}

export function GasosExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const reduced = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.08, 0.58], [0, 1]);
  const orbitOpacity = useTransform(scrollYProgress, [0.04, 0.45], [0.16, 0.7]);
  const coreScale = useTransform(scrollYProgress, [0.05, 0.52], [0.88, 1]);
  const stateOpacity = useTransform(scrollYProgress, [0.42, 0.66], [0, 1]);
  const stateY = useTransform(scrollYProgress, [0.42, 0.66], [16, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.8], [16, -34]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.7 });
  const py = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.7 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const bounds = visualRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x * 4);
    pointerY.set(y * 4);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const nodes: Array<{ name: NodeName; label: string; index: string }> = [
    { name: "orders", label: "Orders", index: "01" },
    { name: "dispatch", label: "Dispatch", index: "02" },
    { name: "delivery", label: "Delivery", index: "03" },
    { name: "payments", label: "Payments", index: "04" },
    { name: "compliance", label: "Compliance", index: "05" },
    { name: "stock", label: "Stock", index: "06" },
  ];

  return (
    <section className="gasos-experience" id="work" ref={sectionRef}>
      <div className="gasos-sticky">
        <div className="gasos-topline">
          <div className="section-label">
            <span>01</span>
            <span>Featured system</span>
          </div>
          <div className="gasos-status">
            <i aria-hidden="true" />
            Pilot validation
          </div>
        </div>

        <motion.p
          className="gasos-ghost-title"
          aria-hidden="true"
          style={{ y: reduced ? 0 : titleY }}
        >
          GASOS
        </motion.p>

        <div className="gasos-layout">
          <div className="gasos-story">
            <p className="gasos-story-kicker">Operations, made legible.</p>
            <h2>One system for work that used to live everywhere.</h2>
            <p>
              Orders, delivery, stock and payments all change the same operation.
              GASOS brings those moving parts into one auditable workflow.
            </p>
            <a className="case-study-link" href="/work/gasos">
              Explore the case study <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="gasos-visual-column">
            <motion.div
              ref={visualRef}
              className="gasos-network"
              style={{ x: reduced ? 0 : px, y: reduced ? 0 : py }}
              onPointerMove={handlePointerMove}
              onPointerLeave={resetPointer}
              aria-label="Diagram showing GASOS connecting operational workflows"
            >
              <motion.svg
                className="gasos-links"
                viewBox="0 0 100 100"
                aria-hidden="true"
                style={{ opacity: reduced ? 0.72 : orbitOpacity }}
              >
                <motion.line x1="50" y1="50" x2="23" y2="29" pathLength="1" style={{ pathLength: reduced ? 1 : lineProgress }} />
                <motion.line x1="50" y1="50" x2="50" y2="13" pathLength="1" style={{ pathLength: reduced ? 1 : lineProgress }} />
                <motion.line x1="50" y1="50" x2="77" y2="29" pathLength="1" style={{ pathLength: reduced ? 1 : lineProgress }} />
                <motion.line x1="50" y1="50" x2="77" y2="71" pathLength="1" style={{ pathLength: reduced ? 1 : lineProgress }} />
                <motion.line x1="50" y1="50" x2="50" y2="87" pathLength="1" style={{ pathLength: reduced ? 1 : lineProgress }} />
                <motion.line x1="50" y1="50" x2="23" y2="71" pathLength="1" style={{ pathLength: reduced ? 1 : lineProgress }} />
                <circle cx="50" cy="50" r="19" />
                <circle cx="50" cy="50" r="30" className="gasos-links-faint" />
              </motion.svg>

              {nodes.map((node, index) => (
                <SystemNode
                  key={node.name}
                  {...node}
                  progress={scrollYProgress}
                  order={index}
                  reduced={reduced}
                />
              ))}

              <motion.div
                className="gasos-core-interactive"
                style={{ scale: reduced ? 1 : coreScale }}
              >
                <span>G</span>
                <small>GASOS</small>
              </motion.div>
            </motion.div>

            <motion.div
              className="gasos-state-strip"
              style={{
                opacity: reduced ? 1 : stateOpacity,
                y: reduced ? 0 : stateY,
              }}
            >
              <span>System state</span>
              <strong>Connected</strong>
              <i />
              <b>06</b>
              <small>operational streams</small>
            </motion.div>
          </div>
        </div>

        <div className="gasos-scroll-cue" aria-hidden="true">
          <span>Scroll</span>
          <i />
          <span>Connect</span>
        </div>
      </div>

      <div className="gasos-mobile-fallback">
        <div className="section-label">
          <span>01</span>
          <span>Featured system</span>
        </div>

        <h2>GASOS</h2>
        <p className="gasos-mobile-lead">
          One system for work that used to live everywhere.
        </p>

        <motion.div
          className="gasos-mobile-network"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="gasos-mobile-core">G</div>
          {nodes.map((node) => (
            <span key={node.name}>{node.label}</span>
          ))}
        </motion.div>

        <p>
          Orders, delivery, stock and payments all change the same operation.
          GASOS brings those moving parts into one auditable workflow.
        </p>

        <a className="case-study-link" href="/work/gasos">
          Explore the case study <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
