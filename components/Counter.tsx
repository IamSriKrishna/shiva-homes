"use client";

import CountUp from "react-countup";

type CounterProps = {
  end: number;
  suffix?: string;
};

export default function Counter({
  end,
  suffix = "",
}: CounterProps) {
  return (
    <CountUp
      start={0}
      end={end}
      duration={5}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <span ref={countUpRef}>
          {suffix}
        </span>
      )}
    </CountUp>
  );
}