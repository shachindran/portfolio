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

type NodeProps = {
  label: string;
  index: string;
  progress: MotionValue<number>;
  from: [number, number];
  to: [number, number];
  reduced: boolean;
};

function SystemNode({ label, index, progress, from, to, reduced }: NodeProps) {
  const x = useTransform(progress, [0, 1], [from[0], to[0]]);
  const y = useTransform(progress, [0, 1], [from[1], to[1]]);
  const opacity = useTransform(progress, [0, 0.15, 1], [0.4, 0.8, 1]);

  return (
    <motion.div
      className="gasos-node"
      style={{
        x: reduced ? to[0] : x,
        y: reduced ? to[1] : y,
        opacity: reduced ? 1 : opacity,
      }}
    >
      <span>{index}</span>
      <strong>{label}</strong>
    </motion.div>
  );
}

export function GasosExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const reduced = Boolean(useReducedMotion());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const connect = useTransform(scrollYProgress, [0.08, 0.56], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.75], [80, -100]);
  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.12, 0.82, 1],
    [0.22, 0.45, 0.28, 0.08],
  );
  const cardY = useTransform(scrollYProgress, [0.3, 0.75], [44, 0]);
  const cardOpacity = useTransform(scrollYProgress, [0.26, 0.54], [0, 1]);
  const lineOpacity = useTransform(connect, [0, 0.35, 1], [0.08, 0.3, 0.82]);
  const coreScale = useTransform(connect, [0, 1], [0.9, 1]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 80, damping: 20, mass: 0.6 });
  const py = useSpring(pointerY, { stiffness: 80, damping: 20, mass: 0.6 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced) return;
    const bounds = canvasRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(x * 12);
    pointerY.set(y * 10);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  const nodes = [
    {
      label: "Orders",
      index: "01",
      from: [-320, -210] as [number, number],
      to: [-218, -132] as [number, number],
    },
    {
      label: "Dispatch",
      index: "02",
      from: [0, -320] as [number, number],
      to: [0, -188] as [number, number],
    },
    {
      label: "Delivery",
      index: "03",
      from: [330, -200] as [number, number],
      to: [218, -126] as [number, number],
    },
    {
      label: "Payments",
      index: "04",
      from: [340, 210] as [number, number],
      to: [220, 126] as [number, number],
    },
    {
      label: "Compliance",
      index: "05",
      from: [0, 330] as [number, number],
      to: [0, 192] as [number, number],
    },
    {
      label: "Stock",
      index: "06",
      from: [-340, 210] as [number, number],
      to: [-222, 126] as [number, number],
    },
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
          style={{
            y: reduced ? 0 : titleY,
            opacity: reduced ? 0.28 : titleOpacity,
          }}
        >
          GASOS
        </motion.p>

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

        <motion.div
          ref={canvasRef}
          className="gasos-canvas"
          style={{ x: reduced ? 0 : px, y: reduced ? 0 : py }}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          aria-label="Interactive diagram showing GASOS connecting operational workflows"
        >
          <svg className="gasos-links" viewBox="-360 -260 720 520" aria-hidden="true">
            <motion.line x1="0" y1="0" x2="-218" y2="-132" style={{ opacity: lineOpacity }} />
            <motion.line x1="0" y1="0" x2="0" y2="-188" style={{ opacity: lineOpacity }} />
            <motion.line x1="0" y1="0" x2="218" y2="-126" style={{ opacity: lineOpacity }} />
            <motion.line x1="0" y1="0" x2="220" y2="126" style={{ opacity: lineOpacity }} />
            <motion.line x1="0" y1="0" x2="0" y2="192" style={{ opacity: lineOpacity }} />
            <motion.line x1="0" y1="0" x2="-222" y2="126" style={{ opacity: lineOpacity }} />
            <circle cx="0" cy="0" r="112" />
            <circle cx="0" cy="0" r="176" className="gasos-links-faint" />
          </svg>

          <div className="gasos-orbit" aria-hidden="true" />

          {nodes.map((node) => (
            <SystemNode
              key={node.label}
              {...node}
              progress={connect}
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

          <motion.div
            className="gasos-state-card"
            style={{
              y: reduced ? 0 : cardY,
              opacity: reduced ? 1 : cardOpacity,
            }}
          >
            <span>System state</span>
            <strong>Connected</strong>
            <div>
              <b>06</b>
              <small>operational streams</small>
            </div>
          </motion.div>
        </motion.div>

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
        <div className="gasos-mobile-grid">
          {nodes.map((node) => (
            <span key={node.label}>{node.label}</span>
          ))}
        </div>
        <div className="gasos-mobile-core">GASOS</div>
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
