import { useEffect, useState } from "react";
import "./App.css";
import { InteractionIndicator } from "./components/interaction-indicator";
import { InteractiveElement } from "./components/interactive";
import { modernTheme } from "./components/theme";
import { shadowTheme } from "./theme/shadows";
import { Anim } from "./anim";
import { Item } from "./components/item";
import { accents } from "./components/accent";

function RegularButton() {
  const [disabled, setDisabled] = useState(false);

  const autoResolve = () =>
    new Promise((resolve, reject) => setTimeout(resolve, 1000));

  return (
    <div className={[modernTheme(), shadowTheme()].join(" ")}>
      <div className="card">
        <InteractiveElement disabled={disabled} onClick={autoResolve}>
          submit
        </InteractiveElement>

        <InteractionIndicator />
      </div>

      <div className="card">
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled((x) => !x)}
        />
        disable
      </div>
    </div>
  );
}

function CheckableButton() {
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <div className={[modernTheme(), shadowTheme()].join(" ")}>
      <div className="card">
        <InteractiveElement
          disabled={disabled}
          onClick={() => setChecked((x) => !x)}
          on={checked}
        >
          submit
        </InteractiveElement>

        <InteractionIndicator />
      </div>
      <div className="card">
        <input
          type="checkbox"
          checked={disabled}
          onChange={() => setDisabled((x) => !x)}
        />
        disable
      </div>
    </div>
  );
}

function AnimationsCycle(animations: Anim[]) {
  const [running, setRunning] = useState(false);
  const animation = useRunningArray(animations, running);

  return (
    <div className={[modernTheme(), shadowTheme()].join(" ")}>
      <div className="card">
        <Item className={animation.style()}>
          <InteractionIndicator />
        </Item>
        <span>{animation.displayName}</span>
      </div>
      <div className="card">
        <input
          type="checkbox"
          checked={running}
          onChange={() => setRunning((x) => !x)}
        />
        start
      </div>
    </div>
  );
}

// TODO - show this app compare for different hues
// and explain how you can see this in grayscale

function ComparePriority() {
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
    <div className={[modernTheme(), shadowTheme()].join(" ")}>
      <div className="card">
        <Item className={firstOn ? accents.success : undefined} />
        <Item className={!firstOn ? accents.success : undefined} />
      </div>
      <div className="card">
        <input
          type="checkbox"
          checked={running}
          onChange={() => setRunning((x) => !x)}
        />
        start
      </div>
    </div>
  );
}

type DurationHaver = { duration?: number };
function useRunningArray<T extends DurationHaver>(
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

export default function App() {
  return <RegularButton />;
}
