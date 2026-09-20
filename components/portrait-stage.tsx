"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function PortraitStage() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = Boolean(useReducedMotion());

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 92, damping: 22, mass: 0.55 });
  const y = useSpring(rawY, { stiffness: 92, damping: 22, mass: 0.55 });
  const rotateX = useSpring(rawRotateX, {
    stiffness: 105,
    damping: 24,
    mass: 0.5,
  });
  const rotateY = useSpring(rawRotateY, {
    stiffness: 105,
    damping: 24,
    mass: 0.5,
  });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;

    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;

    rawX.set(px * 14);
    rawY.set(py * 10);
    rawRotateY.set(px * 5.5);
    rawRotateX.set(py * -3.5);
  }

  function reset() {
    rawX.set(0);
    rawY.set(0);
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <div
      ref={ref}
      className="portrait-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      aria-hidden="true"
    >
      <div className="portrait-frame" />
      <div className="portrait-halo" />
      <div className="portrait-orbit portrait-orbit--one" />
      <div className="portrait-orbit portrait-orbit--two" />

      <motion.div
        className="portrait-shadow"
        style={{ x: reduceMotion ? 0 : x, y: reduceMotion ? 0 : y }}
      />

      <motion.div
        className="portrait-ghost"
        style={{
          x: reduceMotion ? 0 : x,
          y: reduceMotion ? 0 : y,
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
        }}
      >
        <img
          src="/portrait/shachin-home-v5.webp"
          alt=""
          className="portrait-img"
          draggable={false}
        />
      </motion.div>

      <motion.div
        className="portrait-person"
        style={{
          x: reduceMotion ? 0 : x,
          y: reduceMotion ? 0 : y,
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
        }}
      >
        <img
          src="/portrait/shachin-home-v5.webp"
          alt=""
          className="portrait-img"
          draggable={false}
        />
      </motion.div>

      <div className="portrait-caption">
        <span>SV / 2026</span>
        <span>Move cursor</span>
      </div>
      <div className="portrait-mark portrait-mark--top" />
      <div className="portrait-mark portrait-mark--bottom" />
    </div>
  );
}
