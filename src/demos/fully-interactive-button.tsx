import { useState } from "react";
import { InteractionIndicator } from "../components/interaction-indicator";
import { InteractiveButton } from "../components/interactive-button";

let shouldResolve = true;

export function FullyInteractiveButton() {
  const [disabled, setDisabled] = useState(false);
  const [onoff, setOnoff] = useState<boolean | undefined>(undefined);

  const autoResolve = () =>
    new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (shouldResolve) {
          resolve();
          setOnoff((x) => (x === undefined ? undefined : !x));
        } else reject();

        // lazy way to toggle between resolve and reject
        shouldResolve = !shouldResolve;
      }, 800)
    );

  return (
    <>
      <div className="card">
        <InteractiveButton disabled={disabled} onClick={autoResolve} on={onoff}>
          apply
        </InteractiveButton>

        <InteractionIndicator />
      </div>

      <div className="card">
        <h2>Modifiers</h2>
        <label>
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />{" "}
          disable
        </label>

        <br />

        <label>
          <input
            type="checkbox"
            checked={onoff !== undefined}
            onChange={(e) => setOnoff(e.target.checked ? false : undefined)}
          />{" "}
          on-off
        </label>
      </div>
    </>
  );
}
