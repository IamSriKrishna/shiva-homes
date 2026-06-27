"use client";

import { useEffect } from "react";

const isDevtoolsShortcut = (event: KeyboardEvent) => {
  const { key, ctrlKey, shiftKey, metaKey, altKey } = event;
  const isCtrlOrMeta = ctrlKey || metaKey;

  if (key === "F12") return true;
  if (isCtrlOrMeta && shiftKey && ["I", "i", "C", "c", "J", "j"].includes(key)) return true;
  if (isCtrlOrMeta && ["U", "u"].includes(key)) return true;
  if (isCtrlOrMeta && shiftKey && ["S", "s"].includes(key)) return true;
  if (isCtrlOrMeta && ["P", "p"].includes(key) && altKey) return true; // alt+ctrl+P
  if (isCtrlOrMeta && shiftKey && ["P", "p"].includes(key)) return true;

  return false;
};

export default function BlockInspect() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (isDevtoolsShortcut(event)) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);

  return null;
}
