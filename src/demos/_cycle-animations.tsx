import { useEffect, useState } from "react";

type DurationHaver = { duration?: number };

export function useRunningArray<T extends DurationHaver>(
  array: T[],
  running: boolean
) {
  const [idx, setIdx] = useState(0);
  const total = array.length;
  const item = array[idx];

  useEffect(() => {
    if (!running) return () => {};
    const { duration = 1000 } = item;

    const tid = setTimeout(() => {
      setIdx((x) => (x + 1) % total);
    }, duration);
    return () => clearTimeout(tid);
  }, [running, item, total]);

  return item;
}
