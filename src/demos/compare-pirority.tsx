import { useState } from "react";
import { accents } from "../components/accent";
import { Item } from "../components/item";
import { useRunningArray } from "./_cycle-animations";

export function ComparePriority() {
  const [grayscale, setGrayscale] = useState(false);
  const [running, setRunning] = useState(false);
  const chosen = useRunningArray(
    [
      { value: true, duration: 1000 },
      { value: false, duration: 1000 },
    ],
    running
  );

  const firstOn = chosen.value;

  return (
    <>
      <div
        className="card"
        style={{ filter: grayscale ? "grayscale(1)" : undefined }}
      >
        <Item className={firstOn ? accents.success : undefined} />
        <Item className={!firstOn ? accents.success : undefined} />
      </div>
      <div className="card">
        <div>
          <input
            type="checkbox"
            checked={running}
            onChange={() => setRunning((x) => !x)}
          />
          start
        </div>
        <div>
          <input
            type="checkbox"
            checked={grayscale}
            onChange={() => setGrayscale((x) => !x)}
          />
          grayscale
        </div>
      </div>
    </>
  );
}
