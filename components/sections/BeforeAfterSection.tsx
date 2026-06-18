"use client";

import { useState, useRef, useCallback } from "react";

export default function BeforeAfterSection() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPosition(pct);
  }, []);

  const onMouseDown = () => { isDragging.current = true; };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };
  const onMouseUp = () => { isDragging.current = false; };
  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <section className="bg-black px-6 py-32 md:px-20">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
          Transformation
        </p>
        <h2 className="max-w-4xl text-4xl font-black text-white md:text-6xl">
          See how we transform spaces.
        </h2>

        <div
          ref={containerRef}
          className="relative mt-16 w-full aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 select-none cursor-ew-resize"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchMove={onTouchMove}
          onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
        >
          {/* AFTER — base layer, full size */}
          <img
            src="/after.png"
            alt="After"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* BEFORE — clipped, both images stay locked in place */}
          <img
            src="/before.png"
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            draggable={false}
          />

          {/* Divider line + handle */}
          <div
            className="absolute top-0 h-full z-20 pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-0 bottom-0 w-0.5 bg-yellow-400 -translate-x-1/2" />
            <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="black" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Labels */}
          <span className="absolute left-4 top-4 z-10 rounded-full bg-black/70 px-4 py-1.5 text-sm font-bold text-white pointer-events-none">
            Before
          </span>
          <span className="absolute right-4 top-4 z-10 rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-bold text-black pointer-events-none">
            After
          </span>
        </div>
      </div>
    </section>
  );
}