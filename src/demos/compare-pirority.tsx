import { useState } from "react";
import { accents } from "../components/accent";
import { Item } from "../components/item";
import { modernTheme } from "../components/theme";
import { shadowTheme } from "../theme/shadows";
import { useRunningArray } from "./_cycle-animations";

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
          onChange={() => setRunning((x) => !x)} />
        start
      </div>
    </div>
  );
}
