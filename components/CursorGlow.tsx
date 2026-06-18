// "use client";

// import { useEffect, useState } from "react";

// export default function CursorGlow() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       setPosition({
//         x: e.clientX,
//         y: e.clientY,
//       });
//     };

//     window.addEventListener("mousemove", move);

//     return () => {
//       window.removeEventListener("mousemove", move);
//     };
//   }, []);

//   return (
//     <div
//       className="pointer-events-none fixed z-[1] h-[300px] w-[300px] rounded-full bg-yellow-400/10 blur-3xl"
//       style={{
//         left: position.x - 150,
//         top: position.y - 150,
//       }}
//     />
//   );
// }