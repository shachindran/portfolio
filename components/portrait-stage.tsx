"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function PortraitStage() {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    const px = (event.clientX - bounds.left) / bounds.width - 0.5;
    const py = (event.clientY - bounds.top) / bounds.height - 0.5;
    rawX.set(px * 10);
    rawY.set(py * 8);
  }

  function reset() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div ref={ref} className="portrait-stage" onPointerMove={handlePointerMove} onPointerLeave={reset} aria-hidden="true">
      <div className="portrait-frame" />
      <motion.div className="portrait-shadow" style={{ x, y }} />
      <motion.div className="portrait-person" style={{ x, y }}>
        <Image src="/shachin-portrait.png" alt="" fill priority sizes="(max-width: 900px) 86vw, 42vw" />
      </motion.div>
      <div className="portrait-mark portrait-mark--top" />
      <div className="portrait-mark portrait-mark--bottom" />
    </div>
  );
}
