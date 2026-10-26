import { useRef, useState } from "react";

export function useDraggable() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const start = useRef<{ px: number; py: number; ox: number; oy: number } | null>(null);

  const onPointerDown = (e: React.PointerEvent) => {
    e.currentTarget.setPointerCapture(e.pointerId); // keeps tracking even if the cursor leaves the bar
    start.current = { px: e.clientX, py: e.clientY, ox: offset.x, oy: offset.y };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!start.current) return;
    setOffset({
      x: start.current.ox + e.clientX - start.current.px,
      y: start.current.oy + e.clientY - start.current.py,
    });
  };

  const onPointerUp = () => {
    start.current = null;
  };

  return {
    // put on the window container
    style: { transform: `translate(${offset.x}px, ${offset.y}px)` },
    // spread onto the title bar
    handle: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      style: { touchAction: "none", cursor: "grab" },
    },
  };
}