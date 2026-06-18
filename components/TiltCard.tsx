"use client";

import Tilt from "react-parallax-tilt";

export default function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      glareEnable
      glareMaxOpacity={0.15}
      glareColor="#facc15"
      glarePosition="all"
      scale={1.02}
      transitionSpeed={1200}
      className={className}
    >
      {children}
    </Tilt>
  );
}
