import { useState } from "react";
import { InteractionIndicator } from "../components/interaction-indicator";
import { InteractiveButton } from "../components/interactive-button";

let first = true;
const autoResolve = () =>
  new Promise<void>((resolve, reject) =>
    setTimeout(() => {
      if (first) resolve();
      else reject();

      first = !first;
    }, 800)
  );

export function FullyInteractiveButton() {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <div className="card">
        <InteractiveButton disabled={disabled} onClick={autoResolve}>
          apply
        </InteractiveButton>

        <InteractionIndicator />

        {/* <InteractiveElement disabled={disabled} onClick={autoResolve}>
          cancel
        </InteractiveElement> */}
      </div>

      <div className="card">
        <input
          type="checkbox"
          checked={disabled}
          onChange={(e) => setDisabled(e.target.checked)}
        />
        disable
      </div>
    </>
  );
}
