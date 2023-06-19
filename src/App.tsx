import { CssComponent } from "@stitches/react/types/styled-component";
import { useEffect, useState } from "react";
import "./App.css";
import { Item } from "./components/item";
// import { motionAnimations } from "./effects/movement";
import { changeAnimation } from "./effects/change";

export type Anim = {
  style: CssComponent;
  displayName: string;
  duration?: number;
};

function App() {
  const [running, setRunning] = useState(false);
  const [idx, setIdx] = useState(0);
  const total = changeAnimation.length;
  const animation = changeAnimation[idx];

  useEffect(() => {
    if (!running) return () => {};
    const { duration = 1000 } = animation;

    const tid = setTimeout(() => {
      setIdx((x) => (x + 1) % total);
    }, duration);
    return () => clearTimeout(tid);
  }, [running, animation, total]);

  return (
    <div>
      <div className={["App"].join(" ")}>
        <Item className={animation.style()} />
        {/* <Item className={animation.style()} /> */}
        <span>{animation.displayName}</span>
      </div>
      <div className={["App"].join(" ")}>
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

export default App;
