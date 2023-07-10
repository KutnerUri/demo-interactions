import { useState } from "react";
import { InteractionIndicator } from "../components/interaction-indicator";
import { InteractiveElement } from "../components/interactive";
import { modernTheme } from "../components/theme";
import { shadowTheme } from "../theme/shadows";

export function RegularButton() {
  const [disabled, setDisabled] = useState(false);

  const autoResolve = () => new Promise((resolve) => setTimeout(resolve, 1000));

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
