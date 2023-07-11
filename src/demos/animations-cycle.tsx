import { useState } from "react";
import { Anim } from "../anim";
import { InteractionIndicator } from "../components/interaction-indicator";
import { Item } from "../components/item";
import { useRunningArray } from "./_cycle-animations";

function AnimationsCycle(animations: Anim[]) {
  const [running, setRunning] = useState(false);
  const animation = useRunningArray(animations, running);

  return (
    <>
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
    </>
  );
}
